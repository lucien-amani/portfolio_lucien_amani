import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import WhyMe from './components/WhyMe'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileBottomNav from './components/MobileBottomNav'
import CookieConsent from './components/CookieConsent'
import PrivacyPolicy from './components/PrivacyPolicy'

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 transition-colors duration-200">
          <Navbar />
          <main>
            <Hero />
            <Portfolio />
            <WhyMe />
            <Services />
            <Contact />
          </main>
          <Footer onPrivacyClick={() => setShowPrivacy(true)} />
          <MobileBottomNav />
          <CookieConsent onPrivacyClick={() => setShowPrivacy(true)} />
          {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
