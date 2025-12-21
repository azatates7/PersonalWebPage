package com.example.resources;

import com.example.personalwebpage.controller.HomeController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PersonalWebPageApplication {
    public static void main(String[] args) {

        SpringApplication.run(PersonalWebPageApplication.class, args);
        (new HomeController()).home();
    }
}
