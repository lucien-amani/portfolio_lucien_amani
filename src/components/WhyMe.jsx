import { MessageSquare, Users, Sprout, BookOpen, Puzzle, HeartHandshake } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

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

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Testimonials placeholder */}
        <div className="mt-16 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 p-8 text-center">
          <p className="text-sm text-zinc-400 dark:text-zinc-600 mb-1 uppercase tracking-widest font-medium">
            {t('why_testimonials_label')}
          </p>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm max-w-md mx-auto">
            {t('why_testimonials_text')}
          </p>
        </div>
      </div>
    </section>
  )
}
