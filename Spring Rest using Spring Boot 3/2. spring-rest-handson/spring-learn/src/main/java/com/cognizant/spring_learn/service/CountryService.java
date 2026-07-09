package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class CountryService {
    private CountryRepository countryRepository;

    public CountryService(@Autowired CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    public Country getCountryByCode(String code) {
        return countryRepository.findByCode(code);
    }
}
