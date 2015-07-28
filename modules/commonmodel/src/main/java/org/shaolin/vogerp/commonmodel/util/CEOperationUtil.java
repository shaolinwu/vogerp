package org.shaolin.vogerp.commonmodel.util;

import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.shaolin.bmdp.runtime.ce.AbstractConstant;
import org.shaolin.bmdp.runtime.ce.DynamicConstant;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.spi.IConstantService;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.uimaster.page.ajax.Table;
import org.shaolin.uimaster.page.ajax.TreeItem;
import org.shaolin.uimaster.page.ajax.json.JSONArray;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.shaolin.vogerp.commonmodel.be.CEExtensionImpl;
import org.shaolin.vogerp.commonmodel.be.CEHierarchyImpl;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;

public class CEOperationUtil {

	public static void syncTable(List<CEExtensionImpl> data, Table table) {
		for (CEExtensionImpl v : data) { 
			if (v.getId() == 0) {
				table.getAddItems().add(v);
			} 
		}
	}
	
	public static CEExtensionImpl convertSingD2C(IConstantEntity v) {
		CEExtensionImpl record = new CEExtensionImpl();
		record.setCeName(v.getEntityName());
		record.setIntValue(v.getIntValue());
		record.setStringValue(v.getValue());
		record.setDescription(v.getDescription());
		if (v.getI18nBundle() != null && v.getI18nBundle().length() > 0) {
			record.setI18nKey(v.getI18nBundle() + "||" + v.getI18nKey());
		}
		record.setId(v.getRecordId());
		return record;
	}
	
	public static List<CEExtensionImpl> convertD2C(String ceName) {
		IConstantService cs = IServerServiceManager.INSTANCE.getConstantService();
		IConstantEntity ce = cs.getConstantEntity(ceName);
		List<IConstantEntity> values = ce.getConstantList();
		
		List<CEExtensionImpl> records = new ArrayList<CEExtensionImpl>();
		for (IConstantEntity v : values) {
			if (v.getIntValue() == -1) {
				//filter IConstantEntity.UNSPECIFIED.
				continue;
			}
			CEExtensionImpl record = new CEExtensionImpl();
			record.setCeName(ceName);
			record.setIntValue(v.getIntValue());
			record.setStringValue(v.getValue());
			record.setDescription(v.getDescription());
			if (ce.getI18nBundle() != null && ce.getI18nBundle().length() > 0) {
				record.setI18nKey(ce.getI18nBundle() + "||" + v.getI18nKey());
			}
			record.setId(v.getRecordId());
			
			records.add(record);
		}
		return records;
	}
	
	/**
	 * @param values
	 * @return
	 */
	public static IConstantEntity[] convertC2D(List<CEExtensionImpl> values) throws Exception {
		if (values == null || values.size() == 0) {
			return new AbstractConstant[0];
		}
		Map<String, AbstractConstant> ceMap = new LinkedHashMap<String, AbstractConstant>();
		for (CEExtensionImpl v : values) {
			AbstractConstant record = null;
			try {
				// supposed it's a static constant first.
				Constructor cons = Class.forName(v.getCeName()).getDeclaredConstructor(
						new Class[]{long.class, String.class, int.class, String.class, String.class});
				cons.setAccessible(true);
				record = (AbstractConstant)cons.newInstance(
						new Object[]{v.getId(), v.getStringValue(), v.getIntValue(), 
								v.getI18nKey(), v.getDescription()});
			} catch (ClassNotFoundException e) {
				//it's a dynamic extension constant.
				record = new DynamicConstant(v.getCeName(), v.getId());
				record.setDescription(v.getDescription());
				record.setIntValue(v.getIntValue());
				record.setValue(v.getStringValue());
			}
			
			if (v.getI18nKey() != null && v.getI18nKey().length() > 0) {
				if (v.getI18nKey().indexOf("||") != -1) {
					record.setI18nBundle(v.getI18nKey().substring(0,
							v.getI18nKey().indexOf("||")));
					record.setI18nKey(v.getI18nKey().substring(
							v.getI18nKey().indexOf("||") + 2));
				} else {
					record.setI18nKey(v.getI18nKey());
				}
			}
			
			if (ceMap.containsKey(record.getEntityName())) {
				ceMap.get(record.getEntityName()).addConstant(record);
			} else {
				record.addConstant(record);//add itself.
				ceMap.put(record.getEntityName(), record);
			}
		}
		IConstantEntity[] constants = new IConstantEntity[ceMap.size()]; 
		ceMap.values().toArray(constants);
		return constants;
	}
	
	public static IConstantEntity convertSingleC2D(List<CEExtensionImpl> values) throws Exception {
		IConstantEntity[] items = convertC2D(values);
		if (items.length > 0) {
			return items[0];
		}
		return null;
	}
	
	public static List<IConstantEntity> query(IConstantEntity condition, int offset, int count) {
		return IServerServiceManager.INSTANCE.getConstantService().getServerConstants(condition, offset, count);
	}
	
	public static int queryCount(IConstantEntity condition) {
		return IServerServiceManager.INSTANCE.getConstantService().getServerConstantCount(condition);
	}
	
	public static List<IConstantEntity> queryServerCE(IConstantEntity condition, int offset, int count) {
		return IServerServiceManager.INSTANCE.getConstantService().getServerConstants(condition, offset, count);
	}
	
	public static int queryServerCECount(IConstantEntity condition) {
		return IServerServiceManager.INSTANCE.getConstantService().getServerConstantCount(condition);
	}
	
	/**
	 * FIXME: prevent the dead recursive.
	 * 
	 * @param result
	 * @param parentNode
	 * @param ce
	 * @return
	 */
	public static ArrayList<TreeItem> getCEHierarchy(List<CEHierarchyImpl> hierarchy, ArrayList<TreeItem> result, TreeItem parentNode, IConstantEntity ce) {
		if (hierarchy == null) {
			CEHierarchyImpl condition = new CEHierarchyImpl();
			condition.setParentCeItem(-1);
			hierarchy = ModularityModel.INSTANCE.searchCEHierarchy(condition, null, 0, -1);
		}
		
		// ce node.
		String nodeId = ce.getEntityName().replace('.', '_');
		
		if (parentNode == null) {
			// create the root node for the first time.
			TreeItem ceNode = new TreeItem();
			ceNode.setId(nodeId);
			ceNode.setText(ce.getI18nEntityName());
			ceNode.setHasChildren(true);
			parentNode = ceNode;
			result.add(ceNode);
		}
		
		IConstantService cs = IServerServiceManager.INSTANCE.getConstantService();
		List<IConstantEntity> items = ce.getConstantList();
		for (IConstantEntity item: items) {
			if (item.getIntValue() == -1) {
				continue;
			}
			TreeItem ceItem = new TreeItem();
			ceItem.setId(nodeId + "_"+item.getIntValue());
			ceItem.setText(item.getDisplayName());
			parentNode.getChildren().add(ceItem);
			
			if (hierarchy.size() > 0 && hasChild(item.getEntityName(), item.getIntValue(), hierarchy)){
				ceItem.setHasChildren(true);
				for (CEHierarchyImpl c : hierarchy) {
					if (c.getParentCeName().equals(item.getEntityName()) 
							&& c.getParentCeItem() == item.getIntValue()) {
						getCEHierarchy(hierarchy, null, ceItem, 
								cs.getConstantEntity(c.getCeName()));
						break;
					}
				}
			}
		}
		
		return result;
	}
	
	public static void getCEComboBox(String space, List<CEHierarchyImpl> hierarchy, 
			ArrayList<String> values, ArrayList<String> displayItems, 
			IConstantEntity ce) {
		if (hierarchy == null) {
			CEHierarchyImpl condition = new CEHierarchyImpl();
			condition.setParentCeItem(-1);
			hierarchy = ModularityModel.INSTANCE.searchCEHierarchy(condition, null, 0, -1);
		}
		
		// ce node.
		String nodeId = ce.getI18nEntityName();
		if (space.isEmpty()) { // root.
			values.add(nodeId);
			displayItems.add(ce.getDisplayName());
			space = "--";
		}
		
		IConstantService cs = IServerServiceManager.INSTANCE.getConstantService();
		List<IConstantEntity> items = ce.getConstantList();
		for (IConstantEntity item: items) {
			if (item.getIntValue() == -1) {
				continue;
			}
			values.add(nodeId + "," + item.getIntValue());
			displayItems.add(space + item.getDisplayName());
			if (hierarchy.size() > 0 && hasChild(item.getEntityName(), item.getIntValue(), hierarchy)){
				for (CEHierarchyImpl c : hierarchy) {
					if (c.getParentCeName().equals(item.getEntityName()) 
							&& c.getParentCeItem() == item.getIntValue()) {
						getCEComboBox(space + "--", hierarchy, values, displayItems, 
								cs.getConstantEntity(c.getCeName()));
						break;
					}
				}
			}
		}
	}
	
	public static void getCEComboBox(ArrayList<String> values, ArrayList<String> displayItems, IConstantEntity ce) {
		List<IConstantEntity> items = ce.getConstantList();
		for (IConstantEntity item: items) {
			if (item.getIntValue() == -1) {
				continue;
			}
			values.add(ce.getEntityName() + "," + item.getIntValue());
			displayItems.add(item.getDisplayName());
		}
	}
	
	private static boolean hasChild(String ceName, int intValue, List<CEHierarchyImpl> children) {
		for (CEHierarchyImpl c : children) {
			if (ceName.equals(c.getParentCeName()) && intValue == c.getParentCeItem()) {
				return true;
			}
		}
		return false;
	}
	
	public static List<IConstantEntity> toCElist(String value) {
		if (value == null || value.trim().isEmpty()) {
			return Collections.emptyList();
		}
		
		try {
			IConstantService cs = IServerServiceManager.INSTANCE.getConstantService();
			ArrayList<IConstantEntity> ceValues = new ArrayList<IConstantEntity>();
			if (value.startsWith("[")) {
				JSONArray array = new JSONArray(value);
				int length = array.length();
				for (int i=0; i<length; i++) {
					JSONObject item = array.getJSONObject(i);
					IConstantEntity constantEntity = cs.getConstantEntity(String.valueOf(item.get("name")));
					String values = (String)item.get("value");
					if (values.indexOf(',') != -1) {
						String[] vs= values.split(",");
						for (String v: vs) {
							ceValues.add(constantEntity.getByIntValue(Integer.valueOf(v)));
						}
					} else {
						ceValues.add(constantEntity.getByIntValue(Integer.valueOf(values)));
					}
				}
			} else {
				String[] vs= value.split(",");
				if (vs.length < 2) {
					throw new Exception();
				}
				ceValues.add(cs.getConstantEntity(vs[0]).getByIntValue(Integer.valueOf(vs[1])));
			}
			return ceValues;
		} catch (Exception e) {
			throw new IllegalArgumentException("Failed to convert the CE JSON string: " + value, e);
		}
	}
	
	public static String toHTMLString(String value) {
		if (value == null || value.trim().isEmpty()) {
			return "";
		}
		
		StringBuffer sb = new StringBuffer();
		try {
			IConstantService cs = IServerServiceManager.INSTANCE.getConstantService();
			if (value.startsWith("[")) {
				JSONArray array = new JSONArray(value);
				int length = array.length();
				for (int i=0; i<length; i++) {
					JSONObject item = array.getJSONObject(i);
					IConstantEntity ceObject = cs.getConstantEntity(String.valueOf(item.get("name")));
					
					sb.append(ceObject.getI18nEntityName()).append(": ");
					String values = (String)item.get("value");
					if (values.indexOf(',') != -1) {
						String[] vs= values.split(",");
						for (String v: vs) {
							sb.append(ceObject.getByIntValue(Integer.valueOf(v)).getDisplayName()).append(",");
						}
						sb.deleteCharAt(sb.length() - 1);
					} else {
						sb.append(ceObject.getByIntValue(Integer.valueOf(values)).getDisplayName());
					}
					sb.append(",");
				}
				sb.deleteCharAt(sb.length() - 1);
			} else {
				String[] vs= value.split(",");
				if (vs.length < 2) {
					throw new IllegalArgumentException(value + " illegal value.");
				}
				IConstantEntity ceObject = cs.getConstantEntity(vs[0]);
				sb.append(ceObject.getI18nEntityName()).append(": ");
				sb.append(ceObject.getByIntValue(Integer.valueOf(vs[1])).getDisplayName());
			}
			return sb.toString();
		} catch (Exception e) {
			throw new IllegalArgumentException("Failed to convert the CE JSON string: " + value, e);
		}
	}
}
