package org.shaolin.vogerp.ecommercial.uiwidget;

import java.util.HashSet;
import java.util.Set;

import org.shaolin.uimaster.page.AjaxContext;
import org.shaolin.uimaster.page.UserRequestContext;
import org.shaolin.uimaster.page.cache.UIFormObject;
import org.shaolin.uimaster.page.od.formats.FormatUtil;
import org.shaolin.uimaster.page.widgets.HTMLWidgetType;
import org.shaolin.vogerp.ecommercial.be.IMachOrderComponent;
import org.shaolin.vogerp.ecommercial.be.IMachiningOrder;
import org.shaolin.vogerp.ecommercial.ce.MachiningCategoryType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ComponentListUI extends HTMLWidgetType {
	private static final long serialVersionUID = 1L;
	private static final Logger logger = LoggerFactory.getLogger(AjaxContext.class);
	
    public ComponentListUI(String id)
    {
        super(id);
    }

	@Override
	public void generateBeginHTML(UserRequestContext context, UIFormObject ownerEntity, int depth) {
	}

	@Override
	public void generateEndHTML(UserRequestContext context, UIFormObject ownerEntity, int depth) {
		generateWidget(context);
		try {
			IMachiningOrder morder = (IMachiningOrder)this.getAttribute("value");
			Set<IMachOrderComponent> components = morder.getComponents();
			if (components != null && components.size() > 0) {
				try {
					double totalPrice = 0;
					totalPrice = generateTable(context, getComponents(components, MachiningCategoryType.MATERIAL), "\u7528\u6599");
					totalPrice += generateTable(context, getComponents(components, MachiningCategoryType.SKINHANDLING), "\u8868\u9762\u5904\u7406");
					totalPrice += generateTable(context, getComponents(components, MachiningCategoryType.MACHININGTOOL), "\u52A0\u5DE5\u8BBE\u5907");
					totalPrice += generateTable(context, getComponents(components, MachiningCategoryType.THIRDPARTYCOMPONET), "\u6807\u51C6\u4EF6\u53CA\u8F85\u52A9\u6750\u6599");
				
					double tax = morder.getTaxRate() * totalPrice;
					context.generateHTML("<DIV>\u7A0E\u7387:"+FormatUtil.getCurrency(tax, null, true)+"</DIV>");
					context.generateHTML("<DIV style='font-weight:bold;color:red'>\u603B\u7ED3:"+FormatUtil.getCurrency(totalPrice + tax, null, true)+"</DIV>");
				} catch (Exception e) {
					logger.warn("Error occurred while generating Machining order: " + e.getMessage(), e);
				}
			}
		} finally {
			generateEndWidget(context);
		}
	}
	
	private Set<IMachOrderComponent> getComponents(Set<IMachOrderComponent> components, MachiningCategoryType type) {
		Set<IMachOrderComponent> result = new HashSet<IMachOrderComponent>();
		for (IMachOrderComponent comp : components) {
			if (comp.getCategory() == type) {
				result.add(comp);
			}
		}
		return result;
	}

	private double generateTable(UserRequestContext context, Set<IMachOrderComponent> fiterComponents, String title) 
		throws Exception {
		if (fiterComponents.size() == 0) {
			return 0;
		}
		context.generateHTML("<DIV class='vogerp_mocomp_list_title'>" +title+ "</DIV>");
		context.generateHTML("<UL class='vogerp_mocomp_list'>");
		double totalPrice = 0;
		for (IMachOrderComponent comp: fiterComponents) {
			context.generateHTML("<LI>");
			String price = FormatUtil.getCurrency((comp.getPrice()*comp.getEstiWeight()), null, false);
			totalPrice += (comp.getPrice()*comp.getEstiWeight());
			context.generateHTML(comp.getName() +"," +price);
			if (comp.getCategory() == MachiningCategoryType.MACHININGTOOL) {
				context.generateHTML("(\u5355\u4EF7:"+comp.getPrice()+",\u5DE5\u65F6:"+comp.getEstiMakingHour()+")");
			} else {
				context.generateHTML("(\u5355\u4EF7:"+comp.getPrice()+",\u7528\u91CF:"+comp.getEstiWeight()
										+",\u5355\u4F4D:"+comp.getWeightUnit().getDisplayName()+")");
			}
			context.generateHTML("</LI>");
		}
		context.generateHTML("<LI style='font-weight:bold;'>\u5C0F\u7ED3:"+FormatUtil.getCurrency(totalPrice, null, false)+"</LI>");
		context.generateHTML("</UL>");
		return totalPrice;
	}
	
}
