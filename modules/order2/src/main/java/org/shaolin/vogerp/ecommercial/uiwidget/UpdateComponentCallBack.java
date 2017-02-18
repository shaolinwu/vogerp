package org.shaolin.vogerp.ecommercial.uiwidget;

import java.util.List;

import org.shaolin.uimaster.page.ajax.CallBack;
import org.shaolin.uimaster.page.ajax.Table;
import org.shaolin.vogerp.ecommercial.be.IMachOrderComponent;

public class UpdateComponentCallBack implements CallBack {

	private Table t;
	
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
			} else if (component.getName() == list.get(i).getName()) {
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

}
