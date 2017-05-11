package org.shaolin.vogerp.commonmodel.internal;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.ce.ConstantServiceImpl;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.entity.EntityNotFoundException;
import org.shaolin.bmdp.runtime.spi.IConstantService;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.bmdp.utils.StringUtil;
import org.shaolin.javacc.exception.ParsingException;
import org.shaolin.uimaster.page.cache.PageCacheManager;
import org.shaolin.uimaster.page.cache.UIFormObject;
import org.shaolin.uimaster.page.cache.UIPageObject;
import org.shaolin.uimaster.page.exception.UIPageException;
import org.shaolin.uimaster.page.widgets.HTMLDynamicUIItem;
import org.shaolin.vogerp.commonmodel.IDynamicUIService;
import org.shaolin.vogerp.commonmodel.be.CEExtensionImpl;
import org.shaolin.vogerp.commonmodel.be.CEHierarchyImpl;
import org.shaolin.vogerp.commonmodel.be.ICEExtension;
import org.shaolin.vogerp.commonmodel.be.IUIDyanimcItem;
import org.shaolin.vogerp.commonmodel.be.IUIDyanimcPageHints;
import org.shaolin.vogerp.commonmodel.be.IUIDyanimcPageLink;
import org.shaolin.vogerp.commonmodel.be.UIDyanimcItemImpl;
import org.shaolin.vogerp.commonmodel.be.UIDyanimcPageHintsImpl;
import org.shaolin.vogerp.commonmodel.be.UIDyanimcPageLinkImpl;
import org.shaolin.vogerp.commonmodel.dao.CommonModel;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;
import org.shaolin.vogerp.commonmodel.util.CEOperationUtil;

/**
 * All dynamic UI relevant operations
 * 
 * @author wushaol
 *
 */
public class DynamicUIServiceImpl implements IDynamicUIService, IServiceProvider {

	public DynamicUIServiceImpl() {
		init();
	}
	
	private void init() {
		// load dynamic ui widgets.
		UIDyanimcItemImpl condition = new UIDyanimcItemImpl();
		condition.setEnabled(true);
        List<IUIDyanimcItem> all = ModularityModel.INSTANCE.searchDynamicItemEntities(condition, null, 0, -1);
        for (IUIDyanimcItem module: all) {
        	HTMLDynamicUIItem object = convert(module);
    		try {
    			UIFormObject uiCache = PageCacheManager.getUIFormObject(module.getUiEntityName());
    			uiCache.addDynamicItem(object);
    		} catch (EntityNotFoundException e) {
    			try {
    				UIPageObject uiCache = PageCacheManager.getUIPageObject(module.getUiEntityName());
    				uiCache.getUIForm().addDynamicItem(object);
    			} catch (Exception e1) {
    				Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic UI items: " + e.getMessage(), e);
    			} 
    		} catch (ParsingException e) {
    			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic UI items: " + e.getMessage(), e);
    		} catch (ClassNotFoundException e) {
    			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic UI items: " + e.getMessage(), e);
    		} catch (UIPageException e) {
    			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic UI items: " + e.getMessage(), e);
			}
        }
        
        // load dynamic ui links.
        UIDyanimcPageLinkImpl pageLink = new UIDyanimcPageLinkImpl();
        pageLink.setEnabled(true);
        List<IUIDyanimcPageLink> pageLinks = ModularityModel.INSTANCE.searchDynamicPageLink(pageLink, null, 0, -1);
        for (IUIDyanimcPageLink module: pageLinks) {
        	String targetInfo = module.getTarUIName() + ";" + module.getTarUITab();
        	try {
	        	UIFormObject uiCache = PageCacheManager.getUIFormObject(module.getSrcUIName());
	        	uiCache.addDynamicLink(module.getSrcUIPanel(), module.getSrcUIWidget(), module.getLinkComment(), targetInfo);
        	} catch (EntityNotFoundException e) {
        		try {
    				UIPageObject uiCache = PageCacheManager.getUIPageObject(module.getSrcUIName());
		        	uiCache.getUIForm().addDynamicLink(module.getSrcUIPanel(), module.getSrcUIWidget(), module.getLinkComment(), targetInfo);
    			} catch (Exception e1) {
    				Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page links: " + e.getMessage(), e);
    			} 
    		} catch (UIPageException e) {
    			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page links: " + e.getMessage(), e);
			} 
        }
        
        // load dynamic ui hints.
        UIDyanimcPageHintsImpl pageHint = new UIDyanimcPageHintsImpl();
        pageHint.setEnabled(true);
        List<IUIDyanimcPageHints> pageHints = ModularityModel.INSTANCE.searchDynamicPageHints(pageHint, null, 0, -1);
        for (IUIDyanimcPageHints module: pageHints) {
        	try {
	        	UIFormObject uiCache = PageCacheManager.getUIFormObject(module.getUiEntity());
	        	if (!StringUtil.nullOrBlank(module.getUiPanel()) && !StringUtil.nullOrBlank(module.getUiWidget())) {
	        		uiCache.addDynamicHints(module.getUiPanel(), module.getUiWidget(), 
	        				module.getDescription(), module.getLink());
	        	} else {
	        		uiCache.addDynamicPageHints(module.getLink());
	        	}
        	} catch (EntityNotFoundException e) {
        		try {
    				UIPageObject uiCache = PageCacheManager.getUIPageObject(module.getUiEntity());
    				if (!StringUtil.nullOrBlank(module.getUiPanel()) && !StringUtil.nullOrBlank(module.getUiWidget())) {
			        	uiCache.getUIForm().addDynamicHints(module.getUiPanel(), module.getUiWidget(), 
			        			module.getDescription(), module.getLink());
    				} else {
    					uiCache.getUIForm().addDynamicPageHints(module.getLink());
    				}
    			} catch (Exception e1) {
    				Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page hints: " + e.getMessage(), e);
    			} 
    		} catch (UIPageException e) {
    			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page hints: " + e.getMessage(), e);
			} 
        }
        
	}

	private HTMLDynamicUIItem convert(IUIDyanimcItem module) {
		HTMLDynamicUIItem object = new HTMLDynamicUIItem();
		object.setFilter(module.getFilter());
		object.setUiEntityName(module.getUiEntityName());
		object.setUipanel(module.getUipanel());
		object.setCeName(module.getCeName());
		object.setCeSelectMode(module.getCeSelectMode().getIntValue());
		object.setLabelName(module.getLabelName());
		return object;
	}
	
	@Override
	public void reloadAllItems() {
		UIDyanimcItemImpl condition = new UIDyanimcItemImpl();
		condition.setEnabled(true);
        List<IUIDyanimcItem> all = ModularityModel.INSTANCE.searchDynamicItemEntities(condition, null, 0, -1);
        reloadItem0(all);
	}
	
	@Override
	public void reloadAllHints() {
		// load dynamic ui hints.
        UIDyanimcPageHintsImpl pageHint = new UIDyanimcPageHintsImpl();
        pageHint.setEnabled(true);
        List<IUIDyanimcPageHints> pageHints = ModularityModel.INSTANCE.searchDynamicPageHints(pageHint, null, 0, -1);
        for (IUIDyanimcPageHints module: pageHints) {
        	try {
	        	UIFormObject uiCache = PageCacheManager.getUIFormObject(module.getUiEntity());
	        	uiCache.addDynamicHints(module.getUiPanel(), module.getUiWidget(), module.getDescription(), module.getLink());
        	} catch (EntityNotFoundException e) {
        		try {
    				UIPageObject uiCache = PageCacheManager.getUIPageObject(module.getUiEntity());
		        	uiCache.getUIForm().addDynamicHints(module.getUiPanel(), module.getUiWidget(), module.getDescription(), module.getLink());
    			} catch (Exception e1) {
    				Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page hints: " + e.getMessage(), e);
    			} 
    		} catch (UIPageException e) {
    			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page hints: " + e.getMessage(), e);
			} 
        }
	}
	
	@Override
	public void updateDynamicLink(UIDyanimcPageLinkImpl link) {
		String targetInfo = link.getTarUIName() + ";" + link.getTarUITab();
    	try {
        	UIFormObject uiCache = PageCacheManager.getUIFormObject(link.getSrcUIName());
        	uiCache.addDynamicLink(link.getSrcUIPanel(), link.getSrcUIWidget(), link.getLinkComment(), targetInfo);
    	} catch (EntityNotFoundException e) {
    		try {
				UIPageObject uiCache = PageCacheManager.getUIPageObject(link.getSrcUIName());
	        	uiCache.getUIForm().addDynamicLink(link.getSrcUIPanel(), link.getSrcUIWidget(), link.getLinkComment(), targetInfo);
			} catch (Exception e1) {
				Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page links: " + e.getMessage(), e);
			} 
		} catch (UIPageException e) {
			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page links: " + e.getMessage(), e);
		} 
	}
	
	@Override
	public void updateDynamicHints(UIDyanimcPageHintsImpl hints) {
		try {
        	UIFormObject uiCache = PageCacheManager.getUIFormObject(hints.getUiEntity());
        	uiCache.addDynamicHints(hints.getUiPanel(), hints.getUiWidget(), hints.getDescription(), hints.getLink());
    	} catch (EntityNotFoundException e) {
    		try {
				UIPageObject uiCache = PageCacheManager.getUIPageObject(hints.getUiEntity());
	        	uiCache.getUIForm().addDynamicHints(hints.getUiPanel(), hints.getUiWidget(), hints.getDescription(), hints.getLink());
			} catch (Exception e1) {
				Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page hints: " + e.getMessage(), e);
			} 
		} catch (UIPageException e) {
			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page hints: " + e.getMessage(), e);
		} 
	}
	
	
	@Override
	public void reloadItems(String uiformName) {
		UIDyanimcItemImpl condition = new UIDyanimcItemImpl();
		condition.setUiEntityName(uiformName);
		condition.setEnabled(true);
        List<IUIDyanimcItem> all = ModularityModel.INSTANCE.searchDynamicItemEntities(condition, null, 0, -1);
        reloadItem0(all);
	}

	private void reloadItem0(List<IUIDyanimcItem> all) {
		for (IUIDyanimcItem module: all) {
        	HTMLDynamicUIItem object = convert(module);
        	try {
        		UIFormObject uiCache = PageCacheManager.getUIFormObject(module.getUiEntityName());
        		uiCache.clearDynamicItems();
    			uiCache.addDynamicItem(object);
    		} catch (EntityNotFoundException e) {
    			try {
    				UIPageObject uiCache = PageCacheManager.getUIPageObject(module.getUiEntityName());
    				uiCache.getUIForm().clearDynamicItems();
    				uiCache.getUIForm().addDynamicItem(object);
    			} catch (Exception e1) {
    				Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic UI items: " + e.getMessage(), e);
    			} 
    		} catch (ParsingException e) {
    			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic UI items: " + e.getMessage(), e);
    		} catch (ClassNotFoundException e) {
    			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic UI items: " + e.getMessage(), e);
    		} catch (UIPageException e) {
    			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic UI items: " + e.getMessage(), e);
			}
        }
	}
	
	public void reloadPageLinks() {
		// load dynamic ui links.
        UIDyanimcPageLinkImpl pageLink = new UIDyanimcPageLinkImpl();
        pageLink.setEnabled(true);
        List<IUIDyanimcPageLink> pageLinks = ModularityModel.INSTANCE.searchDynamicPageLink(pageLink, null, 0, -1);
        for (IUIDyanimcPageLink module: pageLinks) {
        	String linkInfo = module.getTarUIName() + ";" + module.getTarUITab();
        	try {
	        	UIFormObject uiCache = PageCacheManager.getUIFormObject(module.getSrcUIName());
	        	uiCache.addDynamicLink(module.getSrcUIPanel(), module.getSrcUIWidget(), module.getLinkComment(), linkInfo);
        	} catch (EntityNotFoundException e) {
        		try {
    				UIPageObject uiCache = PageCacheManager.getUIPageObject(module.getSrcUIName());
		        	uiCache.getUIForm().addDynamicLink(module.getSrcUIPanel(), module.getSrcUIWidget(), module.getLinkComment(), linkInfo);
    			} catch (Exception e1) {
    				Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page links: " + e.getMessage(), e);
    			} 
    		} catch (UIPageException e) {
    			Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page links: " + e.getMessage(), e);
			} 
        }
	}
	
	public List[] getAllEntities() {
		UIDyanimcItemImpl condition = new UIDyanimcItemImpl();
		condition.setEnabled(true);
        List all = ModularityModel.INSTANCE.searchDynamicEntities(condition, null, 0, -1);
        
		List<String> values = new ArrayList<String>();
		List<String> displayValues = new ArrayList<String>();
		for (int i = 0; i < all.size(); i++) {
			values.add(i + "");
			displayValues.add(all.get(i).toString());
		}
		return new List[] { values, displayValues };
	}
	
	public void createCE(String name, String parentCE) {
		IConstantEntity parent = CEUtil.toCEValue(parentCE);
		IConstantEntity ce = AppContext.get().getConstantService().getChildren(parent);
        if (ce != null) {
        	CEExtensionImpl item = new CEExtensionImpl();
        	item.setCeName(ce.getEntityName());
        	item.setIntValue(ce.getConstantList().size());
        	item.setStringValue(name);
        	item.setDescription(name);
        	item.setEnabled(true);
        	CommonModel.INSTANCE.create(item);
        	IConstantService cs = IServerServiceManager.INSTANCE.getConstantService();
        	((ConstantServiceImpl)cs).addConstantItem(CEOperationUtil.convertSingD2C(item));
        } else {
        	CEExtensionImpl item = new CEExtensionImpl();
        	item.setCeName(parent.getEntityName() + "_Sub" + System.currentTimeMillis());
        	item.setIntValue(0);
        	item.setStringValue(name);
        	item.setDescription(name);
        	item.setEnabled(true);
        	CEHierarchyImpl hierarchy = new CEHierarchyImpl();
        	hierarchy.setCeName(item.getCeName());
        	hierarchy.setParentCeItem(parent.getIntValue());
        	hierarchy.setParentCeName(parent.getEntityName());
        	hierarchy.setEnabled(true);
        	CommonModel.INSTANCE.create(item);
        	CommonModel.INSTANCE.create(hierarchy);
        	IConstantService cs = IServerServiceManager.INSTANCE.getConstantService();
        	IConstantEntity ceObject = CEOperationUtil.convertSingD2C(item);
			((ConstantServiceImpl)cs).reloadData(ceObject);
        	((ConstantServiceImpl)cs).addConstantItem(ceObject);
        	((ConstantServiceImpl)cs).addHierarchy(hierarchy);
        }
        HibernateUtil.releaseSession(HibernateUtil.getSession(), true);
	}
	
	public void deleteCENode(String ceName, int intValue) {
		CEExtensionImpl sc = new CEExtensionImpl();
		sc.setCeName(ceName);
		sc.setIntValue(intValue);
		List<ICEExtension> items = ModularityModel.INSTANCE.searchCEExtension(sc, null, 0, -1);
		if (items != null && items.size() > 0) {
			ModularityModel.INSTANCE.delete(items.get(0));
		}
		HibernateUtil.releaseSession(HibernateUtil.getSession(), true);
		IServerServiceManager.INSTANCE.getConstantService().removeConstantItem(ceName, intValue);
	}
	
	@Override
	public Class<?> getServiceInterface() {
		return IDynamicUIService.class;
	}

}
