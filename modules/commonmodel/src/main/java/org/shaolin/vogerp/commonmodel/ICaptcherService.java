package org.shaolin.vogerp.commonmodel;

import org.shaolin.bmdp.runtime.spi.IServiceProvider;
import org.shaolin.vogerp.commonmodel.be.ICaptcha;

public interface ICaptcherService extends IServiceProvider {

	public int generateOne();
	
	public ICaptcha getItem(int index);
}
