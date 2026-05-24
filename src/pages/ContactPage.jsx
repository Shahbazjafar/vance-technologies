import { ContactSection } from '../features/contact'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-black font-sans">
      <Header />
      <main className="w-full pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
