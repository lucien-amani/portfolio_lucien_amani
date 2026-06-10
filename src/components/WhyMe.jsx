import { MessageSquare, Users, Sprout, BookOpen, Puzzle, HeartHandshake, Quote, Star } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const TESTIMONIAL_KEYS = [
  { n: 't1_name', r: 't1_role', p: 't1_project', tx: 't1_text', stars: 5 },
  { n: 't2_name', r: 't2_role', p: 't2_project', tx: 't2_text', stars: 5 },
  { n: 't3_name', r: 't3_role', p: 't3_project', tx: 't3_text', stars: 5 },
  { n: 't4_name', r: 't4_role', p: 't4_project', tx: 't4_text', stars: 5 },
  { n: 't5_name', r: 't5_role', p: 't5_project', tx: 't5_text', stars: 5 },
]

function TestimonialCard({ nameKey, roleKey, projectKey, textKey, stars, t }) {
  const initials = t(nameKey).split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  return (
    <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-lg dark:hover:shadow-violet-950/20 transition-all duration-300">
      {/* Quote icon */}
      <Quote size={20} className="text-violet-300 dark:text-violet-700 shrink-0" />

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < stars ? 'fill-amber-400 text-amber-400' : 'fill-zinc-200 text-zinc-200 dark:fill-zinc-700 dark:text-zinc-700'}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1 italic">
        "{t(textKey)}"
      </p>

      {/* Project badge */}
      <span className="self-start px-2.5 py-1 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-800 text-violet-600 dark:text-violet-400 text-[10px] font-semibold uppercase tracking-widest">
        {t(projectKey)}
      </span>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-zinc-100 dark:border-zinc-800">
        {/* Avatar with initials */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold tracking-tight">{initials}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-white leading-tight">{t(nameKey)}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-tight">{t(roleKey)}</p>
        </div>
      </div>
    </div>
  )
}

export default function WhyMe() {
  const { t } = useLang()

  const DIFFERENTIATORS = [
    { icon: MessageSquare, titleKey: 'why1_title', bodyKey: 'why1_body' },
    { icon: Sprout,        titleKey: 'why2_title', bodyKey: 'why2_body' },
    { icon: BookOpen,      titleKey: 'why3_title', bodyKey: 'why3_body' },
    { icon: Puzzle,        titleKey: 'why4_title', bodyKey: 'why4_body' },
    { icon: Users,         titleKey: 'why5_title', bodyKey: 'why5_body' },
    { icon: HeartHandshake,titleKey: 'why6_title', bodyKey: 'why6_body' },
  ]

  return (
    <section id="pourquoi" className="py-24 px-6 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
            {t('why_label')}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {t('why_title')}<br />
            <span className="text-violet-600 dark:text-violet-400">{t('why_title2')}</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t('why_subtitle')}
          </p>
        </div>

        {/* Differentiator cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/40 flex items-center justify-center mb-4 group-hover:bg-violet-100 dark:group-hover:bg-violet-950/70 transition-colors">
                  <Icon size={20} className="text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="font-display font-semibold text-base text-zinc-900 dark:text-white mb-2 leading-snug">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {t(item.bodyKey)}
                </p>
              </div>
            )
          })}
        </div>

        {/* ── Testimonials ── */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 shrink-0">
              {t('why_testimonials_label')}
            </p>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>

          {/* Masonry-style grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIAL_KEYS.map((tk, i) => (
              <TestimonialCard
                key={i}
                nameKey={tk.n}
                roleKey={tk.r}
                projectKey={tk.p}
                textKey={tk.tx}
                stars={tk.stars}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
