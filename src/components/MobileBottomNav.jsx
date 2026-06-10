import { Home, FolderOpen, HelpCircle, Briefcase, Mail } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const ITEMS = [
  { key: 'home',     icon: Home,       href: '#accueil',  labelKey: 'nav_home' },
  { key: 'projects', icon: FolderOpen, href: '#projets',  labelKey: 'nav_projects' },
  { key: 'why',      icon: HelpCircle, href: '#pourquoi', labelKey: 'nav_why' },
  { key: 'services', icon: Briefcase,  href: '#services', labelKey: 'nav_services' },
  { key: 'contact',  icon: Mail,       href: '#contact',  labelKey: 'nav_contact' },
]

export default function MobileBottomNav() {
  const { t } = useLang()

  return (
    <nav
      aria-label="Navigation mobile"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden"
      style={{
        background: 'var(--bottom-nav-bg)',
        borderTop: '1px solid var(--bottom-nav-border)',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.10)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-stretch justify-around h-16 px-1">
        {ITEMS.map(({ key, icon: Icon, href, labelKey }) => (
          <a
            key={key}
            href={href}
            id={`bottom-nav-${key}`}
            className="bottom-nav-item group flex flex-col items-center justify-center flex-1 gap-0.5 px-1 pt-2 pb-1 rounded-xl mx-0.5 my-1.5 text-center transition-all duration-200 relative overflow-hidden"
          >
            {/* Active indicator pill */}
            <span className="bottom-nav-pill absolute top-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-violet-500 opacity-0 scale-x-0 transition-all duration-300 group-[.active]:opacity-100 group-[.active]:scale-x-100" />
            <Icon
              size={22}
              strokeWidth={1.8}
              className="bottom-nav-icon transition-all duration-200 text-zinc-400 dark:text-zinc-500 group-hover:text-violet-500 dark:group-hover:text-violet-400"
            />
            <span className="text-[10px] font-medium leading-none bottom-nav-label text-zinc-500 dark:text-zinc-500 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors duration-200 truncate w-full text-center">
              {t(labelKey)}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}
