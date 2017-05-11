package org.shaolin.vogerp.commonmodel.widget;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;

import org.shaolin.bmdp.analyzer.be.IChartPointData;
import org.shaolin.bmdp.analyzer.be.ITableColumnStatistic;
import org.shaolin.bmdp.analyzer.be.ITableStatistic;
import org.shaolin.bmdp.analyzer.be.TableColumnStatisticImpl;
import org.shaolin.bmdp.analyzer.be.TableStatisticImpl;
import org.shaolin.bmdp.analyzer.dao.AanlysisModelCust;
import org.shaolin.bmdp.datamodel.common.ExpressionType;
import org.shaolin.bmdp.datamodel.page.ExpressionPropertyType;
import org.shaolin.bmdp.datamodel.page.StringPropertyType;
import org.shaolin.bmdp.datamodel.page.UITableColumnType;
import org.shaolin.bmdp.runtime.ce.CEUtil;
import org.shaolin.javacc.context.DefaultParsingContext;
import org.shaolin.javacc.exception.ParsingException;
import org.shaolin.uimaster.page.HTMLUtil;
import org.shaolin.uimaster.page.UserRequestContext;
import org.shaolin.uimaster.page.ajax.Widget;
import org.shaolin.uimaster.page.cache.UIFormObject;
import org.shaolin.uimaster.page.javacc.VariableEvaluator;
import org.shaolin.uimaster.page.widgets.HTMLChartDoughnutType;
import org.shaolin.uimaster.page.widgets.HTMLWidgetType;
import org.shaolin.vogerp.commonmodel.util.StatisticUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class OrgCharts extends HTMLWidgetType {

	private static final Logger logger = LoggerFactory.getLogger(OrgCharts.class);
	
    public OrgCharts(String id)
    {
        super(id);
    }
	
	@Override
	public void generateBeginHTML(UserRequestContext context, UIFormObject ownerEntity, int depth) {
		
	}
    
    @Override
    public void generateEndHTML(UserRequestContext context, UIFormObject ownerEntity, int depth)
    {
    	generateWidget(context);
    	String city = (String)this.getAttribute("value");
    	List<Object[]> list = StatisticUtil.queryTotalOrgByCity(city);
		if (list == null || list.isEmpty()) {
			return;
		}
		ITableStatistic group = new TableStatisticImpl();
		List<ITableColumnStatistic> definedColumns = new ArrayList<ITableColumnStatistic>();
		group.setColumns(definedColumns);		
		for (Object[] row: list) {
			String description = CEUtil.toCEValue(row[1].toString()).getDisplayName();
			ITableColumnStatistic item = new TableColumnStatisticImpl();
			item.setName(row[1].toString());
			item.setDescription(description);
			definedColumns.add(item);
		}
		
		DefaultParsingContext localP = new DefaultParsingContext();
		localP.setVariableClass("rowBE", IChartPointData.class);
		List<UITableColumnType> columns = new ArrayList<UITableColumnType>();
		for (ITableColumnStatistic definedCol : definedColumns) {
			UITableColumnType col = new UITableColumnType();
			StringPropertyType title = new StringPropertyType();
			title.setValue(definedCol.getName());
			if (definedCol.getDescription() != null) {
				title.setValue(definedCol.getDescription());
			}
			col.setTitle(title);
			String realColumnId = definedCol.getName();
			col.setBeFieldId("rowBE." + realColumnId);
			col.setCssStype(genHexColor());
			ExpressionPropertyType expr = new ExpressionPropertyType();
			ExpressionType exprValue = new ExpressionType();
			if (columns.size() == 0) {
				exprValue.setExpressionString("{return rowBE.getDataset();}");
			} else {
				exprValue.setExpressionString("{return rowBE.getDataset"+columns.size()+"();}");
			}
			expr.setExpression(exprValue);
    		try {
				exprValue.parse(localP);
			} catch (ParsingException e) {
				logger.warn(e.getMessage(), e);
			}
    		
			col.setRowExpression(expr);
			columns.add(col);
		}		
		
		HashMap<String, Integer> chartSum = toSumPoints(list);
		
    	String uiid = this.getUIID()+"chart";
    	HTMLChartDoughnutType chartWidget = new HTMLChartDoughnutType(uiid);
		chartWidget.addAttribute("query", chartSum);
		chartWidget.addAttribute("labels", AanlysisModelCust.getLabels(chartSum));
		chartWidget.addAttribute("columns", columns);
		chartWidget.addAttribute("width", "200px");
		chartWidget.addAttribute("height", "200px");
		
		chartWidget.generateBeginHTML(context, ownerEntity, depth);
		chartWidget.generateEndHTML(context, ownerEntity, depth);
    		
		StringBuilder sb = new StringBuilder();
		sb.append("UIMaster.pageInitFunctions.push(function(){\n");
		String jsvar = "defaultname." + uiid;
		sb.append(jsvar).append(" = new UIMaster.ui.chart({ui: elementList[\"");
		sb.append(context.getHTMLPrefix() + uiid).append("\"]});\n");
		sb.append(jsvar).append(".init();\n");
		sb.append("});\n");
		HTMLUtil.generateTab(context, depth + 1);
		context.generateHTML("</div>");
		HTMLUtil.generateTab(context, depth);
		context.generateHTML("</div>");
		HTMLUtil.generateTab(context, depth);
    	context.generateHTML("<script type=\"text/javascript\">\n");
    	context.generateHTML(sb.toString());
    	context.generateHTML("</script>");
    	
    	generateEndWidget(context);
    }
    

	private HashMap<String, Integer> toSumPoints(final List<Object[]> data) {
		HashMap<String, Integer> result  = new HashMap<String, Integer>();
		for (Object[] row: data) {
			result.put(CEUtil.toCEValue(row[1].toString()).getDisplayName(), ((Number)row[0]).intValue());
		}
		return result;
	}
	
	private String genRGB() {
		return ((int) (Math.random() * 255)) + ","
				+ ((int) (Math.random() * 255)) + ","
				+ ((int) (Math.random() * 255));
	}
	
	private String genHexColor() {
		Random random = new Random();
		String red = Integer.toHexString(random.nextInt(256)).toUpperCase();
		String green = Integer.toHexString(random.nextInt(256)).toUpperCase();
		String blue = Integer.toHexString(random.nextInt(256)).toUpperCase();

		red = red.length() == 1 ? "0" + red : red;
		green = green.length() == 1 ? "0" + green : green;
		blue = blue.length() == 1 ? "0" + blue : blue;
		return "'#" + red + green + blue + "'";
	}
	
    public Widget createAjaxWidget(VariableEvaluator ee)
    {
      return null;
    }
}
