import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { ContactSection } from "../features/contact";
import {
  About,
  AboutWork,
  FAQ,
  Hero,
  Marquee,
  Services,
  SuccessStories,
  TechStack,
} from "../features/home";

const HomePage = () => (
  <div className="w-full min-h-screen overflow-x-hidden bg-black font-sans">
    <Header />
    <main className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Marquee />
      <TechStack />
      <SuccessStories />
      <AboutWork />
      <FAQ />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default HomePage;
