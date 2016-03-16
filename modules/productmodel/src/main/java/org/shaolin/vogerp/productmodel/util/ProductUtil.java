package org.shaolin.vogerp.productmodel.util;

import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.i18n.LocaleContext;
import org.shaolin.bmdp.utils.DateParser;
import org.shaolin.uimaster.page.exception.FormatException;
import org.shaolin.uimaster.page.od.formats.FormatUtil;
import org.shaolin.vogerp.commonmodel.util.CEOperationUtil;
import org.shaolin.vogerp.productmodel.be.IProduct;
import org.shaolin.vogerp.productmodel.be.IProductCharacteristic;
import org.shaolin.vogerp.productmodel.be.IProductPrice;
import org.shaolin.vogerp.productmodel.be.IProductTemplate;
import org.shaolin.vogerp.productmodel.be.ProductTemplateImpl;
import org.shaolin.vogerp.productmodel.dao.ProductModel;

public class ProductUtil {

	public static String genSerialNumber() {
		DateParser parse = new DateParser(new Date());
		return "PSN-" + parse.getCNDateString() 
				+ "-" + parse.format(parse.getHours(), 2) 
				+ "" + parse.format(parse.getSeconds(), 2);
	}

	public static String genProductCode() {
		return "PPC-" + System.currentTimeMillis();
	}
	
	public static String getProductSummary(IProduct product) {
		StringBuffer sb = new StringBuffer();
		sb.append(product.getTemplate().getName()).append("(").append(product.getSerialNumber()).append(")");
		return sb.toString();
	}
	
	public static String getProductCharacter(IProductTemplate product) {
		List<IProductCharacteristic> character = ProductModel.INSTANCE.searchProductCharacteristic((ProductTemplateImpl)product, null, 0, 1);
		if (character.size() > 0) {
			return CEOperationUtil.toHTMLString(character.get(0).getCeValues());
		}
		return "";
	}
	
	public static String getPriceFormat(double price) {
		String v;
		try {
			v = FormatUtil.getCurrency(price, LocaleContext.getUserLocale(), false);
		} catch (FormatException e) {
			v = String.valueOf(price);
		}
		return v;
	}
	
	public static String getPricePackage(IProductPrice price) {
		StringBuffer sb = new StringBuffer();
		String packages = price.getPackages();
		if (packages != null && !packages.trim().isEmpty()) {
			sb.append(CEOperationUtil.toHTMLString(packages));
		}
		return sb.toString();
	}
	
}
