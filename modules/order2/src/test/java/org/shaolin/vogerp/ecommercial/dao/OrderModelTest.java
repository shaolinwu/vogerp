package org.shaolin.vogerp.ecommercial.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Test;
import org.shaolin.bmdp.designtime.page.MockHttpRequest;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.SpringBootTestRoot;
import org.shaolin.bmdp.runtime.ce.DynamicConstant;
import org.shaolin.bmdp.runtime.entity.EntityManager;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.bmdp.runtime.spi.IEntityManager;
import org.shaolin.bmdp.runtime.spi.IServerServiceManager;
import org.shaolin.uimaster.page.MobilitySupport;
import org.shaolin.uimaster.page.WebConfig;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
import org.shaolin.vogerp.ecommercial.be.DeliveryInfoImpl;
import org.shaolin.vogerp.ecommercial.be.GOOfferPriceImpl;
import org.shaolin.vogerp.ecommercial.be.GoldenOrderImpl;
import org.shaolin.vogerp.ecommercial.be.InterestEOrderImpl;
import org.shaolin.vogerp.ecommercial.be.MOOfferPriceImpl;
import org.shaolin.vogerp.ecommercial.be.MachiningOrderImpl;
import org.shaolin.vogerp.ecommercial.be.ROOfferPriceImpl;
import org.shaolin.vogerp.ecommercial.be.RentOrLoanOrderImpl;
import org.shaolin.vogerp.ecommercial.ce.EOrderType;
import org.shaolin.vogerp.ecommercial.ce.GoldenOrderType;
import org.shaolin.vogerp.ecommercial.ce.InvoiceType;
import org.shaolin.vogerp.ecommercial.ce.OrderStatusType;
import org.shaolin.vogerp.ecommercial.ce.RentDateType;
import org.shaolin.vogerp.ecommercial.ce.RentOrLoanOrderType;
import org.shaolin.vogerp.ecommercial.util.OrderUtil;

import junit.framework.Assert;

public class OrderModelTest extends SpringBootTestRoot {

    @Test
    public void testCreateOrders() {
	    	System.out.println(OrderUtil.genSerialNumber());
	    	System.out.println(OrderUtil.genSerialNumber());
	    	System.out.println(OrderUtil.genSerialNumber());
	    	System.out.println(OrderUtil.genSerialNumber());
	    	
	    	IServerServiceManager.INSTANCE.configureLifeCycleProviders();
	    	IEntityManager entityManager = IServerServiceManager.INSTANCE.getEntityManager();
		((EntityManager)entityManager).initRuntime();
		IServerServiceManager.INSTANCE.startLifeCycleProviders();
		
		MockHttpRequest request = new MockHttpRequest();
		UserContext currentUserContext = new UserContext();
		currentUserContext.setOrgCode("uimaster");
		currentUserContext.setOrgId(1);
		currentUserContext.setUserId(1);
		currentUserContext.setUserAccount("1");
		String userLocale = WebConfig.getUserLocale(request);
		List userRoles = new ArrayList();
		userRoles.add(new DynamicConstant("GenericOrganizationType.Director", 0));
		userRoles.add(new DynamicConstant("Admin", 0));
		String userAgent = request.getHeader("user-agent");
		boolean isMobile = MobilitySupport.isMobileRequest(userAgent);
		//add user-context thread bind
        UserContext.register(request.getSession(), currentUserContext, userLocale, userRoles, isMobile);
		
	    	createMachiningOrder();
	    	createGoldenOrder();
		createRentOrder();
		
		HibernateUtil.releaseSession(true);
    }
    
    public void createMachiningOrder() {
    		IUserService service = (IUserService)AppContext.get().getService(IUserService.class); 
    		// create an order.
    		MachiningOrderImpl morder = new MachiningOrderImpl();
        morder.setOrgId(UserContext.getUserContext().getOrgId());
        morder.setSerialNumber(OrderUtil.genSerialNumber());
        morder.setDescription("test order");
        morder.setStatus(OrderStatusType.CREATED);
        morder.setPublishedCustomerId(service.getUserId());
        morder.setPublishedCustomer((PersonalInfoImpl)service.getPersonalInfo(service.getUserId()));
        String resourceId = OrderUtil.genResourceId();
        morder.setHtmlDesc("/product/" + resourceId + "/desc.html");
        morder.setPhotos("/product/" + resourceId + "/images");
        morder.setModelFile("/morder/" + resourceId);
        morder.setCount(1);
        morder.setInvoiceType(InvoiceType.NONEED);
        morder.setCreateDate(new java.util.Date());
        morder.setCity(UserContext.getUserContext().getCity());
        morder.setLongitude(UserContext.getUserContext().getLongitude());
        morder.setLatitude(UserContext.getUserContext().getLatitude());
        morder.setDeliveryInfo(new DeliveryInfoImpl());
        OrderModel.INSTANCE.create(morder.getDeliveryInfo());
        morder.setDeliveryInfoId(morder.getDeliveryInfo().getId());
        morder.setStatus(OrderStatusType.PUBLISHED);
        OrderModel.INSTANCE.create(morder);
         
        // offer a price.
        MOOfferPriceImpl offerPrice = new MOOfferPriceImpl();
        offerPrice.setOrderId(morder.getId());
        offerPrice.setTakenCustomerId(UserContext.getUserContext().getUserId());
        offerPrice.setTakenCustInfo("test");
        offerPrice.setPrice(10.1);
        offerPrice.setCreateDate(new Date());
        offerPrice.setLeaveWords("test");
        offerPrice.setSessionId(OrderUtil.genConversationId());
        
        int state = OrderUtil.addAPrice(morder, offerPrice);
        Assert.assertEquals(state, 1);
        
        InterestEOrderImpl condition = new InterestEOrderImpl();
        condition.setOrgId(UserContext.getUserContext().getOrgId());
        condition.setOrderId(morder.getId());
        condition.setType(EOrderType.MACHININGORDER);
        long result = OrderModel.INSTANCE.searchInterestEOrderCount(condition);
        if (result == 0) {
           OrderModel.INSTANCE.create(condition);
        }
        
     // take the order!
        morder = OrderModel.INSTANCE.get(morder.getId(), MachiningOrderImpl.class);
        morder.setStatus(OrderStatusType.TAKEN);
        Assert.assertNotNull(morder.getOfferPrices());
        Assert.assertEquals(morder.getOfferPrices().size(), 1);
        OrderModel.INSTANCE.update(morder);
        morder.setSessionId("aaa23432432");
        OrderModel.INSTANCE.update(morder);
//        it's hard to invoke workflow engin in test case.
//        FlowEvent e = new FlowEvent("PublishMachiningOrder");
//		e.setAttribute("_AdhocNodeName", "publishMOrder");
//		e.setAttribute("morder", morder);
//		EventProcessor processor = (EventProcessor)AppContext.get().getService(WorkFlowEventProcessor.class);
//		processor.process(e);
    }

    public void createGoldenOrder() {
    		IUserService service = (IUserService)AppContext.get().getService(IUserService.class); 
    		GoldenOrderImpl order = new GoldenOrderImpl();
        order.setOrgId(UserContext.getUserContext().getOrgId());
        order.setSerialNumber(OrderUtil.genSerialNumber());
        order.setDescription("test order");
        order.setStatus(OrderStatusType.CREATED);
        order.setType(GoldenOrderType.PURCHASE);
        order.setPublishedCustomerId(service.getUserId());
        order.setPublishedCustomer((PersonalInfoImpl)service.getPersonalInfo(service.getUserId()));
        order.setCreateDate(new java.util.Date());
        order.setCount(1);
        order.setCity(UserContext.getUserContext().getCity());
        order.setLongitude(UserContext.getUserContext().getLongitude());
        order.setLatitude(UserContext.getUserContext().getLatitude());
        order.setInvoiceType(InvoiceType.NONEED);
        
        String resourceId = OrderUtil.genResourceId();
        order.setHtmlDesc("/product/" + resourceId + "/desc.html");
        order.setPhotos("/product/" + resourceId + "/images");
        order.setCount(1);
        
        order.setDeliveryInfo(new DeliveryInfoImpl());
        OrderModel.INSTANCE.create(order.getDeliveryInfo());
        order.setDeliveryInfoId(order.getDeliveryInfo().getId());
        order.setStatus(OrderStatusType.PUBLISHED);
        OrderModel.INSTANCE.create(order);
        
     // offer a price.
        GOOfferPriceImpl offerPrice = new GOOfferPriceImpl();
        offerPrice.setOrderId(order.getId());
        offerPrice.setTakenCustomerId(UserContext.getUserContext().getUserId());
        offerPrice.setTakenCustInfo("test");
        offerPrice.setPrice(10.1);
        offerPrice.setCreateDate(new Date());
        offerPrice.setLeaveWords("test");
        offerPrice.setSessionId(OrderUtil.genConversationId());
        
        int state = OrderUtil.addAPrice(order, offerPrice);
        Assert.assertEquals(state, 1);
        
        // take the order!
        order = OrderModel.INSTANCE.get(order.getId(), GoldenOrderImpl.class);
        order.setStatus(OrderStatusType.TAKEN);
        Assert.assertNotNull(order.getOfferPrices());
        Assert.assertEquals(order.getOfferPrices().size(), 1);
        OrderModel.INSTANCE.update(order);
        order.setSessionId("aaa23432432");
        OrderModel.INSTANCE.update(order);
    }
    
    public void createRentOrder() {
    		IUserService service = (IUserService)AppContext.get().getService(IUserService.class); 
    		RentOrLoanOrderImpl order = new RentOrLoanOrderImpl();
        order.setOrgId(UserContext.getUserContext().getOrgId());
        order.setSerialNumber(OrderUtil.genSerialNumber());
        order.setDescription("test order");
        order.setStatus(OrderStatusType.CREATED);
        order.setType(RentOrLoanOrderType.LOAN);
        order.setDateType(RentDateType.MONTHLY);
        order.setDateCount(1);
        order.setPublishedCustomerId(service.getUserId());
        order.setPublishedCustomer((PersonalInfoImpl)service.getPersonalInfo(service.getUserId()));
        String resourceId = OrderUtil.genResourceId();
        order.setHtmlDesc("/product/" + resourceId + "/desc.html");
        order.setPhotos("/product/" + resourceId + "/images");
        order.setCreateDate(new java.util.Date());
        order.setCity(UserContext.getUserContext().getCity());
        order.setLongitude(UserContext.getUserContext().getLongitude());
        order.setLatitude(UserContext.getUserContext().getLatitude());
        
        order.setDeliveryInfo(new DeliveryInfoImpl());
        OrderModel.INSTANCE.create(order.getDeliveryInfo());
        order.setDeliveryInfoId(order.getDeliveryInfo().getId());
        order.setStatus(OrderStatusType.PUBLISHED);
        OrderModel.INSTANCE.create(order);
        
     // offer a price.
        ROOfferPriceImpl offerPrice = new ROOfferPriceImpl();
        offerPrice.setOrderId(order.getId());
        offerPrice.setTakenCustomerId(UserContext.getUserContext().getUserId());
        offerPrice.setTakenCustInfo("test");
        offerPrice.setPrice(10.1);
        offerPrice.setCreateDate(new Date());
        offerPrice.setLeaveWords("test");
        offerPrice.setSessionId(OrderUtil.genConversationId());
        
        int state = OrderUtil.addAPrice(order, offerPrice);
        Assert.assertEquals(state, 1);
        
        // take the order!
        order = OrderModel.INSTANCE.get(order.getId(), RentOrLoanOrderImpl.class);
        order.setStatus(OrderStatusType.TAKEN);
        Assert.assertNotNull(order.getOfferPrices());
        Assert.assertEquals(order.getOfferPrices().size(), 1);
        
        OrderModel.INSTANCE.update(order);
        order.setSessionId("aaa23432432");
        OrderModel.INSTANCE.update(order);
    }
    
    public void acceptOrders() {
    	
    }
}

