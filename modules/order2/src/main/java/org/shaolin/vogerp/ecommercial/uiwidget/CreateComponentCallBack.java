package org.shaolin.vogerp.ecommercial.uiwidget;

import org.shaolin.uimaster.page.ajax.CallBack;
import org.shaolin.uimaster.page.ajax.Table;
import org.shaolin.vogerp.ecommercial.be.IMachOrderComponent;

public class CreateComponentCallBack implements CallBack {

	private Table t;
	
	public CreateComponentCallBack(Table t) {
		this.t = t;
	}
	
	@Override
	public void execute(Object... objects) {
		IMachOrderComponent component = (IMachOrderComponent)objects[0];
		t.addRow(component);
	}

}
