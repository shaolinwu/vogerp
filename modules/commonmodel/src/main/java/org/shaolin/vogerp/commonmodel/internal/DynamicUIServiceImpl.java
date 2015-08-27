package org.shaolin.vogerp.commonmodel.internal;

import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.entity.EntityNotFoundException;
import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.javacc.exception.ParsingException;
import org.shaolin.uimaster.page.cache.PageCacheManager;
import org.shaolin.uimaster.page.cache.UIFormObject;
import org.shaolin.uimaster.page.cache.UIPageObject;
import org.shaolin.uimaster.page.widgets.HTMLDynamicUIItem;
import org.shaolin.vogerp.commonmodel.IDynamicUIService;
import org.shaolin.vogerp.commonmodel.be.IUIDyanimcItem;
import org.shaolin.vogerp.commonmodel.be.IUIDyanimcPageLink;
import org.shaolin.vogerp.commonmodel.be.UIDyanimcItemImpl;
import org.shaolin.vogerp.commonmodel.be.UIDyanimcPageLinkImpl;
import org.shaolin.vogerp.commonmodel.dao.ModularityModel;

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
		Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        try {
			UIDyanimcItemImpl condition = new UIDyanimcItemImpl();
			condition.setEnabled(true);
	        List<IUIDyanimcItem> all = ModularityModel.INSTANCE.searchDynamicItemEntities(condition, session, null, 0, -1);
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
	    		}
	        }
	        
	        // load dynamic ui links.
	        UIDyanimcPageLinkImpl pageLink = new UIDyanimcPageLinkImpl();
	        pageLink.setEnabled(true);
	        List<IUIDyanimcPageLink> pageLinks = ModularityModel.INSTANCE.searchDynamicPageLink(pageLink, session, null, 0, -1);
	        for (IUIDyanimcPageLink module: pageLinks) {
	        	String linkInfo = module.getTarUIName() + ";" + module.getLinkComment();
	        	try {
		        	UIFormObject uiCache = PageCacheManager.getUIFormObject(module.getSrcUIName());
		        	uiCache.addDynamicLink(module.getSrcUIPanel(), module.getSrcUIWidget(), linkInfo);
	        	} catch (EntityNotFoundException e) {
	        		try {
	    				UIPageObject uiCache = PageCacheManager.getUIPageObject(module.getSrcUIName());
			        	uiCache.getUIForm().addDynamicLink(module.getSrcUIPanel(), module.getSrcUIWidget(), linkInfo);
	    			} catch (Exception e1) {
	    				Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page links: " + e.getMessage(), e);
	    			} 
	    		} 
	        }
        } finally {
            session.getTransaction().commit();
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
	public void reloadItems(String uiformName) {
		UIDyanimcItemImpl condition = new UIDyanimcItemImpl();
		condition.setUiEntityName(uiformName);
		condition.setEnabled(true);
        List<IUIDyanimcItem> all = ModularityModel.INSTANCE.searchDynamicItemEntities(condition, null, 0, -1);
        for (IUIDyanimcItem module: all) {
        	HTMLDynamicUIItem object = convert(module);
        	try {
        		UIFormObject uiCache = PageCacheManager.getUIFormObject(uiformName);
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
    		}
        }		
	}
	
	public void reloadPageLinks() {
		// load dynamic ui links.
        UIDyanimcPageLinkImpl pageLink = new UIDyanimcPageLinkImpl();
        pageLink.setEnabled(true);
        List<IUIDyanimcPageLink> pageLinks = ModularityModel.INSTANCE.searchDynamicPageLink(pageLink, null, 0, -1);
        for (IUIDyanimcPageLink module: pageLinks) {
        	String linkInfo = module.getTarUIName() + ";" + module.getLinkComment();
        	try {
	        	UIFormObject uiCache = PageCacheManager.getUIFormObject(module.getSrcUIName());
	        	uiCache.addDynamicLink(module.getSrcUIPanel(), module.getSrcUIWidget(), linkInfo);
        	} catch (EntityNotFoundException e) {
        		try {
    				UIPageObject uiCache = PageCacheManager.getUIPageObject(module.getSrcUIName());
		        	uiCache.getUIForm().addDynamicLink(module.getSrcUIPanel(), module.getSrcUIWidget(), linkInfo);
    			} catch (Exception e1) {
    				Logger.getLogger(DynamicUIServiceImpl.class).error("Error to load the dynamic page links: " + e.getMessage(), e);
    			} 
    		} 
        }
	}
	
	@Override
	public Class<?> getServiceInterface() {
		return IDynamicUIService.class;
	}

}
