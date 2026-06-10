import { createContext, useContext, useState } from 'react'

const TRANSLATIONS = {
  fr: {
    // ── Navbar ──
    nav_home: 'Accueil',
    nav_projects: 'Projets',
    nav_why: 'Pourquoi moi',
    nav_services: 'Services',
    nav_contact: 'Contact',
    nav_contact_btn: 'Me contacter',

    // ── Hero ──
    hero_location: 'Bukavu, République Démocratique du Congo',
    hero_role: 'Développeur Fullstack',
    hero_tagline: 'Je ne livre pas du code.',
    hero_tagline2: 'Je livre des solutions.',
    hero_desc: "Né à Bukavu, formé à l'Université Officielle de Bukavu, je construis des logiciels qui résolvent de vrais problèmes pour les organisations, écoles, PMEs, coopératives agricoles et les personnes privées qui méritent mieux que des outils génériques.",
    hero_cta_projects: 'Voir mes projets',
    hero_cta_contact: 'Me contacter',
    hero_available: 'Disponible',
    hero_photo_hint: 'Cliquez sur les miniatures pour explorer mon parcours en photos',
    hero_availability: 'CDI · CDD · Freelance',
    hero_img1_caption: 'Lucien Amani Bahogwerhe',
    hero_img1_alt: 'Lucien Amani - Image principale',
    hero_img2_caption: 'Université Officielle de Bukavu',
    hero_img2_alt: "Lucien Amani à l'UOB",
    hero_img3_caption: 'Travail au laboratoire informatique',
    hero_img3_alt: 'Lucien au Laboratoire',
    hero_img4_caption: 'Développeur Fullstack',
    hero_img4_alt: 'Lucien Amani - Portrait',
    hero_thumbnail_alt: 'Miniature',

    // ── Portfolio ──
    portfolio_label: 'Projets réalisés',
    portfolio_title: "Ce que j'ai construit, et pour qui",
    portfolio_subtitle: "Chaque projet part d'un vrai problème terrain. Je commence toujours par comprendre l'organisation avant d'ouvrir un éditeur de code.",
    portfolio_problem: 'Problème',
    portfolio_solution_label: 'Solution livrée',
    portfolio_collab: 'En collaboration avec',
    portfolio_github: 'Voir sur GitHub',
    portfolio_confidential: 'Confidentiel',
    portfolio_public: 'Public',
    // Project: Samy Magadju
    proj1_title: 'Dynamique Samy Magadju - Wema ni Hakiba',
    proj1_type: 'Site ASBL',
    proj1_client: 'Organisation à but non lucratif',
    proj1_problem: "L'organisation avait besoin d'une présence numérique claire pour communiquer sa mission et mobiliser des soutiens.",
    proj1_solution: "Site vitrine dynamique présentant les activités, valeurs et appels à l'action de l'ASBL.",
    // Project: Umoja
    proj2_title: 'Umoja ni Nguvu Foundation',
    proj2_type: 'Site institutionnel',
    proj2_client: 'Fondation / ASBL',
    proj2_problem: "La fondation manquait d'un outil numérique pour présenter ses programmes et crédibiliser ses actions auprès de partenaires.",
    proj2_solution: 'Site institutionnel structuré avec pages programmes, équipe et formulaire de contact sécurisé.',
    // Project: COACKI
    proj3_title: 'COACKI',
    proj3_type: 'Solution Coopérative',
    proj3_client: 'Coopérative Agricole du Kivu',
    proj3_problem: "La coopérative gérait adhésions, ventes et production sur papier, rendant impossible tout suivi fiable.",
    proj3_solution: 'Application web sur mesure : gestion des membres, traçabilité des récoltes, tableau de bord dirigeants.',
    // Project: Scholaris
    proj4_title: 'Scholaris',
    proj4_type: 'Application de Gestion Scolaire',
    proj4_client: 'Établissements Scolaires',
    proj4_problem: "Les écoles manquaient d'un outil centralisé pour élèves, notes, absences et communication parents-enseignants.",
    proj4_solution: 'Plateforme complète : inscriptions, bulletins numériques, suivi des présences et messagerie intégrée.',

    // ── WhyMe ──
    why_label: 'Pourquoi moi',
    why_title: 'Pas juste un développeur.',
    why_title2: 'Un partenaire technique.',
    why_subtitle: "Il existe des milliers de développeurs compétents. Ce qui fait la différence, c'est la capacité à comprendre votre réalité avant d'écrire la première ligne.",
    why1_title: 'Je parle les deux langages',
    why1_body: "Technique avec les développeurs. Terrain avec les directeurs d'école, les responsables de coopératives, PMEs et les coordinateurs d'ASBL et Organisations. Je traduis un problème métier en solution logicielle sans perdre personne en chemin.",
    why2_title: "J'ai aidé une coopérative à passer du cahier au numérique",
    why2_body: "COACKI n'avait aucun outil de suivi. Aujourd'hui, les responsables voient en temps réel les stocks, les membres actifs et les ventes. Ce n'est pas juste du code c'est un changement de méthode de travail.",
    why3_title: "Les écoles, je les connais de l'intérieur",
    why3_body: "Scholaris est né de conversations avec des directeurs d'établissements. Chaque fonctionnalité répond à un problème réel : bulletins perdus, absences non tracées, communication parents-enseignants inexistante.",
    why4_title: 'Adaptabilité, pas rigidité',
    why4_body: "Chaque organisation a ses contraintes : budget limité, personnel non technique, connexion Internet instable. Je conçois en tenant compte de ces réalités dès le départ, pas comme une option tardive.",
    why5_title: 'Collaboration prouvée',
    why5_body: "Plusieurs projets ont été menés en binôme avec John Moka. Travailler en équipe, synchroniser le code, respecter des deadlines, ce sont des compétences que je pratique, pas que j'affiche.",
    why6_title: 'Engagement au-delà de la livraison',
    why6_body: "Je reste disponible après la mise en production. Une organisation qui dépend d'un outil numérique ne peut pas se permettre de rester bloquée. Je l'ai toujours su, et je l'applique.",
    why_testimonials_label: 'Témoignages',
    why_testimonials_text: 'Les retours clients sont en cours de collecte. Ils seront publiés ici prochainement.',

    // ── Services ──
    services_label: 'Services',
    services_title: 'Ce que je peux faire pour vous',
    services_subtitle: 'Des solutions pensées pour des contextes réels, pas des templates génériques. Chaque engagement commence par une discussion sur votre situation.',
    svc1_title: 'Gestion scolaire',
    svc1_desc: "Application complète pour établissements : inscriptions, bulletins numériques, suivi des présences, communication parents-enseignants et tableaux de bord directeurs.",
    svc1_h1: 'Inscriptions & dossiers élèves', svc1_h2: 'Bulletins et relevés de notes', svc1_h3: 'Suivi des absences', svc1_h4: 'Portail parents',
    svc2_title: 'Solutions pour Coopératives Agricoles',
    svc2_desc: "Outils sur mesure pour passer du cahier au numérique : gestion des membres, traçabilité des récoltes et intrants, suivi des ventes et des paiements.",
    svc2_h1: 'Registre des membres & adhésions', svc2_h2: 'Traçabilité des récoltes', svc2_h3: 'Gestion des ventes', svc2_h4: 'Rapports dirigeants',
    svc3_title: 'Sites ASBL & Organisations',
    svc3_desc: "Sites institutionnels ou vitrine pour organisations à but non lucratif, fondations et personnes physiques. Clarté de message, accessibilité et facilité de mise à jour.",
    svc3_h1: 'Site vitrine ou institutionnel', svc3_h2: 'Formulaires et collecte de dons', svc3_h3: 'SEO et accessibilité', svc3_h4: 'Maintenance incluse',
    svc4_title: 'Audit de code & optimisation',
    svc4_desc: "Votre application existe mais est lente, instable ou difficile à maintenir ? J'audite le code, identifie les points critiques et propose un plan d'amélioration concret.",
    svc4_h1: 'Revue de code et sécurité', svc4_h2: 'Optimisation des performances', svc4_h3: 'Refactoring ciblé', svc4_h4: 'Rapport actionnable',
    services_cta_title: 'Un projet en tête ?',
    services_cta_subtitle: 'Décrivez-moi votre situation même vaguement. On verra ensemble ce qui est faisable.',
    services_cta_btn: 'Discutons-en',

    // ── Contact ──
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
    contact_person_role: 'Développeur Fullstack · Bukavu, RDC',
    // Subjects
    subj1: 'Projet de gestion Scolaire',
    subj2: 'Site ou Solution pour une PME',
    subj3: 'Solution pour Coopérative Agricole',
    subj4: 'Site ASBL ou organisation',
    subj5: 'Audit de code / optimisation',
    subj6: 'Opportunité CDI / CDD',
    subj7: 'Autre',

    // ── Footer ──
    footer_built: 'Développeur fullstack basé à Bukavu, spécialisé dans les solutions pour Ecoles, PMEs, Coopératives et Organisations.',
    footer_nav: 'Navigation',
    footer_networks: 'Réseaux',
    footer_rights: 'Tous droits réservés.',
    footer_designed: 'Conçu et développé par',

    // ── WhatsApp messages ──
    wa_msg1: "Bonjour Lucien, j'ai vu votre portfolio et j'aimerais discuter d'un projet de développement.",
    wa_msg2: "Salut Lucien, je souhaiterais en savoir plus sur vos solutions sur mesure.",
    wa_msg3: "Bonjour Lucien, j'aimerais avoir un échange concernant une opportunité de collaboration.",
    wa_msg4: "Bonjour Lucien Amani, je souhaite discuter d'un projet web pour mon organisation.",
    wa_msg5: "Bonjour, j'aimerais obtenir un devis pour un projet de développement de logiciel.",
  },

  en: {
    // ── Navbar ──
    nav_home: 'Home',
    nav_projects: 'Projects',
    nav_why: 'Why me',
    nav_services: 'Services',
    nav_contact: 'Contact',
    nav_contact_btn: 'Contact me',

    // ── Hero ──
    hero_location: 'Bukavu, Democratic Republic of Congo',
    hero_role: 'Fullstack Developer',
    hero_tagline: "I don't deliver code.",
    hero_tagline2: 'I deliver solutions.',
    hero_desc: "Born in Bukavu, trained at the Official University of Bukavu, I build software that solves real problems for organizations, schools, SMEs, agricultural cooperatives and individuals who deserve better than generic tools.",
    hero_cta_projects: 'See my projects',
    hero_cta_contact: 'Contact me',
    hero_available: 'Available',
    hero_photo_hint: 'Click thumbnails to explore my journey in photos',
    hero_availability: 'Full-time · Contract · Freelance',
    hero_img1_caption: 'Lucien Amani Bahogwerhe',
    hero_img1_alt: 'Lucien Amani - Main photo',
    hero_img2_caption: 'Official University of Bukavu',
    hero_img2_alt: 'Lucien Amani at UOB',
    hero_img3_caption: 'Work at the computer lab',
    hero_img3_alt: 'Lucien at the Laboratory',
    hero_img4_caption: 'Fullstack Developer',
    hero_img4_alt: 'Lucien Amani - Portrait',
    hero_thumbnail_alt: 'Thumbnail',

    // ── Portfolio ──
    portfolio_label: 'Projects',
    portfolio_title: 'What I have built, and for whom',
    portfolio_subtitle: "Every project starts from a real field problem. I always begin by understanding the organization before opening a code editor.",
    portfolio_problem: 'Problem',
    portfolio_solution_label: 'Solution delivered',
    portfolio_collab: 'In collaboration with',
    portfolio_github: 'View on GitHub',
    portfolio_confidential: 'Confidential',
    portfolio_public: 'Public',
    proj1_title: 'Dynamique Samy Magadju - Wema ni Hakiba',
    proj1_type: 'NGO Website',
    proj1_client: 'Non-profit organization',
    proj1_problem: "The organization needed a clear digital presence to communicate its mission and mobilize support.",
    proj1_solution: "Dynamic showcase website presenting the NGO's activities, values and calls to action.",
    proj2_title: 'Umoja ni Nguvu Foundation',
    proj2_type: 'Institutional website',
    proj2_client: 'Foundation / NGO',
    proj2_problem: "The foundation lacked a digital tool to present its programs and build credibility with partners.",
    proj2_solution: 'Structured institutional website with program pages, team section and secure contact form.',
    proj3_title: 'COACKI',
    proj3_type: 'Cooperative Solution',
    proj3_client: 'Agricultural Cooperative of Kivu',
    proj3_problem: "The cooperative managed memberships, sales and production on paper, making reliable tracking impossible.",
    proj3_solution: 'Custom web application: member management, harvest traceability, executive dashboard.',
    proj4_title: 'Scholaris',
    proj4_type: 'School Management Application',
    proj4_client: 'Educational Institutions',
    proj4_problem: "Schools lacked a centralized tool for students, grades, absences and parent-teacher communication.",
    proj4_solution: 'Full platform: registrations, digital report cards, attendance tracking and integrated messaging.',

    // ── WhyMe ──
    why_label: 'Why me',
    why_title: 'Not just a developer.',
    why_title2: 'A technical partner.',
    why_subtitle: "There are thousands of skilled developers. What makes the difference is the ability to understand your reality before writing the first line.",
    why1_title: 'I speak both languages',
    why1_body: "Technical with developers. Field language with school principals, cooperative managers, SMEs and NGO coordinators. I translate a business problem into a software solution without losing anyone along the way.",
    why2_title: 'I helped a cooperative go from paper to digital',
    why2_body: "COACKI had no tracking tool. Today, managers see in real time: stocks, active members and sales. It's not just code — it's a change in working method.",
    why3_title: 'I know schools from the inside',
    why3_body: "Scholaris was born from conversations with school principals. Every feature addresses a real problem: lost report cards, untracked absences, non-existent parent-teacher communication.",
    why4_title: 'Adaptability, not rigidity',
    why4_body: "Every organization has its constraints: limited budget, non-technical staff, unstable internet connection. I design with these realities in mind from the start, not as a late option.",
    why5_title: 'Proven collaboration',
    why5_body: "Several projects were led in tandem with John Moka. Working in a team, synchronizing code, meeting deadlines — these are skills I practice, not just display.",
    why6_title: 'Commitment beyond delivery',
    why6_body: "I remain available after going live. An organization that depends on a digital tool cannot afford to stay stuck. I have always known this, and I apply it.",
    why_testimonials_label: 'Testimonials',
    why_testimonials_text: 'Client feedback is being collected. It will be published here soon.',

    // ── Services ──
    services_label: 'Services',
    services_title: 'What I can do for you',
    services_subtitle: 'Solutions designed for real contexts, not generic templates. Every engagement starts with a discussion about your situation.',
    svc1_title: 'School Management',
    svc1_desc: "Complete application for institutions: registrations, digital report cards, attendance tracking, parent-teacher communication and principal dashboards.",
    svc1_h1: 'Registrations & student records', svc1_h2: 'Report cards and transcripts', svc1_h3: 'Absence tracking', svc1_h4: 'Parent portal',
    svc2_title: 'Agricultural Cooperative Solutions',
    svc2_desc: "Custom tools to go from paper to digital: member management, harvest and input traceability, sales and payment tracking.",
    svc2_h1: 'Member registry & memberships', svc2_h2: 'Harvest traceability', svc2_h3: 'Sales management', svc2_h4: 'Executive reports',
    svc3_title: 'NGO & Organization Websites',
    svc3_desc: "Institutional or showcase websites for non-profit organizations, foundations and individuals. Clear messaging, accessibility and ease of update.",
    svc3_h1: 'Showcase or institutional site', svc3_h2: 'Forms and donation collection', svc3_h3: 'SEO and accessibility', svc3_h4: 'Maintenance included',
    svc4_title: 'Code Audit & Optimization',
    svc4_desc: "Your application exists but is slow, unstable or hard to maintain? I audit the code, identify critical points and propose a concrete improvement plan.",
    svc4_h1: 'Code review and security', svc4_h2: 'Performance optimization', svc4_h3: 'Targeted refactoring', svc4_h4: 'Actionable report',
    services_cta_title: 'Have a project in mind?',
    services_cta_subtitle: 'Describe your situation, even vaguely. We will see together what is feasible.',
    services_cta_btn: "Let's discuss",

    // ── Contact ──
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
    contact_person_role: 'Fullstack Developer · Bukavu, DRC',
    subj1: 'School management project',
    subj2: 'Website or solution for an SME',
    subj3: 'Solution for an agricultural cooperative',
    subj4: 'NGO or organization website',
    subj5: 'Code audit / optimization',
    subj6: 'Full-time / contract opportunity',
    subj7: 'Other',

    // ── Footer ──
    footer_built: 'Fullstack developer based in Bukavu, specialized in solutions for Schools, SMEs, Cooperatives and Organizations.',
    footer_nav: 'Navigation',
    footer_networks: 'Networks',
    footer_rights: 'All rights reserved.',
    footer_designed: 'Designed and developed by',

    // ── WhatsApp messages ──
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

  const t = (key) => TRANSLATIONS[lang][key] ?? TRANSLATIONS['fr'][key] ?? key

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
