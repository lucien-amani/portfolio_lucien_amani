import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LanguageContext'
import { WhatsAppIcon, FacebookIcon, openWhatsApp } from '../utils/social'

const NAV_LINKS = [
  { labelKey: 'nav_home',     href: '#accueil' },
  { labelKey: 'nav_projects', href: '#projets' },
  { labelKey: 'nav_why',      href: '#pourquoi' },
  { labelKey: 'nav_services', href: '#services' },
  { labelKey: 'nav_contact',  href: '#contact' },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const { lang, t, switchLang } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleWA = (e) => {
    e.preventDefault()
    openWhatsApp(lang)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-zinc-100 dark:border-zinc-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-2">

        {/* ── Logo ── */}
        <a
          href="#accueil"
          className="font-display font-bold text-lg tracking-tight text-zinc-900 dark:text-white shrink-0"
        >
          Lucien Amani<span className="text-violet-600 dark:text-violet-400">.</span>
        </a>

        {/* ── Desktop links (hidden on mobile) ── */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {t(link.labelKey)}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Actions ── */}
        <div className="flex items-center gap-1.5">

          {/* Language toggle */}
          <button
            id="lang-toggle"
            onClick={() => switchLang(lang === 'fr' ? 'en' : 'fr')}
            aria-label="Changer la langue / Switch language"
            className="h-8 px-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:border-violet-400 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200 flex items-center gap-1"
          >
            <span className="text-base leading-none">{lang === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
            <span className="hidden sm:inline uppercase">{lang === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          {/* Theme toggle */}
          <button
            id="theme-toggle"
            onClick={toggle}
            aria-label="Basculer le thème"
            className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* WhatsApp – mobile only quick-action */}
          <a
            href="#"
            id="navbar-whatsapp"
            onClick={handleWA}
            aria-label="WhatsApp"
            className="md:hidden p-2 rounded-lg text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
          >
            <WhatsAppIcon size={19} />
          </a>

          {/* Facebook – mobile only quick-action */}
          <a
            href="https://www.facebook.com/luciusamani1"
            id="navbar-facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="md:hidden p-2 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
          >
            <FacebookIcon size={19} />
          </a>

          {/* Contact CTA – desktop only */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors ml-2"
          >
            {t('nav_contact_btn')}
          </a>
        </div>
      </nav>
    </header>
  )
}
