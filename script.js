document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        "it": {
            "menuServices": "Servizi",
            "menuAbout": "Chi Siamo",
            "menuFares": "Tariffe",
            "menuContact": "Contatti",
            "servicesTitle": "I Nostri Servizi",
            "servicesDescription": "Forniamo una gamma di servizi taxi tra cui trasferimenti aeroportuali, tour della città e viaggi a lunga distanza.",
            "aboutTitle": "Chi Siamo",
            "aboutDescription": "Siamo un team dedicato di autisti professionisti con anni di esperienza. Il nostro obiettivo è fornire servizi di trasporto sicuri e affidabili ai nostri clienti.",
            "faresTitle": "Tariffe",
            "faresDescription": "Le nostre tariffe sono competitive e trasparenti. Puoi utilizzare il nostro calcolatore di tariffe per stimare il costo del tuo viaggio.",
            "contactTitle": "Contattaci",
            "contactPhone": "Telefono: +123456789",
            "contactEmail": "Email: info@taxidriverservice.com",
            "contactAddress": "Indirizzo: Via Taxi 123, Città, Paese"
        },
        "en": {
            "menuServices": "Services",
            "menuAbout": "About Us",
            "menuFares": "Fares",
            "menuContact": "Contact",
            "servicesTitle": "Our Services",
            "servicesDescription": "We provide a range of taxi services including airport transfers, city tours, and long-distance journeys.",
            "aboutTitle": "About Us",
            "aboutDescription": "We are a dedicated team of professional drivers with years of experience. Our goal is to provide safe and reliable transportation services to our clients.",
            "faresTitle": "Fares",
            "faresDescription": "Our fares are competitive and transparent. You can use our fare calculator to estimate the cost of your trip.",
            "contactTitle": "Contact Us",
            "contactPhone": "Phone: +123456789",
            "contactEmail": "Email: info@taxidriverservice.com",
            "contactAddress": "Address: Via Taxi 123, City, Country"
        }
    };

    const languageSelect = document.getElementById("languageSelect");

    function switchLanguage(lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            el.innerText = translations[lang][key];
        });
    }

    switchLanguage(languageSelect.value);

    languageSelect.addEventListener('change', (event) => {
        switchLanguage(event.target.value);
    });


    /*
    document.querySelector('.menu-icon').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('visible');
    });*/

    let slideIndex = 0;
    let slideTimeout;
    showSlides();

    function showSlides() {
        clearTimeout(slideTimeout);
        let slides = document.querySelectorAll('.slides .slide-image-container');
        let dots = document.querySelectorAll('.dot');
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
            dots[index].classList.remove('active');
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('active');
        slideTimeout = setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    window.currentSlide = function (n) {
        slideIndex = n;
        showSlides();
    }

    // Add swipe functionality for mobile
    let startX, endX;
    const slidesContainer = document.querySelector('.slides');

    slidesContainer.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].pageX;
    });

    slidesContainer.addEventListener('touchend', e => {
        endX = e.changedTouches[0].pageX;
        if (startX - endX > 50) {
            // Swipe right
            slideIndex++;
            if (slideIndex > slidesContainer.querySelectorAll('.slide-image-container').length) { slideIndex = 1 }
        } else if (endX - startX > 50) {
            // Swipe left
            slideIndex--;
            if (slideIndex < 1) { slideIndex = slidesContainer.querySelectorAll('.slide-image-container').length }
        }
        slideIndex--; //showSlides will increment that
        showSlides();
    });

    function carManager(){
        const car = document.querySelector('.car');

        // Funzione per tracciare il percorso
        function moveCar(scrollPercentage) {
            // Calcola una posizione curva o lungo un percorso predefinito (ad es. sinusoide)
            // In questo esempio la macchina si muove orizzontalmente e verticalmente.
            const y = scrollPercentage * 100; // Movimento orizzontale (da sinistra a destra)
            
            // Movimento orizzontale con una sinusoide per creare una curva
            const x = Math.sin(scrollPercentage * 4 * Math.PI) * 50 + 50; // Movimento su/giù
            
            // Aggiorna la posizione dell'auto
            car.style.left = `${x}%`;
            car.style.top = `${y}%`;
        }

        // Funzione per ottenere la percentuale di scroll
        function onScroll() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = scrollTop / docHeight;

            moveCar(scrollPercentage);
        }

        // Aggiungi l'evento scroll
        window.addEventListener('scroll', onScroll);
    }

    //carManager();
});
