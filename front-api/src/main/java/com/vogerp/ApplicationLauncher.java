package com.vogerp;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

import javax.annotation.PreDestroy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

/**
 * Our application launcher base on Spring Boot.
 * 
 * @author wushaolin
 *
 */
@Component
public class ApplicationLauncher implements CommandLineRunner {

	private static final Logger logger = LoggerFactory.getLogger(ApplicationLauncher.class);
	
	private final ApplicationContext springContext;
	
	@Autowired
	public ApplicationLauncher(ApplicationContext springContext) {
		this.springContext = springContext;
	}
	
	@Override
	public void run(String... arg0) throws Exception {
		logger.info("--------------Start Our Application....------------");
		Map<String, ILifeCycleService> services = this.springContext.getBeansOfType(ILifeCycleService.class);
		List<ILifeCycleService> temp = new ArrayList<ILifeCycleService>(services.values());
		temp.sort(new Comparator<ILifeCycleService>() {
			@Override
			public int compare(ILifeCycleService o1, ILifeCycleService o2) {
				return (o1.getRunLevel() > o2.getRunLevel()) ? 1 : -1;
			}
		});
		for (ILifeCycleService p : temp) {
			logger.info(String.format("Configure the life cycle service: %s with running level %s", new Object[]{p.getClass(), p.getRunLevel()}));
			p.init();
		}
		for (ILifeCycleService p : temp) {
			logger.info(String.format("Start the life cycle service: %s with running level %s", new Object[]{p.getClass(), p.getRunLevel()}));
			p.start();
		}
		logger.info("--------------Our Application is started and ready for work------------");
	}

	@PreDestroy
	public void stop() {
		logger.info("--------------Stop Our Application....------------");
		Map<String, ILifeCycleService> services = this.springContext.getBeansOfType(ILifeCycleService.class);
		List<ILifeCycleService> temp = new ArrayList<ILifeCycleService>(services.values());
		temp.sort(new Comparator<ILifeCycleService>() {
			@Override
			public int compare(ILifeCycleService o1, ILifeCycleService o2) {
				// reversed sequence for shutting down operation.
				return (o1.getRunLevel() < o2.getRunLevel()) ? 1 : -1;
			}
		});
		for (ILifeCycleService p : temp) {
			logger.info(String.format("Stop the life cycle service: %s with running level %s", new Object[]{p.getClass(), p.getRunLevel()}));
			try {
				p.stop();
			} catch (Exception e) {
				logger.info("error stop service! message: " + e.getMessage());
			}
		}
		for (ILifeCycleService p : temp) {
			logger.info(String.format("Distroy the life cycle service: %s with running level %s", new Object[]{p.getClass(), p.getRunLevel()}));
			p.distroy();
		}
		logger.info("--------------Our Application is stopped!------------");
	}
	
}
