import { ExternalLink, Lock, Github } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

export default function Portfolio() {
  const { t } = useLang()

  const PROJECTS = [
    {
      id: 'samy-magadju',
      title: t('proj1_title'), type: t('proj1_type'), client: t('proj1_client'),
      problem: t('proj1_problem'), solution: t('proj1_solution'),
      stack: ['PHP', 'Tailwind', 'JavaScript', 'MySQL', 'Shell'],
      status: 'public', link: null, collab: null,
    },
    {
      id: 'umoja-ni-nguvu',
      title: t('proj2_title'), type: t('proj2_type'), client: t('proj2_client'),
      problem: t('proj2_problem'), solution: t('proj2_solution'),
      stack: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'],
      status: 'public', link: null, collab: null,
    },
    {
      id: 'coack',
      title: t('proj3_title'), type: t('proj3_type'), client: t('proj3_client'),
      problem: t('proj3_problem'), solution: t('proj3_solution'),
      stack: ['React', 'MySQL', 'Tailwind CSS'],
      status: 'confidentiel', link: null, collab: 'John Moka',
    },
    {
      id: 'scholaris',
      title: t('proj4_title'), type: t('proj4_type'), client: t('proj4_client'),
      problem: t('proj4_problem'), solution: t('proj4_solution'),
      stack: ['Go', 'React', 'Tailwind', 'SQLite', 'Google Cloud'],
      status: 'public', link: 'https://github.com/lucien-amani/kilimandjaro', collab: 'John Moka',
    },
  ]

  return (
    <section id="projets" className="py-24 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
            {t('portfolio_label')}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {t('portfolio_title')}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t('portfolio_subtitle')}
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
              {/* Type + status */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                  {project.type}
                </span>
                {project.status === 'confidentiel' ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs font-medium">
                    <Lock size={10} /> {t('portfolio_confidential')}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> {t('portfolio_public')}
                  </span>
                )}
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
                    {t('portfolio_problem')}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-600 mb-1">
                    {t('portfolio_solution_label')}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map(s => (
                  <span key={s} className="px-2 py-0.5 rounded-md bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300 text-xs font-medium border border-violet-100 dark:border-violet-800">
                    {s}
                  </span>
                ))}
              </div>

              {/* Footer row */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {project.collab ? (
                  <span className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
                    <Github size={12} /> {t('portfolio_collab')} {project.collab}
                  </span>
                ) : <span />}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    id={`link-project-${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-200 transition-colors">
                    {t('portfolio_github')} <ExternalLink size={12} />
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
