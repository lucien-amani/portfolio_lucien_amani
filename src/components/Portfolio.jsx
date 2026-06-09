import { ExternalLink, Lock, Github } from 'lucide-react'

const PROJECTS = [
  {
    id: 'samy-magadju',
    title: 'Samy Magadju – Wema ni Hakiba',
    type: 'Site ASBL',
    client: 'Organisation à but non lucratif',
    problem:
      "L'organisation avait besoin d'une présence numérique claire pour communiquer sa mission et mobiliser des soutiens.",
    solution: `Site vitrine dynamique présentant les activités, valeurs et appels à l'action de l'ASBL.`,
    stack: ['React', 'Tailwind', 'Node.js'],
    status: 'public',
    link: null,
    collab: null,
  },
  {
    id: 'umoja-ni-nguvu',
    title: 'Umoja ni Nguvu Foundation',
    type: 'Site institutionnel',
    client: 'Fondation / ASBL',
    problem:
      "La fondation manquait d'un outil numérique pour présenter ses programmes et crédibiliser ses actions auprès de partenaires.",
    solution: 'Site institutionnel structuré avec pages programmes, équipe et formulaire de contact sécurisé.',
    stack: ['PHP', 'JavaScript', 'MySQL'],
    status: 'public',
    link: null,
    collab: null,
  },
  {
    id: 'coack',
    title: 'COACK',
    type: 'Solution coopérative',
    client: 'Coopérative Agricole du Kivu',
    problem:
      "La coopérative gérait adhésions, ventes et production sur papier, rendant impossible tout suivi fiable.",
    solution:
      'Application web sur mesure : gestion des membres, traçabilité des récoltes, tableau de bord dirigeants.',
    stack: ['Go', 'React', 'PostgreSQL'],
    status: 'confidentiel',
    link: null,
    collab: 'John Moka',
  },
  {
    id: 'scholaris',
    title: 'Scholaris',
    type: 'Application de gestion scolaire',
    client: 'Établissements scolaires',
    problem:
      "Les écoles manquaient d'un outil centralisé pour élèves, notes, absences et communication parents-enseignants.",
    solution:
      'Plateforme complète : inscriptions, bulletins numériques, suivi des présences et messagerie intégrée.',
    stack: ['Go', 'React', 'Tailwind', 'PostgreSQL'],
    status: 'public',
    link: 'https://github.com/lucien-amani/kilimandjaro',
    collab: 'John Moka',
  },
]

function StatusBadge({ status }) {
  if (status === 'confidentiel') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs font-medium">
        <Lock size={10} />
        Confidentiel
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 text-xs font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
      Public
    </span>
  )
}

export default function Portfolio() {
  return (
    <section id="projets" className="py-24 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
            Projets réalisés
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Ce que j'ai construit, et pour qui
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Chaque projet part d'un vrai problème terrain. Je commence toujours par comprendre
            l'organisation avant d'ouvrir un éditeur de code.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map(project => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="group relative flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-950 p-6 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 hover:shadow-md dark:hover:shadow-violet-950/20"
            >
              {/* Type + status row */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                  {project.type}
                </span>
                <StatusBadge status={project.status} />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-4">{project.client}</p>

              {/* Problem / Solution */}
              <div className="space-y-3 mb-6 flex-1">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-600 mb-1">
                    Problème
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-600 mb-1">
                    Solution livrée
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map(t => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 text-xs font-medium border border-violet-100 dark:border-violet-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {project.collab ? (
                  <span className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
                    <Github size={12} />
                    En collaboration avec {project.collab}
                  </span>
                ) : (
                  <span />
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`link-project-${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-200 transition-colors"
                  >
                    Voir sur GitHub <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
