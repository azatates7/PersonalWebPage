package com.demo.website;

import com.demo.website.model.NewsArticle;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class NewsController {

    @GetMapping("/") // azatates.com/ adresine yapılan istekleri karşılar
    public String homePage(Model model) {

        // **Gerçek bir uygulamada bu veriler bir API'den veya Veritabanından gelirdi.**

        List<NewsArticle> latestNews = Arrays.asList(
                new NewsArticle("Spring Boot 3.2 Yayınlandı", "Yeni özellikler, güvenlik güncellemeleri ve performans iyileştirmeleri...", "https://spring.io/blog", "15 Aralık"),
                new NewsArticle("Yapay Zeka Hızla Büyüyor", "Sektör raporlarına göre, AI yatırımları rekor kırdı.", "https://azatates.com/ai-report", "14 Aralık"),
                new NewsArticle("Yeni Web Standartları", "HTML5 ve CSS3'ün ötesindeki gelecek standartlar.", "https://azatates.com/web-standards", "13 Aralık")
        );

        // Haber listesini HTML şablonuna gönderir
        model.addAttribute("haberler", latestNews);
        model.addAttribute("siteBasligi", "Azatates Teknoloji Haberleri");

        // news-index.html şablonunu döndürür
        return "news-index";
    }
}