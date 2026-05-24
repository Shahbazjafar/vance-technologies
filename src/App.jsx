import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import CareerPage from './pages/CareerPage'
import HomePage from './routes/HomePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsPage />} />
    </Routes>
  )
}

export default App
