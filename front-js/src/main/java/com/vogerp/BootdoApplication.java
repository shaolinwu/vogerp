package com.vogerp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@ServletComponentScan
@SpringBootApplication
public class BootdoApplication {
	public static void main(String[] args) {
		SpringApplication.run(BootdoApplication.class, args);
		System.out.println("ヾ(◍°∇°◍)ﾉﾞ    vogerp-js启动成功!      ヾ(◍°∇°◍)ﾉﾞ\n");
	}
}
