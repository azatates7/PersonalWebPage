import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">
      <div class="logo">A</div>
      <nav>
        <a href="#about">Hakkımda</a>
        <a href="#contact">İletişim</a>
      </nav>
    </header>

    <section class="hero">
      <h1>Merhaba, ben Azat</h1>
      <p>Angular & Spring Boot ile modern web uygulamaları geliştiriyorum.</p>
      <a href="#contact" class="btn">İletişime Geç</a>
    </section>

    <section id="about" class="section">
      <h2>Hakkımda</h2>
      <p>
        Minimal, hızlı ve sürdürülebilir web çözümleri üretmeyi seviyorum.
      </p>
    </section>

    <section id="contact" class="section">
      <h2>İletişim</h2>
      <p>📧 azat@azatates.com</p>
    </section>

    <footer>
      © 2025 azatates.com
    </footer>
  `
})
export class AppComponent {}
