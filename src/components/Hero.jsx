import { useState } from 'react'
import { ArrowDown, Github, Linkedin, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import profilImg    from '../assets/Profil_img.jpg'
import lucienAmani from '../assets/lucien_amani.jpg'
import lucienUob   from '../assets/lucien-uob.jpg'
import lucienLabo  from '../assets/lucien_au_labo.jpg'

const IMAGES = [
  { src: profilImg,    alt: 'Lucien Amani - Photo principale', caption: 'Lucien Amani Bahogwerhe' },
  { src: lucienUob,    alt: 'Lucien Amani à l UOB',           caption: 'Université Officielle de Bukavu' },
  { src: lucienLabo,   alt: 'Lucien au laboratoire',          caption: 'Travail au laboratoire informatique' },
  { src: lucienAmani,  alt: 'Lucien Amani - Portrait',        caption: 'Développeur Fullstack' },
]

const GoIcon = () => (
  <svg viewBox="0 0 40 16" width="36" height="14" aria-label="Go">
    <text x="0" y="13" fontFamily="Arial Black,Arial,sans-serif" fontWeight="900" fontSize="14" fill="#00ADD8">Go</text>
  </svg>
)
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-label="React">
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
    <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10.5" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
  </svg>
)
const PhpIcon = () => (
  <svg viewBox="0 0 50 18" width="44" height="16" aria-label="PHP">
    <text x="1" y="14" fontFamily="Arial Black,Arial,sans-serif" fontWeight="900" fontSize="14" fill="#8993BE">PHP</text>
  </svg>
)
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-label="Python">
    <path d="M12 2C9.8 2 8 3.3 8 5v2h4v1H6C4.3 8 3 9.8 3 12s1.3 4 3 4h1v-2.5c0-1.5 1.3-2.5 3-2.5h4c1.5 0 3-1 3-2.5V5c0-1.7-1.8-3-4-3zm-1.5 2a.75.75 0 110 1.5.75.75 0 010-1.5z" fill="#3776AB"/>
    <path d="M12 22c2.2 0 4-1.3 4-3v-2h-4v-1h6c1.7 0 3-1.8 3-4s-1.3-4-3-4h-1v2.5c0 1.5-1.3 2.5-3 2.5H10c-1.5 0-3 1-3 2.5V19c0 1.7 1.8 3 4 3zm1.5-2a.75.75 0 110-1.5.75.75 0 010 1.5z" fill="#FFD43B"/>
  </svg>
)
const NodeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-label="Node.js">
    <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" fill="#339933" opacity=".15" stroke="#339933" strokeWidth="1.5"/>
    <text x="5.5" y="15" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="6.5" fill="#339933">JS</text>
  </svg>
)

const STACK = [
  { name: 'Go',      Icon: GoIcon,     bg: 'bg-sky-50 dark:bg-sky-950/30',    border: 'border-sky-200 dark:border-sky-800'    },
  { name: 'React',   Icon: ReactIcon,  bg: 'bg-cyan-50 dark:bg-cyan-950/30',  border: 'border-cyan-200 dark:border-cyan-800'  },
  { name: 'PHP',     Icon: PhpIcon,    bg: 'bg-indigo-50 dark:bg-indigo-950/30', border: 'border-indigo-200 dark:border-indigo-800' },
  { name: 'Python',  Icon: PythonIcon, bg: 'bg-blue-50 dark:bg-blue-950/30',  border: 'border-blue-200 dark:border-blue-800'  },
  { name: 'Node.js', Icon: NodeIcon,   bg: 'bg-green-50 dark:bg-green-950/30',border: 'border-green-200 dark:border-green-800'},
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % IMAGES.length)
  }

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + IMAGES.length) % IMAGES.length)
  }

  return (
    <section id="accueil" className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center py-20">

        {/* ── Left content: Info (Grid spans 7 cols) ── */}
        <div className="lg:col-span-7 space-y-7">
          <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-xs font-medium">
            <MapPin size={12} />
            Bukavu, République Démocratique du Congo
          </div>

          <div className="animate-fade-up delay-100 space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Développeur Fullstack
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-zinc-900 dark:text-white text-balance">
              Je ne livre pas du code.
              <br />
              <span className="text-violet-600 dark:text-violet-400">Je livre des solutions.</span>
            </h1>
          </div>

          <p className="animate-fade-up delay-200 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg text-balance">
            Né à Bukavu, formé à l&apos;Université Officielle, je construis des logiciels qui résolvent
            de vrais problèmes — pour les écoles, les coopératives agricoles et les organisations
            qui méritent mieux que des outils génériques.
          </p>

          {/* Language tech stack badges */}
          <div className="animate-fade-up delay-300 flex flex-wrap gap-2">
            {STACK.map(({ name, Icon, bg, border }) => (
              <div
                key={name}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${bg} border ${border} shadow-sm`}
              >
                <Icon />
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{name}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
            <a
              href="#projets"
              id="cta-projets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors"
            >
              Voir mes projets
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              id="cta-contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-violet-400 dark:hover:border-violet-600 text-zinc-700 dark:text-zinc-300 font-medium transition-colors"
            >
              Me contacter
            </a>
          </div>

          {/* Social */}
          <div className="animate-fade-up delay-500 flex items-center gap-3">
            <a href="https://github.com/lucien-amani" target="_blank" rel="noopener noreferrer" id="link-github"
              aria-label="GitHub"
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/lucius-amani-333540353/" target="_blank" rel="noopener noreferrer" id="link-linkedin"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <Linkedin size={20} />
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-500">CDI · CDD · Freelance</span>
          </div>
        </div>

        {/* ── Right content: Premium Interactive Photo Explorer (Grid spans 5 cols) ── */}
        <div className="lg:col-span-5 w-full flex flex-col items-center">
          {/* Main active image container */}
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-violet-200 dark:border-violet-800 shadow-2xl bg-zinc-100 dark:bg-zinc-900 group">
            <img
              src={IMAGES[activeIndex].src}
              alt={IMAGES[activeIndex].alt}
              className="w-full h-full object-cover object-top transition-all duration-500 ease-in-out scale-100 group-hover:scale-105"
            />
            {/* Dark gradient overlay for caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12 flex flex-col justify-end">
              <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-1">
                {IMAGES[activeIndex].caption}
              </p>
              <p className="text-white text-sm font-medium opacity-90">
                {IMAGES[activeIndex].alt}
              </p>
            </div>

            {/* Slide Navigation controls */}
            <div className="absolute top-1/2 -translate-y-1/2 inset-x-3 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handlePrev}
                aria-label="Précédent"
                className="w-8 h-8 rounded-full bg-white/80 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 text-zinc-800 dark:text-white flex items-center justify-center shadow-lg transition-transform active:scale-95"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Suivant"
                className="w-8 h-8 rounded-full bg-white/80 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 text-zinc-800 dark:text-white flex items-center justify-center shadow-lg transition-transform active:scale-95"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Floating availability indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/90 text-white text-[10px] font-semibold tracking-wider uppercase shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              Disponible
            </div>
          </div>

          {/* Interactive Thumbnails grid below */}
          <div className="flex gap-3 mt-4 justify-center w-full max-w-[340px]">
            {IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                  activeIndex === idx
                    ? 'border-violet-500 scale-105 shadow-md shadow-violet-500/20'
                    : 'border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt={`Miniature ${idx + 1}`} className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>

          {/* Quick info caption */}
          <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-4 text-center">
            Cliquez sur les miniatures pour explorer mon parcours en photos
          </p>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="flex justify-center pb-8">
        <a href="#projets" className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600 hover:text-violet-500 transition-colors">
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
