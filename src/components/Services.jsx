import { GraduationCap, Sprout, Building2, Code2, ArrowRight } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

export default function Services() {
  const { t } = useLang()

  const SERVICES = [
    {
      id: 'gestion-scolaire',
      icon: GraduationCap,
      titleKey: 'svc1_title', descKey: 'svc1_desc',
      highlightKeys: ['svc1_h1', 'svc1_h2', 'svc1_h3', 'svc1_h4'],
    },
    {
      id: 'cooperative-agricole',
      icon: Sprout,
      titleKey: 'svc2_title', descKey: 'svc2_desc',
      highlightKeys: ['svc2_h1', 'svc2_h2', 'svc2_h3', 'svc2_h4'],
    },
    {
      id: 'site-asbl',
      icon: Building2,
      titleKey: 'svc3_title', descKey: 'svc3_desc',
      highlightKeys: ['svc3_h1', 'svc3_h2', 'svc3_h3', 'svc3_h4'],
    },
    {
      id: 'audit-optimisation',
      icon: Code2,
      titleKey: 'svc4_title', descKey: 'svc4_desc',
      highlightKeys: ['svc4_h1', 'svc4_h2', 'svc4_h3', 'svc4_h4'],
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
            {t('services_label')}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {t('services_title')}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t('services_subtitle')}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {SERVICES.map(service => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-950 p-6 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-950/50 flex items-center justify-center mb-5 group-hover:bg-violet-200 dark:group-hover:bg-violet-900/40 transition-colors">
                  <Icon size={22} className="text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 flex-1">
                  {t(service.descKey)}
                </p>
                <ul className="space-y-1.5">
                  {service.highlightKeys.map(hk => (
                    <li key={hk} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 dark:bg-violet-500 flex-shrink-0" />
                      {t(hk)}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* CTA band */}
        <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-xl text-white mb-1">
              {t('services_cta_title')}
            </p>
            <p className="text-violet-200 text-sm">
              {t('services_cta_subtitle')}
            </p>
          </div>
          <a href="#contact" id="services-cta"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-violet-700 font-semibold text-sm hover:bg-violet-50 transition-colors">
            {t('services_cta_btn')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
