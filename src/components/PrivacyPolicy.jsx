import { X } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const CONTENT = {
  fr: {
    close_btn: 'Fermer',
    sec1_title: '1. Responsable du traitement',
    sec1_text: 'Ce site est édité par Lucien Amani Bahogwerhe, développeur web fullstack basé à Bukavu, République Démocratique du Congo. Contact : via le formulaire de contact disponible sur ce site.',

    sec2_title: '2. Données collectées',
    sec2_intro: "Lors de l'utilisation du formulaire de contact, nous collectons :",
    sec2_item1: 'Nom complet',
    sec2_item2: 'Adresse e-mail',
    sec2_item3: 'Sujet et message librement rédigé',
    sec2_outro: 'Ces données sont transmises via le service EmailJS et ne sont pas stockées sur nos serveurs.',

    sec3_title: '3. Finalité du traitement',
    sec3_text: 'Les données collectées via le formulaire sont utilisées exclusivement pour répondre à vos demandes de contact ou de collaboration. Elles ne sont ni vendues, ni partagées avec des tiers à des fins commerciales.',

    sec4_title: '4. Politique de cookies',
    sec4_intro: 'Ce site utilise trois catégories de cookies :',
    sec4_cookie1_name: 'Cookies essentiels',
    sec4_cookie1_desc: '   Nécessaires au fonctionnement du site (préférence de thème clair/sombre, préférence de langue, consentement aux cookies). Toujours actifs.',
    sec4_cookie2_name: 'Cookies analytiques',
    sec4_cookie2_desc: "   Permettent de mesurer l'audience du site de façon anonyme. Activables au choix.",
    sec4_cookie3_name: 'Cookies marketing',
    sec4_cookie3_desc: '   Permettent de personnaliser des contenus promotionnels. Désactivés par défaut.',
    sec4_outro: 'Vous pouvez modifier vos préférences à tout moment en rafraîchissant la page après avoir effacé le stockage local de votre navigateur (localStorage).',

    sec5_title: '5. Base légale',
    sec5_text: "Le traitement de vos données repose sur votre consentement explicite (formulaire de contact) et l'intérêt légitime du responsable de traitement (amélioration du service).",

    sec6_title: '6. Durée de conservation',
    sec6_text: "Les données de contact sont conservées pour la durée nécessaire au traitement de votre demande. Les préférences de cookies sont conservées dans votre navigateur jusqu'à ce que vous les effaciez.",

    sec7_title: '7. Vos droits',
    sec7_text: 'Conformément au RGPD et aux lois en vigueur, vous disposez des droits suivants : accès, rectification, effacement, limitation du traitement, portabilité et opposition. Pour exercer ces droits, contactez-nous via le formulaire de contact du site.',

    sec8_title: '8. Services tiers',
    sec8_intro: 'Ce site utilise les services tiers suivants :',
    sec8_item1: 'EmailJS   Envoi des messages du formulaire de contact (politique de confidentialité)',
    sec8_item2: 'Google Fonts   Chargement des polices Inter et Sora (politique de confidentialité)',
    sec8_item3: 'Firebase Hosting   Hébergement du site',

    sec9_title: '9. Modifications',
    sec9_text: 'Cette politique peut être mise à jour à tout moment. La date de dernière modification est : Juin 2026.',
  },
  en: {
    close_btn: 'Close',
    sec1_title: '1. Data Controller',
    sec1_text: 'This website is published by Lucien Amani Bahogwerhe, a fullstack web developer based in Bukavu, Democratic Republic of Congo. Contact: via the contact form available on this site.',

    sec2_title: '2. Collected Data',
    sec2_intro: 'When using the contact form, we collect:',
    sec2_item1: 'Full name',
    sec2_item2: 'Email address',
    sec2_item3: 'Subject and freely written message',
    sec2_outro: 'This data is transmitted via the EmailJS service and is not stored on our servers.',

    sec3_title: '3. Purpose of Processing',
    sec3_text: 'The data collected via the form is used exclusively to respond to your contact or collaboration requests. It is neither sold nor shared with third parties for commercial purposes.',

    sec4_title: '4. Cookie Policy',
    sec4_intro: 'This site uses three categories of cookies:',
    sec4_cookie1_name: 'Essential cookies',
    sec4_cookie1_desc: '   Necessary for the functioning of the site (light/dark theme preference, language preference, cookie consent). Always active.',
    sec4_cookie2_name: 'Analytics cookies',
    sec4_cookie2_desc: '   Allow us to measure the site audience anonymously. Can be activated optionally.',
    sec4_cookie3_name: 'Marketing cookies',
    sec4_cookie3_desc: '   Used to personalize promotional content. Disabled by default.',
    sec4_outro: 'You can modify your preferences at any time by refreshing the page after clearing your browser\'s local storage (localStorage).',

    sec5_title: '5. Legal Basis',
    sec5_text: 'The processing of your data is based on your explicit consent (contact form) and the legitimate interest of the data controller (service improvement).',

    sec6_title: '6. Retention Period',
    sec6_text: 'Contact data is kept for the time necessary to process your request. Cookie preferences are stored in your browser until you clear them.',

    sec7_title: '7. Your Rights',
    sec7_text: 'In accordance with the GDPR and applicable laws, you have the following rights: access, rectification, erasure, restriction of processing, portability, and objection. To exercise these rights, please contact us via the website contact form.',

    sec8_title: '8. Third-party Services',
    sec8_intro: 'This site uses the following third-party services:',
    sec8_item1: 'EmailJS   Sending contact form messages (privacy policy)',
    sec8_item2: 'Google Fonts   Loading Inter and Sora fonts (privacy policy)',
    sec8_item3: 'Firebase Hosting   Website hosting',

    sec9_title: '9. Changes',
    sec9_text: 'This policy may be updated at any time. The date of last modification is: June 2026.',
  }
}

export default function PrivacyPolicy({ onClose }) {
  const { t, lang } = useLang()

  const content = CONTENT[lang] || CONTENT['fr']

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4"
      role="dialog" aria-modal="true"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-2xl overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 shrink-0">
          <h2 className="font-display font-bold text-zinc-900 dark:text-white text-lg">
            {t('privacy_title')}
          </h2>
          <button
            onClick={onClose}
            aria-label={content.close_btn}
            className="p-2 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 space-y-6 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">

          <section className="space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-base">{content.sec1_title}</h3>
            <p>{content.sec1_text}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-base">{content.sec2_title}</h3>
            <p>{content.sec2_intro}</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>{content.sec2_item1}</li>
              <li>{content.sec2_item2}</li>
              <li>{content.sec2_item3}</li>
            </ul>
            <p>{content.sec2_outro}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-base">{content.sec3_title}</h3>
            <p>{content.sec3_text}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-base">{content.sec4_title}</h3>
            <p>{content.sec4_intro}</p>
            <ul className="space-y-2 pl-2">
              <li>
                <strong className="text-zinc-900 dark:text-white">{content.sec4_cookie1_name}</strong>{content.sec4_cookie1_desc}
              </li>
              <li>
                <strong className="text-zinc-900 dark:text-white">{content.sec4_cookie2_name}</strong>{content.sec4_cookie2_desc}
              </li>
              <li>
                <strong className="text-zinc-900 dark:text-white">{content.sec4_cookie3_name}</strong>{content.sec4_cookie3_desc}
              </li>
            </ul>
            <p>{content.sec4_outro}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-base">{content.sec5_title}</h3>
            <p>{content.sec5_text}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-base">{content.sec6_title}</h3>
            <p>{content.sec6_text}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-base">{content.sec7_title}</h3>
            <p>{content.sec7_text}</p>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-base">{content.sec8_title}</h3>
            <p>{content.sec8_intro}</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                <strong className="text-zinc-900 dark:text-white">EmailJS</strong>   {lang === 'fr' ? "Envoi des messages du formulaire de contact" : "Sending contact form messages"} (<a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline">{lang === 'fr' ? "politique de confidentialité" : "privacy policy"}</a>)
              </li>
              <li>
                <strong className="text-zinc-900 dark:text-white">Google Fonts</strong>   {lang === 'fr' ? "Chargement des polices Inter et Sora" : "Loading Inter and Sora fonts"} (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline">{lang === 'fr' ? "politique de confidentialité" : "privacy policy"}</a>)
              </li>
              <li>
                <strong className="text-zinc-900 dark:text-white">Firebase Hosting</strong>   {lang === 'fr' ? "Hébergement du site" : "Website hosting"}
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-base">{content.sec9_title}</h3>
            <p>{content.sec9_text}</p>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-zinc-100 dark:border-zinc-800 shrink-0">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors"
          >
            {content.close_btn}
          </button>
        </div>
      </div>
    </div>
  )
}
