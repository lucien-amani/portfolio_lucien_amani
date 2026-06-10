import { createContext, useContext, useState } from 'react'

const TRANSLATIONS = {
  fr: {
    // Navbar
    nav_home: 'Accueil',
    nav_projects: 'Projets',
    nav_why: 'Pourquoi moi',
    nav_services: 'Services',
    nav_contact: 'Contact',
    nav_contact_btn: 'Me contacter',
    // Hero
    hero_role: 'Développeur Fullstack',
    hero_tagline: 'Je ne livre pas du code.',
    hero_tagline2: 'Je livre des solutions.',
    hero_desc: "Né à Bukavu, formé à l'Université Officielle de Bukavu, je construis des logiciels qui résolvent de vrais problèmes pour les organisations, écoles, PMEs, coopératives agricoles et les personnes privées qui méritent mieux que des outils génériques.",
    hero_cta_projects: 'Voir mes projets',
    hero_cta_contact: 'Me contacter',
    hero_available: 'Disponible',
    hero_photo_hint: 'Cliquez sur les miniatures pour explorer mon parcours en photos',
    hero_availability: 'CDI · CDD · Freelance',
    // Portfolio
    portfolio_label: 'Projets',
    portfolio_title: 'Ce que j\'ai construit',
    portfolio_subtitle: 'Des projets réels, pour des organisations réelles, avec des contraintes réelles.',
    portfolio_all: 'Tous',
    // WhyMe
    why_label: 'Pourquoi moi',
    why_title: 'Pas juste un développeur.',
    why_title2: 'Un partenaire technique.',
    why_subtitle: "Il existe des milliers de développeurs compétents. Ce qui fait la différence, c'est la capacité à comprendre votre réalité avant d'écrire la première ligne.",
    why_testimonials_label: 'Témoignages',
    why_testimonials_text: 'Les retours clients sont en cours de collecte. Ils seront publiés ici prochainement.',
    // Services
    services_label: 'Services',
    services_title: 'Ce que je peux faire pour vous',
    services_subtitle: 'Des solutions pensées pour des contextes réels, pas des templates génériques. Chaque engagement commence par une discussion sur votre situation.',
    services_cta_title: 'Un projet en tête ?',
    services_cta_subtitle: 'Décrivez-moi votre situation même vaguement. On verra ensemble ce qui est faisable.',
    services_cta_btn: 'Discutons-en',
    // Contact
    contact_label: 'Contact',
    contact_title: 'Parlons de votre projet',
    contact_subtitle: "Pas besoin d'avoir tout défini. Décrivez-moi votre situation, même en quelques lignes. Je réponds dans les 48 heures via un Courrier Electronique.",
    contact_name: 'Nom complet',
    contact_email: 'Adresse email',
    contact_subject: 'Sujet',
    contact_subject_placeholder: 'Choisir un sujet…',
    contact_custom_subject: 'Précisez votre sujet',
    contact_custom_placeholder: 'Ex: Demande de partenariat / Autre projet...',
    contact_message: 'Message',
    contact_message_placeholder: 'Décrivez votre projet, organisation ou besoin…',
    contact_send: 'Envoyer le message',
    contact_sending: 'Envoi en cours…',
    contact_success_title: 'Message envoyé',
    contact_success_subtitle: 'Merci. Je vous réponds dans les 48 heures via Mail.',
    contact_send_another: 'Envoyer un autre message',
    contact_error: "Une erreur est survenue. Veuillez vous connecter à l'internet.",
    contact_available: 'Disponible actuellement',
    contact_availability_label: 'Disponible pour CDI, CDD et missions freelance',
    contact_spam_note: 'Email non affiché pour éviter le spam, utilisez le formulaire.',
    contact_networks: 'Réseaux',
    // Footer
    footer_built: 'Développeur fullstack basé à Bukavu, spécialisé dans les solutions pour Ecoles, PMEs, Coopératives et Organisations.',
    footer_nav: 'Navigation',
    footer_networks: 'Réseaux',
    footer_rights: 'Tous droits réservés.',
    footer_designed: 'Conçu et développé par',
    // WhatsApp messages
    wa_msg1: "Bonjour Lucien, j'ai vu votre portfolio et j'aimerais discuter d'un projet de développement.",
    wa_msg2: "Salut Lucien, je souhaiterais en savoir plus sur vos solutions sur mesure.",
    wa_msg3: "Bonjour Lucien, j'aimerais avoir un échange concernant une opportunité de collaboration.",
    wa_msg4: "Bonjour Lucien Amani, je souhaite discuter d'un projet web pour mon organisation.",
    wa_msg5: "Bonjour, j'aimerais obtenir un devis pour un projet de développement de logiciel.",
  },
  en: {
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_why: 'Why me',
    nav_services: 'Services',
    nav_contact: 'Contact',
    nav_contact_btn: 'Contact me',
    hero_role: 'Fullstack Developer',
    hero_tagline: "I don't deliver code.",
    hero_tagline2: 'I deliver solutions.',
    hero_desc: "Born in Bukavu, trained at the Official University of Bukavu, I build software that solves real problems for organizations, schools, SMEs, agricultural cooperatives and individuals who deserve better than generic tools.",
    hero_cta_projects: 'See my projects',
    hero_cta_contact: 'Contact me',
    hero_available: 'Available',
    hero_photo_hint: 'Click thumbnails to explore my journey in photos',
    hero_availability: 'Full-time · Contract · Freelance',
    portfolio_label: 'Projects',
    portfolio_title: 'What I have built',
    portfolio_subtitle: 'Real projects, for real organizations, with real constraints.',
    portfolio_all: 'All',
    why_label: 'Why me',
    why_title: 'Not just a developer.',
    why_title2: 'A technical partner.',
    why_subtitle: "There are thousands of skilled developers. What makes the difference is the ability to understand your reality before writing the first line.",
    why_testimonials_label: 'Testimonials',
    why_testimonials_text: 'Client feedback is being collected. It will be published here soon.',
    services_label: 'Services',
    services_title: 'What I can do for you',
    services_subtitle: 'Solutions designed for real contexts, not generic templates. Every engagement starts with a discussion about your situation.',
    services_cta_title: 'Have a project in mind?',
    services_cta_subtitle: 'Describe your situation, even vaguely. We will see together what is feasible.',
    services_cta_btn: "Let's discuss",
    contact_label: 'Contact',
    contact_title: "Let's talk about your project",
    contact_subtitle: "No need to have everything figured out. Describe your situation, even in a few lines. I respond within 48 hours by email.",
    contact_name: 'Full name',
    contact_email: 'Email address',
    contact_subject: 'Subject',
    contact_subject_placeholder: 'Choose a subject…',
    contact_custom_subject: 'Specify your subject',
    contact_custom_placeholder: 'E.g: Partnership request / Other project...',
    contact_message: 'Message',
    contact_message_placeholder: 'Describe your project, organization or need…',
    contact_send: 'Send message',
    contact_sending: 'Sending…',
    contact_success_title: 'Message sent',
    contact_success_subtitle: 'Thank you. I will reply within 48 hours by email.',
    contact_send_another: 'Send another message',
    contact_error: "An error occurred. Please check your internet connection.",
    contact_available: 'Currently available',
    contact_availability_label: 'Available for full-time, contract and freelance missions',
    contact_spam_note: 'Email not shown to avoid spam, please use the form.',
    contact_networks: 'Networks',
    footer_built: 'Fullstack developer based in Bukavu, specialized in solutions for Schools, SMEs, Cooperatives and Organizations.',
    footer_nav: 'Navigation',
    footer_networks: 'Networks',
    footer_rights: 'All rights reserved.',
    footer_designed: 'Designed and developed by',
    wa_msg1: "Hello Lucien, I saw your portfolio and would like to discuss a development project.",
    wa_msg2: "Hi Lucien, I'd like to learn more about your custom solutions.",
    wa_msg3: "Hello Lucien, I'd like to discuss a collaboration opportunity.",
    wa_msg4: "Hello Lucien Amani, I'd like to discuss a web project for my organization.",
    wa_msg5: "Hello, I'd like to get a quote for a software development project.",
  }
}

const LanguageContext = createContext(null)

function detectLang() {
  const lang = navigator.language || navigator.userLanguage || 'fr'
  return lang.startsWith('fr') ? 'fr' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || detectLang()
  })

  const t = (key) => TRANSLATIONS[lang][key] || TRANSLATIONS['fr'][key] || key

  const switchLang = (l) => {
    setLang(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, t, switchLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
