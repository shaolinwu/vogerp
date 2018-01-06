package org.shaolin.vogerp.ecommercial.uiwidget;

import java.util.List;

import org.shaolin.bmdp.json.JSONException;
import org.shaolin.bmdp.json.JSONObject;
import org.shaolin.uimaster.page.AjaxContextHelper;
import org.shaolin.uimaster.page.ajax.CallBack;
import org.shaolin.uimaster.page.ajax.Table;
import org.shaolin.vogerp.ecommercial.be.IMachOrderComponent;

public class UpdateComponentCallBack implements CallBack {

	private Table t;
	
	public UpdateComponentCallBack() {}//for serialization.
	
	public UpdateComponentCallBack(Table t) {
		this.t = t;
	}
	
	@Override
	public void execute(Object... objects) {
		IMachOrderComponent component = (IMachOrderComponent)objects[0];
		List<IMachOrderComponent> list = (List)t.getListData();
		int i=0;
		for (; i<list.size(); i++) {
			if (component.getId() > 0 && component.getId() == list.get(i).getId()) {
				break;
			} else if (component.getName().equals(list.get(i).getName())) {
				break;
			}
		}
		if (i<list.size()) {
			t.setRow(i, component);
		} else {
			t.addRow(component);
		}
		t.refresh();
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
		this.t = (Table)AjaxContextHelper.getAjaxContext().getElementByAbsoluteId(uiid, Table.class);
	}
}
