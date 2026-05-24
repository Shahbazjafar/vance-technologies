import { useEffect } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import {
  ServicesCTA,
  ServicesGetStarted,
  ServicesGrid,
  ServicesHero,
  ServicesJourney,
  ServicesTestimonials,
  ServicesWhy,
} from '../features/services'

const ServicesPage = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = window.location.hash.slice(1)
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }, [])

  return (
    <div className="w-full min-h-screen bg-black font-sans">
      <Header />
      <main className="w-full">
        <ServicesHero />
        <ServicesGrid />
        <ServicesJourney />
        <ServicesGetStarted />
        <ServicesWhy />
        <ServicesTestimonials />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}

export default ServicesPage
