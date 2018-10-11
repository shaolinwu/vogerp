package com.vogerp.common.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.vogerp.monitor.URLCollector;

@Aspect
@Component
public class ControllerStatistics {

	// 定义一个日志的全局的静态
	private static final Logger logger = LoggerFactory.getLogger(ControllerStatistics.class);

	/**
	 * 定义一个切入点. 解释下：
	 * 
	 * ~ 第一个 * 代表任意修饰符及任意返回值. ~ 第二个 * 定义在web包或者子包 ~ 第三个 * 任意方法 ~ .. 匹配任意数量的参数.
	 */
	static final String pCutStr = "execution(* com.vogerp.*.controller.*.*(..))";

	@Pointcut(value = pCutStr)
	public void logPointcut() {
	}

	/**
	 * Aop：环绕通知 切整个包下面的所有涉及到调用的方法的信息
	 * 
	 * @param joinPoint
	 * @return
	 * @throws Throwable
	 */
	@Around("logPointcut()")
	public Object doAround(ProceedingJoinPoint joinPoint) throws Throwable {
		long start = System.currentTimeMillis();
		try {
			Object result = joinPoint.proceed();
			if (result == null) {
				// 如果切到了 没有返回类型的void方法，这里直接返回
				return null;
			}

//			logger.debug("===================");
//			String tragetClassName = joinPoint.getSignature().getDeclaringTypeName();
//			Object[] args = joinPoint.getArgs();// 参数
//			int argsSize = args.length;
//			String argsTypes = "";
//			String typeStr = joinPoint.getSignature().getDeclaringType().toString().split(" ")[0];
//			String returnType = joinPoint.getSignature().toString().split(" ")[0];
//			logger.debug("类/接口:" + tragetClassName + "(" + typeStr + ")");
//			logger.debug("方法:" + MethodName);
//			logger.debug("参数个数:" + argsSize);
//			logger.debug("返回类型:" + returnType);
//			if (argsSize > 0) {
//				// 拿到参数的类型
//				for (Object object : args) {
//					if (object != null) {
//						argsTypes += object.getClass().getTypeName().toString() + " ";
//					} else {
//						argsTypes += "null ";
//					}
//				}
//				logger.debug("参数类型：" + argsTypes);
//			}

			Long total = System.currentTimeMillis() - start;
//			logger.debug("耗时: " + total + " ms!");
			String methodName = joinPoint.toString();
			if (!URLCollector.hasURL(methodName)) {
				URLCollector.registerURL(methodName, methodName);
			}
			URLCollector.updateStats(methodName, total);
			
			return result;
		} catch (Throwable e) {
			long end = System.currentTimeMillis();
			String MethodName = joinPoint.getSignature().getName();
			if (URLCollector.hasURL(MethodName)) {
				URLCollector.registerURL(MethodName, MethodName);
			}
			Long total = end - start;
			URLCollector.updateStatsWithFail(MethodName, total);
			logger.debug("====around " + joinPoint + "\tUse time : " + (end - start) + " ms with exception : "
					+ e.getMessage());
			throw e;
		}

	}

	// 对Controller下面的方法执行前进行切入，初始化开始时间
	@Before(value = "execution(* com.vogerp.*.controller.*.*(..))")
	public void beforMehhod(JoinPoint jp) {
	}

	// 对Controller下面的方法执行后进行切入，统计方法执行的次数和耗时情况
	// 注意，这里的执行方法统计的数据不止包含Controller下面的方法，也包括环绕切入的所有方法的统计信息
	@AfterReturning(value = "execution(* com.vogerp.*.controller.*.*(..))")
	public void afterMehhod(JoinPoint jp) {
	}

}
