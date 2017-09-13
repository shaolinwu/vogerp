package org.shaolin.vogerp.commonmodel.dao;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.junit.Test;
import org.shaolin.bmdp.designtime.page.MockHttpRequest;
import org.shaolin.bmdp.persistence.BEEntityDaoObject;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.SpringBootTestRoot;
import org.shaolin.bmdp.runtime.be.IPersistentEntity;
import org.shaolin.uimaster.page.WebConfig;
import org.shaolin.uimaster.page.WebConfigSpringInstance;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.AddressInfoImpl;
import org.shaolin.vogerp.commonmodel.be.IPersonalAccount;
import org.shaolin.vogerp.commonmodel.be.IRegisterInfo;
import org.shaolin.vogerp.commonmodel.be.OrganizationImpl;
import org.shaolin.vogerp.commonmodel.be.PersonalAccountImpl;
import org.shaolin.vogerp.commonmodel.be.PersonalInfoImpl;
import org.shaolin.vogerp.commonmodel.be.RegisterInfoImpl;
import org.shaolin.vogerp.commonmodel.ce.OrgType;
import org.shaolin.vogerp.commonmodel.internal.LifeServiceProviderImpl;
import org.shaolin.vogerp.commonmodel.internal.UserServiceImpl;

import junit.framework.Assert;

public class UserServiceImplTest extends SpringBootTestRoot {
	
	private LifeServiceProviderImpl service = new LifeServiceProviderImpl();
	
	public UserServiceImplTest() {
		
	}
	
	@Test
	public void testRegister() {
		WebConfig.setSpringInstance(new WebConfigSpringInstance());
		
		UserServiceImpl userService = new UserServiceImpl();
		PersonalAccountImpl account = new PersonalAccountImpl();
		account.setUserName("testaccount123");
		try {
			List<IPersonalAccount> result = CommonModel.INSTANCE.searchUserAccount(account, null, 0, 1);
			if (result.size() > 0) {
				IPersonalAccount accountInfo = result.get(0);
				PersonalInfoImpl userInfo = result.get(0).getInfo();
				BEEntityDaoObject.DAOOBJECT.delete(accountInfo);
				BEEntityDaoObject.DAOOBJECT.delete(userInfo);
				BEEntityDaoObject.DAOOBJECT.delete(BEEntityDaoObject.DAOOBJECT.get(userInfo.getOrgId(), OrganizationImpl.class));
				HibernateUtil.releaseSession(true);
			}
		} catch (Exception e) {
		}
		
		HttpServletRequest request = new MockHttpRequest();
		IRegisterInfo registerInfo = new RegisterInfoImpl();
        registerInfo.setPhoneNumber("testaccount123");
        registerInfo.setPassword("123456");
        registerInfo.setUserType(OrgType.COMPANY);
        registerInfo.setOrgType("org.shaolin.vogerp.productmodel.ce.ProductType,2");
        registerInfo.setOrgName("TestORG");
        registerInfo.setName("TestORG");
        AddressInfoImpl address = new AddressInfoImpl();
        address.setCity("Shanghai");
        address.setDescription("company address");
        address.setMobile("1234678543");
        registerInfo.setAddress(address);
		boolean result = userService.register(registerInfo, request);
		Assert.assertTrue(result);
	}
	
	@Test
	public void testLogin() throws Exception {
		WebConfig.setSpringInstance(new WebConfigSpringInstance());
		service.loadConstants();
		
		UserServiceImpl userService = new UserServiceImpl();
		HttpServletRequest request = new MockHttpRequest();
		PersonalAccountImpl loginAccount = new PersonalAccountImpl();
        loginAccount.setUserName("testaccount123");
        loginAccount.setPassword("123456");
        
		String result = userService.login(loginAccount, request);
		Assert.assertEquals(result, "");
		
        loginAccount.setPassword("1234561");
		String result1 = userService.login(loginAccount, request);
		Assert.assertEquals(result1, IUserService.USER_LOGIN_PASSWORDRULES_PASSWORDINCORRECT);
	}
	
	@Test
	public void testUnregister() {
		
	}
}
