import { Github, Linkedin, Twitter } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { WhatsAppIcon, FacebookIcon, openWhatsApp } from '../utils/social'

const NAV = [
  { labelKey: 'nav_home',     href: '#accueil' },
  { labelKey: 'nav_projects', href: '#projets' },
  { labelKey: 'nav_why',      href: '#pourquoi' },
  { labelKey: 'nav_services', href: '#services' },
  { labelKey: 'nav_contact',  href: '#contact' },
]

export default function Footer({ onPrivacyClick }) {
  const { t, lang } = useLang()
  const year = new Date().getFullYear()

  const SOCIAL = [
    { id: 'footer-github',    label: 'GitHub',    href: 'https://github.com/lucien-amani',                     icon: Github },
    { id: 'footer-linkedin',  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/lucius-amani-333540353/', icon: Linkedin },
    { id: 'footer-twitter',   label: 'Twitter',   href: 'https://x.com/LucienAman29545',                      icon: Twitter },
    { id: 'footer-facebook',  label: 'Facebook',  href: 'https://www.facebook.com/luciusamani1',               icon: FacebookIcon },
    {
      id: 'footer-whatsapp', label: 'WhatsApp', href: '#', icon: WhatsAppIcon,
      onClick: (e) => { e.preventDefault(); openWhatsApp(lang) }
    },
  ]

  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-12 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="space-y-2">
            <a href="#accueil" className="font-display font-bold text-xl text-zinc-900 dark:text-white">
              Lucien Amani<span className="text-violet-600 dark:text-violet-400">.</span>
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-xs">
              {t('footer_built')}
            </p>
          </div>

          {/* Nav */}
          <nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3">
              {t('footer_nav')}
            </p>
            <ul className="space-y-2">
              {NAV.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3">
              {t('footer_networks')}
            </p>
            <div className="flex gap-2 flex-wrap">
              {SOCIAL.map(s => {
                const Icon = s.icon
                return (
                  <a
                    key={s.id}
                    id={s.id}
                    href={s.href}
                    onClick={s.onClick}
                    target={s.onClick ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="p-2.5 rounded-xl border border-zinc-100 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-200 dark:hover:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400 dark:text-zinc-600">
          <p>© {year} Lucien Amani Bahogwerhe. {t('footer_rights')}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onPrivacyClick}
              className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors underline underline-offset-2"
            >
              {t('cookie_learn_more')}
            </button>
            <p>{t('footer_designed')}{' '}<span className="text-violet-500 dark:text-violet-400 font-medium">Lucien Amani</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
