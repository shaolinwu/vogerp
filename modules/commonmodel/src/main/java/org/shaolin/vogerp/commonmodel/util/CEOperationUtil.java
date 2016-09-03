package org.shaolin.vogerp.commonmodel.util;

import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import org.shaolin.bmdp.runtime.ce.AbstractConstant;
import org.shaolin.bmdp.runtime.ce.CEUtil;
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
import org.shaolin.vogerp.commonmodel.be.ICEExtension;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;

public class CEOperationUtil {

	public static void syncTable(List<CEExtensionImpl> data, Table table) {
		for (CEExtensionImpl v : data) { 
			if (v.getId() == 0) {
				table.getListData().add(v);
			} 
		}
	}
	
	public static IConstantEntity convertSingD2C(ICEExtension v) {
		DynamicConstant record = new DynamicConstant(v.getCeName(), v.getId());
		record.setDescription(v.getDescription());
		record.setIntValue(v.getIntValue());
		record.setValue(v.getStringValue());
		return record;
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
	public static IConstantEntity[] convertC2D(List<ICEExtension> values) throws Exception {
		if (values == null || values.size() == 0) {
			return new AbstractConstant[0];
		}
		Map<String, AbstractConstant> ceMap = new LinkedHashMap<String, AbstractConstant>();
		for (ICEExtension v : values) {
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
			if (v.getIcon() != null && v.getIcon().length() > 0) {
				record.setIcon(v.getIcon());
			}
			if (v.getBigIcon() != null && v.getBigIcon().length() > 0) {
				record.setBigIcon(v.getBigIcon());
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
	
	public static IConstantEntity convertSingleC2D(List<ICEExtension> values) throws Exception {
		IConstantEntity[] items = convertC2D(values);
		if (items.length > 0) {
			return items[0];
		}
		return null;
	}
	
	public static void createHierarchy(String ceName, String parentCe, Integer parentIntValue) {
		CEHierarchyImpl hierarchy = new CEHierarchyImpl();
		hierarchy.setParentCeName(parentCe);
		hierarchy.setParentCeItem(parentIntValue);
		
		if (ModularityModel.INSTANCE.searchCEHierarchyCount(hierarchy) == 0) {
			hierarchy.setCeName(ceName);
			hierarchy.setEnabled(true);
			CommonModel.INSTANCE.create(hierarchy);
		}
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
	 * @param result
	 * @param parentNode
	 * @param ce
	 * @return
	 */
	public static ArrayList<TreeItem> getCEHierarchy(Integer openLevels, ArrayList<TreeItem> result, TreeItem parentNode, IConstantEntity ce) {
		if (openLevels == 0 || ce == null) {
			return result;
		}

		// ce node.
		String nodeId = ce.getEntityName().replace('.', '_');
		if (parentNode == null) {
			// create the root node for the first time.
			TreeItem ceNode = new TreeItem();
			ceNode.setId(nodeId);
			ceNode.setText(ce.getI18nEntityName());
			ceNode.setIcon(ce.getIcon());
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
			ceItem.setIcon(item.getIcon());
			parentNode.getChildren().add(ceItem);
			
			IConstantEntity kid = cs.getChildren(item);
			if (kid != null){
				ceItem.setHasChildren(true);
				getCEHierarchy((openLevels - 1), null, ceItem, cs.getConstantEntity(kid.getEntityName()));
			}
		}
		
		return result;
	}
	
	public static ArrayList<TreeItem> getCEChildren(ArrayList<TreeItem> result, IConstantEntity ce) {
		if (ce == null) {
			return result;
		}

		// ce node.
		String nodeId = ce.getEntityName().replace('.', '_');
		IConstantService cs = IServerServiceManager.INSTANCE.getConstantService();
		List<IConstantEntity> items = ce.getConstantList();
		for (IConstantEntity item: items) {
			if (item.getIntValue() == -1) {
				continue;
			}
			TreeItem ceItem = new TreeItem();
			ceItem.setId(nodeId + "_"+item.getIntValue());
			ceItem.setText(item.getDisplayName());
			ceItem.setIcon(item.getIcon());
			
			IConstantEntity kid = cs.getChildren(item);
			if (kid != null){
				ceItem.setHasChildren(true);
			}
			result.add(ceItem);
		}
		
		return result;
	}
	
	public static void getCEItems(ArrayList<String> values, ArrayList<String> displayItems, 
			IConstantEntity ce) {
		// ce node.
		String nodeId = ce.getEntityName();
		
		List<IConstantEntity> items = ce.getConstantList();
		for (IConstantEntity item: items) {
			if (item.getIntValue() == -1) {
				continue;
			}
			values.add(nodeId + "," + item.getIntValue());
			displayItems.add(item.getDisplayName());
		}
	}
	
	public static void getCEComboBox(String space, 
			ArrayList<String> values, ArrayList<String> displayItems, 
			IConstantEntity ce) {
		getCEComboBox(new AtomicInteger(-1), space, values, displayItems, ce);
	}
	
	public static void getCEComboBox(AtomicInteger startItem, String space, 
			ArrayList<String> values, ArrayList<String> displayItems, 
			IConstantEntity ce) {
		if (startItem.get() == values.size()) {
			values.clear();
			displayItems.clear();
			startItem.set(-1);
		}
		if (values.size() > 100 && startItem.get() == -1) {
			// reach to the limit to prevent too much items on UI widget.
			values.add("more");
			displayItems.add("More...");
			return;
		}
		// ce node.
		String nodeId = ce.getEntityName();
		if (space.isEmpty()) { // root.
			values.add(nodeId);
			displayItems.add(ce.getI18nEntityName());
			space = "--";
		}
		
		IConstantService cs = IServerServiceManager.INSTANCE.getConstantService();
		List<IConstantEntity> items = ce.getConstantList();
		for (IConstantEntity item: items) {
			if (item.getIntValue() == -1) {
				continue;
			}
			String option = nodeId + "," + item.getIntValue();
			values.add(option);
			displayItems.add(space + item.getDisplayName());
			if (startItem.get() == values.size()) {
				values.clear();
				displayItems.clear();
				startItem.set(-1);
			}
			if (values.size() > 100 && startItem.get() == -1) {
				// reach to the limit to prevent too much items on UI widget.
				values.add("more");
				displayItems.add("More...");
				return;
			}
			
			IConstantEntity kid = cs.getChildren(item);
			if (kid != null){
				getCEComboBox(startItem, space + "--", values, displayItems, cs.getConstantEntity(kid.getEntityName()));
				if (values.size() > 0 && values.get(values.size()-1).equals("more")) {
					return;
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
			} else if (value.indexOf(";") != -1) {
				String[] items = value.split(";");
				for (String ce: items) {
					ceValues.add(CEUtil.toCEValue(ce));
				}
			} else {
				ceValues.add(CEUtil.toCEValue(value));
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
	
	public static ArrayList<String> syncRightDisplayItems(List<String> selectedValues, List<String> allValues, List<String> displayItems) {
		if (selectedValues == null || selectedValues.isEmpty()) {
			return new ArrayList();
		}
		ArrayList selectedDisplayItems = new ArrayList();
		for (int i = 0; i < allValues.size(); i++) {
			for (int j = 0; j < selectedValues.size(); j++) {
				if (allValues.get(i).equals(selectedValues.get(j))) {
					selectedDisplayItems.add(displayItems.get(i));
					break;
				}
			}
		}
		return selectedDisplayItems;
	}
	
	public static ArrayList[] syncLeftDisplayItems(List<String> selectedRightValues, List<String> allValues, List<String> displayItems) {
		if (selectedRightValues == null || selectedRightValues.isEmpty()) {
			return new ArrayList[]{(ArrayList)allValues, (ArrayList)displayItems};
		}
		ArrayList selectedLeftValues = new ArrayList();
		ArrayList selectedDisplayItems = new ArrayList();
		for (int i = 0; i < allValues.size(); i++) {
			boolean has = false;
			for (int j = 0; j < selectedRightValues.size(); j++) {
				if (allValues.get(i).equals(selectedRightValues.get(j))) {
					has = true;
					break;
				}
			}
			if (!has) {
				selectedLeftValues.add(allValues.get(i));
				selectedDisplayItems.add(displayItems.get(i));
			}
		}
		return new ArrayList[]{selectedLeftValues, selectedDisplayItems};
	}
}
