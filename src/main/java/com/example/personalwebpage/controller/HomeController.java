package com.example.personalwebpage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        // Angular tek sayfa giriş noktası
        return "forward:/index.html";
    }
}