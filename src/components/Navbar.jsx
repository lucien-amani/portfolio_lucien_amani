import { useState, useEffect, useRef } from 'react'
import { X, Sun, Moon, Menu } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Projets', href: '#projets' },
  { label: 'Pourquoi moi', href: '#pourquoi' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const drawerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on Escape key
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-stone-50/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-zinc-100 dark:border-zinc-800'
          : 'bg-transparent'
          }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            className="font-display font-bold text-lg tracking-tight text-zinc-900 dark:text-white"
          >
            Lucien AMANI<span className="text-violet-600 dark:text-violet-400">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              id="theme-toggle"
              onClick={toggle}
              aria-label="Basculer le thème"
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors"
            >
              Me contacter
            </a>
            l
            <button
              id="mobile-menu-toggle"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              className="md:hidden p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Right-side slide drawer ── */}
      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-stone-50 dark:bg-zinc-900 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-zinc-100 dark:border-zinc-800">
          <span className="font-display font-bold text-zinc-900 dark:text-white">
            Lucien Amani<span className="text-violet-600 dark:text-violet-400">.</span>
          </span>
          <button
            onClick={close}
            aria-label="Fermer le menu"
            className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              style={{ animationDelay: `${i * 60}ms` }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-violet-50 dark:hover:bg-violet-950/30 hover:text-violet-700 dark:hover:text-violet-300 transition-all ${open ? 'animate-fade-up' : ''
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              {link.label}
            </a>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-6 pb-8 space-y-3">
          <a
            href="#contact"
            onClick={close}
            className="flex items-center justify-center w-full px-4 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors"
          >
            Me contacter
          </a>
          <button
            onClick={toggle}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
            {dark ? 'Mode clair' : 'Mode sombre'}
          </button>
        </div>
      </div>
    </>
  )
}
