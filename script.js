const translations = {
  en: {
    fleetTitle: "Our Fleet",
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    reviews: "Reviews",
    contact: "Contact",
    title: "Travel in style, arrive with elegance",
    subtitle: "Professional chauffeur service for all your needs: airports, events, private tours, and more.",
    description: "We provide private, comfortable, and safe transfers to any destination. Our priority is your comfort and punctuality.",
    aboutTitle: "About Us",
    aboutText: "We are a team of professional drivers dedicated to providing you with a premium travel experience. Punctuality, discretion, and comfort are our core values.",
    servicesTitle: "Our Services",
    airportTransfers: "Airport Transfers",
    airportDesc: "Reach airports on time and stress-free.",
    corporateTransfers: "Corporate Transfers",
    corporateDesc: "Elegant solutions for meetings and business trips.",
    privateEvents: "Private Events",
    eventsDesc: "Dedicated transportation for weddings, parties, and special occasions.",
    privateTours: "Private Tours",
    toursDesc: "Discover the city or local attractions with our personalized tours.",
    availability: "24/7 Availability",
    availabilityDesc: "We are always available, every day, at any time. Weekend by reservation",
    contactTitle: "Contact Us"
  },
  it: {
    fleetTitle: "La Nostra Flotta",
    home: "Home",
    about: "Chi Siamo",
    services: "Servizi",
    gallery: "Galleria",
    reviews: "Recensioni",
    contact: "Contatti",
    title: "Viaggia con stile, arriva con eleganza",
    subtitle: "Servizio di autista professionale per tutte le tue esigenze: aeroporti, eventi, tour privati e altro.",
    description: "Forniamo trasferimenti privati, confortevoli e sicuri verso qualsiasi destinazione. La nostra priorità è il tuo comfort e la puntualità.",
    aboutTitle: "Chi Siamo",
    aboutText: "Siamo un team di autisti professionisti dedicati a fornirti un'esperienza di viaggio premium. Puntualità, discrezione e comfort sono i nostri valori fondamentali.",
    servicesTitle: "I Nostri Servizi",
    airportTransfers: "Trasferimenti Aeroportuali",
    airportDesc: "Raggiungi gli aeroporti in orario e senza stress.",
    corporateTransfers: "Trasferimenti Aziendali",
    corporateDesc: "Soluzioni eleganti per meeting e viaggi d'affari.",
    privateEvents: "Eventi Privati",
    eventsDesc: "Trasporti dedicati per matrimoni, feste e occasioni speciali.",
    privateTours: "Tour Privati",
    toursDesc: "Scopri la città o le attrazioni locali con i nostri tour personalizzati.",
    availability: "Disponibilità 24/7",
    availabilityDesc: "Siamo sempre disponibili, ogni giorno, a qualsiasi ora.\nWeekend su prenotazione",
    contactTitle: "Contattaci"
  }
};

let currentLang = 'it';
let lastScrollTop = 0;

function handleToggle(checkbox) {
  switchLanguage(checkbox.checked ? 'it' : 'en');
}

function switchLanguage(lang) {
  currentLang = lang;

  // Update navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const key = link.getAttribute('href').substring(1);
    if (translations[lang][key]) {
      link.textContent = translations[lang][key];
    }
  });

  // Update all elements with data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Initialize page in Italian
document.addEventListener('DOMContentLoaded', () => {
  switchLanguage('it');
});

// Scroll handling
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.classList.add('scrolled');
    if (currentScroll > lastScrollTop) {
      nav.classList.remove('show');
    } else {
      nav.classList.add('show');
    }
  } else {
    nav.classList.remove('scrolled');
  }

  lastScrollTop = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const nav = document.querySelector('nav');
    if (targetElement) {
      if (nav) nav.classList.remove('show');
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});