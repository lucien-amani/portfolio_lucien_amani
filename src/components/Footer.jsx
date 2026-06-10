import { Github, Linkedin, Twitter } from 'lucide-react'

const NAV = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Projets', href: '#projets' },
  { label: 'Pourquoi moi', href: '#pourquoi' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

// const SOCIAL = [
//   { id: 'footer-github', label: 'GitHub', href: 'https://github.com/lucien-amani', icon: Github },
//   { id: 'footer-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucius-amani-333540353/', icon: Linkedin },
//   { id: 'footer-twitter', label: 'Twitter', href: 'https://x.com/LucienAman29545', icon: Twitter }
// ]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-2">
            <a href="#accueil" className="font-display font-bold text-xl text-zinc-900 dark:text-white">
              Lucien Amani<span className="text-violet-600 dark:text-violet-400">.</span>
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-xs">
              Développeur fullstack basé à Bukavu, spécialisé dans les solutions pour Ecoles, PMEs,
              Coopératives et Organisations.
            </p>
          </div>

          {/* Nav */}
          <nav>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3">
              Réseaux
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(s => {
                const Icon = s.icon
                return (
                  <a
                    key={s.id}
                    id={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors"
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
          <p>© {year} Lucien Amani Bahogwerhe. Tous droits réservés.</p>
          <p>
            Conçu et développé par{' '}
            <span className="text-violet-500 dark:text-violet-400 font-medium">Lucien Amani</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
