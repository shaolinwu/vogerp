package org.shaolin.vogerp.productmodel.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.shaolin.bmdp.persistence.BEEntityDaoObject;
import org.shaolin.bmdp.persistence.HibernateUtil;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;

public class CustProductModel extends BEEntityDaoObject {
	
	public static final CustProductModel INSTANCE = new CustProductModel();

    private CustProductModel() {
    }
    
    public List<ArrayList<String>>[] getProductTypeGroup() {
    	String sql = "SELECT p.type, count(p.type) FROM prod_product p group by p.type;";
    	Session session = HibernateUtil.getSession();
    	SQLQuery sqlQuery = session.createSQLQuery(sql);
    	List<Object[]> list = sqlQuery.list();
    	
    	ArrayList<String> valueResult = new ArrayList<String>();
    	valueResult.add("-1");
    	ArrayList<String> displayResult = new ArrayList<String>();
    	displayResult.add(IConstantEntity.CONSTANT_DEFAULT_VALUE);
    	if (list.size() == 0) {
    		return new List[] {valueResult, displayResult};
    	}
    	for (Object[] row : list) {
    		valueResult.add(row[0].toString());
    		displayResult.add(CEUtil.getValue(row[0].toString()) + "("+  row[1] + ")");
    	}
    	return new List[] {valueResult, displayResult};
    }
    
    public List<ArrayList<String>>[] getProductRootTypeGroup() {
    	String sql = "SELECT p.type, count(p.type) FROM prod_product p where p.parentid=0 group by p.type;";
    	Session session = HibernateUtil.getSession();
    	SQLQuery sqlQuery = session.createSQLQuery(sql);
    	List<Object[]> list = sqlQuery.list();
    	
    	ArrayList<String> valueResult = new ArrayList<String>();
    	ArrayList<String> displayResult = new ArrayList<String>();
    	if (list.size() == 0) {
    		return new List[] {valueResult, displayResult};
    	}
    	for (Object[] row : list) {
    		valueResult.add(row[0].toString());
    		displayResult.add(CEUtil.getValue(row[0].toString()) + "("+  row[1] + ")");
    	}
    	return new List[] {valueResult, displayResult};
    }
    
    public List<ArrayList<String>>[] getAllWarehouses() {
    	String sql = "SELECT p.id, p.name FROM prod_warehouse p where p._enable=1;";
    	Session session = HibernateUtil.getSession();
    	SQLQuery sqlQuery = session.createSQLQuery(sql);
    	List<Object[]> list = sqlQuery.list();
    	
    	ArrayList<String> valueResult = new ArrayList<String>();
    	ArrayList<String> displayResult = new ArrayList<String>();
    	if (list.size() == 0) {
    		return new List[] {valueResult, displayResult};
    	}
    	for (Object[] row : list) {
    		valueResult.add(String.valueOf(row[0]));
    		displayResult.add(CEUtil.getValue(String.valueOf(row[1])));
    	}
    	return new List[] {valueResult, displayResult};
    }
    
    public List<ArrayList<String>>[] getStorageItemWarehouseTypeGroup() {
    	String sql = "SELECT p.warehouseid, count(p.warehouseid), b.name FROM prod_storageitem p, prod_warehouse b where p.warehouseid=b.id group by p.warehouseid;";
    	Session session = HibernateUtil.getSession();
    	SQLQuery sqlQuery = session.createSQLQuery(sql);
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
    
    public List<ArrayList<String>>[] getStorageItemProductTypeGroup() {
    	String sql = "SELECT p.productid, count(p.productid), b.name FROM test.prod_storageitem p, test.prod_product b where p.productid=b.id group by p.productid;";
    	Session session = HibernateUtil.getSession();
    	SQLQuery sqlQuery = session.createSQLQuery(sql);
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
    
}
