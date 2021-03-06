package org.shaolin.vogerp.commonmodel.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.shaolin.bmdp.persistence.BEEntityDaoObject;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.security.UserContext;
import org.shaolin.vogerp.commonmodel.IUserService;
import org.shaolin.vogerp.commonmodel.be.IAddressInfo;
import org.shaolin.vogerp.commonmodel.be.IContactInfo;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;

public class CustCommonModel extends BEEntityDaoObject {
	
	public static final CustCommonModel INSTANCE = new CustCommonModel();

    private CustCommonModel() {
    }
    
    public List<ArrayList<String>>[] getIndividualParties(String type) {
    	String sql = "SELECT c.id,c.firstname,c.lastname FROM comm_personinfo c where c.type=? and c.orgid=?;";
    	Session session = HibernateUtil.getSession();
    	SQLQuery sqlQuery = session.createSQLQuery(sql);
    	sqlQuery.setString(0, type);
    	sqlQuery.setLong(1, UserContext.getUserContext().getOrgId());
    	List<Object[]> list = sqlQuery.list();
    	
    	ArrayList<String> valueResult = new ArrayList<String>();
    	ArrayList<String> displayResult = new ArrayList<String>();
    	if (list.size() == 0) {
    		return new List[] {valueResult, displayResult};
    	}
    	for (Object[] row : list) {
    		valueResult.add(row[0].toString());
    		displayResult.add(row[1].toString() + " " + row[2].toString());
    	}
    	return new List[] {valueResult, displayResult};
    }
    
    public List<ArrayList<String>>[] getCustemrsDeliveryInfo(int userId) {
    	String sql = "SELECT p.warehouseid, count(p.warehouseid), b.name FROM prod_storageitem p, prod_warehouse b where p.warehouseid=b.id and b.orgid=? group by p.warehouseid;";
    	Session session = HibernateUtil.getSession();	
    	SQLQuery sqlQuery = session.createSQLQuery(sql);
    	sqlQuery.setLong(0, UserContext.getUserContext().getOrgId());
    	List<Object[]> list = sqlQuery.list();
    	
    	ArrayList<String> valueResult = new ArrayList<String>();
    	valueResult.add("-1");
    	ArrayList<String> displayResult = new ArrayList<String>();
    	displayResult.add(IConstantEntity.CONSTANT_DEFAULT_VALUE);
    	if (list.size() == 0) {
    		return new List[] {valueResult, displayResult};
    	}
    	for (Object[] row : list) {
    		valueResult.add(String.valueOf(row[0]));
    		displayResult.add(CEUtil.getValue(String.valueOf(row[2])) + "("+  row[1] + ")");
    	}
    	return new List[] {valueResult, displayResult};
    }
    
    public void updateAddresse(long userId, IAddressInfo item) {
    	IUserService userService = AppContext.get().getService(IUserService.class);
    	IPersonalInfo customer = userService.getPersonalInfo(userId);
		Set<IAddressInfo> existing = customer.getAddresses();
		if (item.getId() == 0) {
			if (item.getDistrict() != null && ("-1".equals(item.getDistrict()) || !"null".equals(item.getDistrict()))) {
				item.setDistrict(null);
			}
			customer.getAddresses().add(item);
			CommonModel.INSTANCE.update(customer, true); // we have manually committed the transaction here since it's 1 to n mapping. otherwise, will be wrong!
		} else {
			for (IAddressInfo b: existing) {
				if (b.getId() == item.getId()) {
					b.setCountry(item.getCountry());
					b.setProvince(item.getProvince());
					b.setCity(item.getCity());
					if (item.getDistrict() != null && item.getDistrict().trim().length() >= 0
			    			&& !"-1".equals(item.getDistrict()) && !"null".equals(item.getDistrict())) {
						b.setDistrict(item.getDistrict());
					}
					b.setXian(item.getXian());
					b.setStreet(item.getStreet());
					b.setBlock(item.getBlock());
					b.setDescription(item.getDescription());
					b.setZipcode(item.getZipcode());
					
					b.setName(item.getName());
					b.setMobile(item.getMobile());
					b.setTelephone(item.getTelephone());
					b.setEmail(item.getEmail());
					CommonModel.INSTANCE.update(b, true);
					break;
				}
			}
		}
    }
    
    public void updateAddresses(long userId, List<IAddressInfo> list) {
    	IUserService userService = AppContext.get().getService(IUserService.class);
    	IPersonalInfo customer = userService.getPersonalInfo(userId);
    	Set<IAddressInfo> existing = customer.getAddresses();
		if (list.isEmpty() && !customer.getAddresses().isEmpty()) {
			// disable all addresses
			for (IAddressInfo a: existing) {
				a.setEnabled(false);
			}
		} else {
			for (IAddressInfo a: list) {
				if (a.getId() > 0) {
					for (IAddressInfo b: existing) {
						if (b.getId() == a.getId()) {
							b.setCountry(a.getCountry());
							b.setProvince(a.getProvince());
							b.setCity(a.getCity());
							b.setStreet(a.getStreet());
							b.setXian(a.getXian());
							b.setBlock(a.getBlock());
							b.setDescription(a.getDescription());
							b.setZipcode(a.getZipcode());
							
							b.setName(a.getName());
							b.setMobile(a.getMobile());
							b.setTelephone(a.getTelephone());
							b.setEmail(a.getEmail());
							break;
						}
					}
				} else {
					customer.getAddresses().add(a);
				}
			}
		}
		CommonModel.INSTANCE.update(customer);
    }
    
    public void updateContract(long userId, IContactInfo item) {
    	//TODO
    }
    
    public void updateContracts(long userId, List<IContactInfo> list) {
    	//TODO
    }
    
    public List<ArrayList<String>>[] getOrgEmployeeGroup() {
    	String sql = "SELECT count(p.id), b.name, b.id FROM comm_personinfo p, comm_organization b where p.orgid=b.id and p.orgid=? group by b.id;";
    	Session session = HibernateUtil.getSession();
    	SQLQuery sqlQuery = session.createSQLQuery(sql);
    	sqlQuery.setLong(0, UserContext.getUserContext().getOrgId());
    	List<Object[]> list = sqlQuery.list();
    	
    	ArrayList<String> valueResult = new ArrayList<String>();
    	valueResult.add("-1");
    	ArrayList<String> displayResult = new ArrayList<String>();
    	displayResult.add(IConstantEntity.CONSTANT_DEFAULT_VALUE);
    	if (list.size() == 0) {
    		return new List[] {valueResult, displayResult};
    	}
    	for (Object[] row : list) {
    		valueResult.add(row[2].toString());
    		displayResult.add(row[1] + "-" + row[2] + "(" + row[0] + ")");
    	}
    	return new List[] {valueResult, displayResult};
    }
}
