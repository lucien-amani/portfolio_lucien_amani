import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import WhyMe from './components/WhyMe'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <Portfolio />
          <WhyMe />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
