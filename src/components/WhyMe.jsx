import { MessageSquare, Users, Sprout, BookOpen, Puzzle, HeartHandshake } from 'lucide-react'

const DIFFERENTIATORS = [
  {
    icon: MessageSquare,
    title: 'Je parle les deux langages',
    body:
      `Technique avec les développeurs. Terrain avec les directeurs d'école, les responsables de coopératives et les coordinateurs d'ASBL. Je traduis un problème métier en solution logicielle sans perdre personne en chemin.`,
  },
  {
    icon: Sprout,
    title: `J'ai aidé une coopérative à passer du cahier au numérique`,
    body:
      `COACK n'avait aucun outil de suivi. Aujourd'hui, les responsables voient en temps réel les stocks, les membres actifs et les ventes. Ce n'est pas juste du code — c'est un changement de méthode de travail.`,
  },
  {
    icon: BookOpen,
    title: `Les écoles, je les connais de l'intérieur`,
    body:
      `Scholaris est né de conversations avec des directeurs d'établissements. Chaque fonctionnalité répond à un problème réel : bulletins perdus, absences non tracées, communication parents-enseignants inexistante.`,
  },
  {
    icon: Puzzle,
    title: 'Adaptabilité, pas rigidité',
    body:
      'Chaque organisation a ses contraintes : budget limité, personnel non technique, connexion Internet instable. Je conçois en tenant compte de ces réalités dès le départ, pas comme une option tardive.',
  },
  {
    icon: Users,
    title: 'Collaboration prouvée',
    body:
      `Plusieurs projets ont été menés en binôme avec John Moka. Travailler en équipe, synchroniser le code, respecter des deadlines — ce sont des compétences que je pratique, pas que j'affiche.`,
  },
  {
    icon: HeartHandshake,
    title: 'Engagement au-delà de la livraison',
    body:
      `Je reste disponible après la mise en production. Une organisation qui dépend d'un outil numérique ne peut pas se permettre de rester bloquée. Je l'ai toujours su, et je l'applique.`,
  },
]

export default function WhyMe() {
  return (
    <section id="pourquoi" className="py-24 px-6 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
            Pourquoi moi
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Pas juste un développeur.<br />
            <span className="text-violet-600 dark:text-violet-400">Un partenaire technique.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Il existe des milliers de développeurs compétents. Ce qui fait la différence,
            c'est la capacité à comprendre votre réalité avant d'écrire la première ligne.
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
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.body}
                </p>
              </div>
            )
          })}
        </div>

        {/* Testimonials placeholder */}
        <div className="mt-16 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 p-8 text-center">
          <p className="text-sm text-zinc-400 dark:text-zinc-600 mb-1 uppercase tracking-widest font-medium">
            Témoignages
          </p>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm max-w-md mx-auto">
            Les retours clients sont en cours de collecte. Ils seront publiés ici prochainement.
          </p>
        </div>
      </div>
    </section>
  )
}
