package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
//		System.out.println("This is a Spring Boot Application");

		displayDate();
	}

	public static void displayDate() {
		ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");

		SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);

		try{
			LOGGER.info("START");

			Date date = format.parse("31/12/2018");

			System.out.println();
			System.out.println(date);
//			LOGGER.debug(date);

			LOGGER.info("END");
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

}
