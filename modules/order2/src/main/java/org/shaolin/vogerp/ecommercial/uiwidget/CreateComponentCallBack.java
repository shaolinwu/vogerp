package org.shaolin.vogerp.ecommercial.uiwidget;

import org.shaolin.bmdp.json.JSONException;
import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.uimaster.page.AjaxContextHelper;
import org.shaolin.uimaster.page.ajax.CallBack;
import org.shaolin.uimaster.page.ajax.Table;
import org.shaolin.vogerp.ecommercial.be.IMachOrderComponent;

public class CreateComponentCallBack implements CallBack {

	private Table t;
	
	public CreateComponentCallBack() {}//for serialization.
	
	public CreateComponentCallBack(Table t) {
		this.t = t;
	}
	
	@Override
	public void execute(Object... objects) {
		IMachOrderComponent component = (IMachOrderComponent)objects[0];
		t.addRow(component);
	}

	public JSONObject toJSON() throws JSONException {
		JSONObject json = new JSONObject();
		json.put("tid", this.t.getId());
		json.put("prefix", this.t.getFrameInfo());
		return json;
	}
	
	public void fromJSON(JSONObject json) throws JSONException {
		String uiid = json.getString("tid");
		String entityPrefix = json.getString("prefix");
		this.t = (Table)AjaxContextHelper.getAjaxContext().getElementByAbsoluteId(uiid);
	}
}
