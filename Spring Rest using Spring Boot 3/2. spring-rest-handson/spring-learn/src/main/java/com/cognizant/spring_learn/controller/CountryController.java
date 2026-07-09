package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {
    private CountryService countryService;

    public CountryController(@Autowired CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/country")
    public Country getCountryIndia() {
        return new ClassPathXmlApplicationContext("config.xml").getBean("india", Country.class);
    }

    @GetMapping("/country/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        return countryService.getCountryByCode(code);
    }
}
