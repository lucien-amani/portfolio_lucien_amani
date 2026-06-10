import { useState, useEffect } from 'react'
import { X, Shield, ChevronDown, ChevronUp, Check } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const STORAGE_KEY = 'lucien_cookie_consent'

function useCookieConsent() {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? JSON.parse(stored) : null
}

export default function CookieConsent({ onPrivacyClick }) {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)
  const [configuring, setConfiguring] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const save = (prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, essential: true, ts: Date.now() }))
    setVisible(false)
  }

  const acceptAll = () => save({ analytics: true, marketing: true })
  const saveChoices = () => save({ analytics, marketing })

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t('cookie_title')}
      className="fixed bottom-0 inset-x-0 z-[60] md:bottom-6 md:inset-x-auto md:left-6 md:max-w-md animate-fade-up"
    >
      <div className="relative mx-3 mb-3 md:mx-0 md:mb-0 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-2xl overflow-hidden">
        {/* Top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-purple-600" />

        <div className="p-5 space-y-4">
          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center shrink-0 mt-0.5">
              <Shield size={18} className="text-violet-600 dark:text-violet-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-zinc-900 dark:text-white text-sm leading-snug">
                {t('cookie_title')}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                {t('cookie_desc')}{' '}
                <button
                  onClick={onPrivacyClick}
                  className="text-violet-600 dark:text-violet-400 underline underline-offset-2 hover:text-violet-800 dark:hover:text-violet-200 transition-colors"
                >
                  {t('cookie_learn_more')}
                </button>
              </p>
            </div>
          </div>

          {/* Configurable options */}
          {configuring && (
            <div className="space-y-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700 p-4 animate-fade-in">
              {/* Essential */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">{t('cookie_essential')}</p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{t('cookie_essential_desc')}</p>
                </div>
                <div className="w-8 h-5 rounded-full bg-violet-500 flex items-center justify-end px-0.5 shrink-0 mt-0.5">
                  <div className="w-4 h-4 rounded-full bg-white shadow" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">{t('cookie_analytics')}</p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{t('cookie_analytics_desc')}</p>
                </div>
                <button
                  onClick={() => setAnalytics(a => !a)}
                  className={`w-8 h-5 rounded-full flex items-center transition-colors duration-200 px-0.5 shrink-0 mt-0.5 ${analytics ? 'bg-violet-500 justify-end' : 'bg-zinc-300 dark:bg-zinc-600 justify-start'}`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow" />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-zinc-900 dark:text-white">{t('cookie_marketing')}</p>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{t('cookie_marketing_desc')}</p>
                </div>
                <button
                  onClick={() => setMarketing(m => !m)}
                  className={`w-8 h-5 rounded-full flex items-center transition-colors duration-200 px-0.5 shrink-0 mt-0.5 ${marketing ? 'bg-violet-500 justify-end' : 'bg-zinc-300 dark:bg-zinc-600 justify-start'}`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow" />
                </button>
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={acceptAll}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold transition-colors"
            >
              <Check size={13} />
              {t('cookie_accept_all')}
            </button>

            {!configuring ? (
              <button
                onClick={() => setConfiguring(true)}
                className="flex items-center gap-1 px-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                {t('cookie_configure')}
                <ChevronDown size={12} />
              </button>
            ) : (
              <button
                onClick={saveChoices}
                className="flex items-center gap-1 px-3 py-2.5 rounded-xl border border-violet-300 dark:border-violet-700 text-violet-600 dark:text-violet-400 text-xs font-medium hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-colors"
              >
                {t('cookie_save')}
                <ChevronUp size={12} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
