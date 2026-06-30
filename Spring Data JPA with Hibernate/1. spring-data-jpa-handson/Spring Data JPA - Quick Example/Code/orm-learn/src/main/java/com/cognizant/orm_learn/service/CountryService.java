package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private CountryRepository countryRepository;

    public CountryService ( @Autowired CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Country getCountryByCode(String code) {
        return countryRepository.findById(code).orElse(null);
    }

    public String updateCountry(Country country) {
        countryRepository.save(country);
        return "Country updated successfully";
    }

    public String deleteCountry(String code) {
        countryRepository.deleteById(code);
        return "Country deleted successfully";
    }

    public String addNewCountry(Country country) {
        countryRepository.save(country);
        return "New country added successfully";
    }
}