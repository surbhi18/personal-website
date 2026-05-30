---
layout: default
title: Group
---

<div class="photo-gallery" data-carousel>
    <div class="photo-item is-active" data-carousel-slide>
        <img src="/assets/img/flash_back.jpg" alt="Group photo from an escape room">
    </div>
    <div class="photo-item" data-carousel-slide>
        <img src="/assets/img/1000066157.jpg" alt="Group photo outdoors">
    </div>
    <button class="carousel-button carousel-button-prev" type="button" aria-label="Show previous photo" data-carousel-prev>&#8249;</button>
    <button class="carousel-button carousel-button-next" type="button" aria-label="Show next photo" data-carousel-next>&#8250;</button>
    <div class="carousel-dots" aria-label="Choose group photo">
        <button class="carousel-dot is-active" type="button" aria-label="Show photo 1" data-carousel-dot></button>
        <button class="carousel-dot" type="button" aria-label="Show photo 2" data-carousel-dot></button>
    </div>
</div>

<script>
    document.querySelectorAll('[data-carousel]').forEach((carousel) => {
        const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
        const dots = Array.from(carousel.querySelectorAll('[data-carousel-dot]'));
        const previousButton = carousel.querySelector('[data-carousel-prev]');
        const nextButton = carousel.querySelector('[data-carousel-next]');
        let currentSlide = 0;

        const showSlide = (index) => {
            currentSlide = (index + slides.length) % slides.length;

            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle('is-active', slideIndex === currentSlide);
            });

            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('is-active', dotIndex === currentSlide);
            });
        };

        previousButton.addEventListener('click', () => showSlide(currentSlide - 1));
        nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

        dots.forEach((dot, dotIndex) => {
            dot.addEventListener('click', () => showSlide(dotIndex));
        });
    });
</script>

## Current Students
### PhD Students
* [Ezra Edelman](https://www.ezraedelman.com/), AWS ASSET Fellow 2025
* [Berkan Otlik](https://berkan.xyz/), supported by *NSF GRFP*
* [Honam Wong](https://matheart.github.io/) (co-advised with [Enric Boix-Adserà](https://web.mit.edu/eboix/www/)), AWS ASSET Fellow 2026

<!-- ### Masters Student(s) -->

### Undergraduate Students  
* [Megan Mann](https://www.linkedin.com/in/megan-mann23), REU'26
* [Jonathan Pei](https://www.linkedin.com/in/jonathanpei), REU'26
* [James Wang](https://www.linkedin.com/in/jwang541), joining Columbia as a PhD student in Fall 2026

### Visiting Student(s)
* [Niki Hasrati](https://nikihasrati.github.io/), PhD student at CMU

I am also fortunate to collaborate with several PhD students at Penn (and other places) who I do not directly advise.

## Alumni

### Visiting Students
* [Jingwen Liu](https://ljw0105.github.io/), PhD student at Columbia

### Masters Students
* [Nimay Kumar](https://nimaykumar.com/), now a data scientist at TD Bank
* [Dante Lokitiyakul](https://dante-hl.github.io/), now a machine learning engineer at Prompt Inversion
* [GuanWen Qiu](https://www.linkedin.com/in/guanwen-qiu-92b6651b0), now a PhD student at Purdue
* [Yufa Zhou](https://masterzhou1.github.io/), now a PhD student at Duke

### Undergraduate Students
* [Maya Gambhir](https://mayapalgambhir.com/), joining Princeton as a PhD student in Fall 2026, also the *recipient of the 2026 Wolf- Hallac Award*
* [Terry Tong](https://terrytong-git.github.io/), joining Columbia as a PhD student in Fall 2026 supported by *NSF GRFP*
* [Aaron Mei](https://www.linkedin.com/in/aaron-mei-513b73a2)
* [Alyssa Nie](https://www.linkedin.com/in/alyssanie)
* [Keshav Ramji](https://www.keshavramji.com/), now a researcher at IBM Research
* [Maxon Rubin-Toles](https://www.linkedin.com/in/max-rubin-toles), now a PhD student at Harvard supported by *NSF GRFP*, also the recipient of the *2025 Computer Science Academic Award*

### Interns at Microsoft Research (co-mentored)
* [Ben L. Edelman](https://benjaminedelman.com/), now a TechCongress AI Safety Fellow at the US AI Safety Institute  
* [Bingbin Liu](https://clarabing.github.io/), now a Kempner Fellow at Harvard
* [Nikunj Saunshi](https://www.nikunjsaunshi.com/), now a Research Scientist at Google
