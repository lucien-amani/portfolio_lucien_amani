import { GraduationCap, Sprout, Building2, Code2, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    id: 'gestion-scolaire',
    icon: GraduationCap,
    title: 'Gestion scolaire',
    description:
      'Application complète pour établissements : inscriptions, bulletins numériques, suivi des présences, communication parents-enseignants et tableaux de bord directeurs.',
    highlights: ['Inscriptions & dossiers élèves', 'Bulletins et relevés de notes', 'Suivi des absences', 'Portail parents'],
  },
  {
    id: 'cooperative-agricole',
    icon: Sprout,
    title: 'Solutions pour Coopératives Agricoles',
    description:
      'Outils sur mesure pour passer du cahier au numérique : gestion des membres, traçabilité des récoltes et intrants, suivi des ventes et des paiements.',
    highlights: ['Registre des membres & adhésions', 'Traçabilité des récoltes', 'Gestion des ventes', 'Rapports dirigeants'],
  },
  {
    id: 'site-asbl',
    icon: Building2,
    title: 'Sites ASBL & Organisations',
    description:
      'Sites institutionnels ou vitrine pour organisations à but non lucratif, fondations et personnes physiques. Clarté de message, accessibilité et facilité de mise à jour.',
    highlights: ['Site vitrine ou institutionnel', 'Formulaires et collecte de dons', 'SEO et accessibilité', 'Maintenance incluse'],
  },
  {
    id: 'audit-optimisation',
    icon: Code2,
    title: 'Audit de code & optimisation',
    description:
      `Votre application existe mais est lente, instable ou difficile à maintenir ? J'audite le code, identifie les points critiques et propose un plan d'amélioration concret.`,
    highlights: ['Revue de code et sécurité', 'Optimisation des performances', 'Refactoring ciblé', 'Rapport actionnable'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
            Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Ce que je peux faire pour vous
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Des solutions pensées pour des contextes réels, pas des templates génériques.
            Chaque engagement commence par une discussion sur votre situation.
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
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-950/50 flex items-center justify-center mb-5 group-hover:bg-violet-200 dark:group-hover:bg-violet-900/40 transition-colors">
                  <Icon size={22} className="text-violet-600 dark:text-violet-400" />
                </div>

                {/* Title & desc */}
                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5">
                  {service.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 dark:bg-violet-500 flex-shrink-0" />
                      {h}
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
              Un projet en tête ?
            </p>
            <p className="text-violet-200 text-sm">
              Décrivez-moi votre situation même vaguement. On verra ensemble ce qui est faisable.
            </p>
          </div>
          <a
            href="#contact"
            id="services-cta"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-violet-700 font-semibold text-sm hover:bg-violet-50 transition-colors"
          >
            Discutons-en <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
