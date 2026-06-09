import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react'

/* ────────────────────────────────────────
   EmailJS config – replace with your values
   from https://dashboard.emailjs.com/
──────────────────────────────────────── */
const EJS_SERVICE_ID = 'service_l4tnwzs'
const EJS_TEMPLATE_ID = 'template_0e5q7gc'
const EJS_PUBLIC_KEY = 'xKY36bB_JGiUQPWG1'

const SOCIAL = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/lucien-amani', Icon: Github },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucius-amani-333540353/', Icon: Linkedin },
  { id: 'twitter', label: 'Twitter', href: 'https://x.com/LucienAman29545', Icon: Twitter },
]

const SUBJECTS = [
  'Projet de gestion scolaire',
  'Solution pour coopérative agricole',
  'Site ASBL ou organisation',
  'Audit de code / optimisation',
  'Opportunité CDI / CDD',
  'Autre',
]

/* ── Custom animated select ── */
function CustomSelect({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const select = subject => { onChange(subject); setOpen(false) }

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        id="contact-subject-btn"
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border text-sm text-left transition-all duration-150
          ${open
            ? 'border-violet-500 ring-2 ring-violet-500/20 bg-white dark:bg-zinc-900'
            : 'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:border-violet-400 dark:hover:border-violet-600'
          }
          ${value ? 'text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-500'}`}
      >
        <span>{value || 'Choisir un sujet…'}</span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-zinc-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          role="listbox"
          className="absolute z-30 mt-2 w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xl overflow-hidden animate-fade-in"
        >
          {SUBJECTS.map((subject, i) => (
            <li
              key={subject}
              role="option"
              aria-selected={value === subject}
              onClick={() => select(subject)}
              className={`flex items-center gap-3 px-4 py-3 text-sm cursor-pointer transition-colors
                ${i !== SUBJECTS.length - 1 ? 'border-b border-zinc-100 dark:border-zinc-800' : ''}
                ${value === subject
                  ? 'bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 font-medium'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                }`}
            >
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${value === subject ? 'bg-violet-500' : 'bg-zinc-300 dark:bg-zinc-600'
                }`} />
              {subject}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/* ── Contact section ── */
export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [customSubject, setCustomSubject] = useState('')
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubject = val => setForm(f => ({ ...f, subject: val }))

  const handleSubmit = async e => {
    e.preventDefault()
    const finalSubject = form.subject === 'Autre' ? customSubject : form.subject
    if (!finalSubject) return
    setStatus('sending')

    try {
      await emailjs.send(
        EJS_SERVICE_ID,
        EJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: finalSubject,
          message: form.message,
        },
        EJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setCustomSubject('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-stone-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Pas besoin d&apos;avoir tout défini. Décrivez-moi votre situation — même en quelques lignes.
            Je réponds dans les 48 heures.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form – 3/5 */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                <CheckCircle size={40} className="text-green-500 mb-4" />
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2">
                  Message envoyé
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                  Merci. Je vous réponds dans les 48 heures.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form ref={formRef} id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Nom complet
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jean-Louis"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Adresse email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jeanlouis@tal.org"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Custom subject select */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Sujet
                  </label>
                  <CustomSelect value={form.subject} onChange={handleSubject} />

                  {form.subject === 'Autre' && (
                    <div className="mt-3 animate-fade-in">
                      <label htmlFor="contact-custom-subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Précisez votre sujet
                      </label>
                      <input
                        id="contact-custom-subject"
                        name="customSubject"
                        type="text"
                        required
                        value={customSubject}
                        onChange={e => setCustomSubject(e.target.value)}
                        placeholder="Ex: Demande de partenariat / Autre projet..."
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm"
                      />
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, organisation ou besoin…"
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle size={16} />
                    Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === 'sending' || !form.subject || (form.subject === 'Autre' && !customSubject.trim())}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar – 2/5 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 space-y-3">
              <h3 className="font-display font-semibold text-zinc-900 dark:text-white">
                Lucien Amani Bahogwerhe
              </h3>
              <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <p>Développeur Fullstack · Bukavu, RDC</p>
                <p>Disponible pour CDI, CDD et missions freelance</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-600 italic pt-1">
                  Email non affiché pour éviter le spam — utilisez le formulaire.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3">
                Réseaux
              </p>
              <div className="flex flex-col gap-2">
                {SOCIAL.map(({ id, label, href, Icon }) => (
                  <a
                    key={id}
                    id={`contact-${id}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-violet-200 dark:hover:border-violet-800 text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
                  >
                    <Icon size={18} className="text-zinc-400 group-hover:text-violet-500 transition-colors" />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <p className="text-sm text-green-800 dark:text-green-300 font-medium">Disponible actuellement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
