import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

import office1 from '../assets/ofc1.webp'
import office2 from '../assets/ofc2.jpg'
import office3 from '../assets/ofc3.jpg'
import { AboutCompany, AboutProcess, AboutWork } from '../features/about'
const officeImages = [office1, office2, office3];

const features = [
  { icon: "🌿", text: "Committed to your vision" },
  { icon: "💎", text: "Expertise you can trust" },
  { icon: "⚡", text: "Innovation delivered with agility" },
  { icon: "🤝", text: "Collaboration at every step" },
];

const AboutHero = () => {
  return (
    <section className="w-full bg-black pt-32 pb-16 px-4 sm:px-8 xl:px-24">
      <div className="max-w-[1820px] mx-auto">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-white leading-tight mb-12">
          Pioneering the Future with{" "}
          <span className="text-[#0da2e7]">Innovative</span>
          <br />
          <span className="text-[#0da2e7]">Solutions</span>{" "}
          and{" "}
          <span className="text-[#0da2e7]">Agile Execution</span>
        </h1>

        {/* 3 Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {officeImages.map((img, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "320px" }}
            >
              <img
                src={img}
                alt={`Office ${i + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Green tint overlay */}
              <div className="absolute inset-0 bg-[#082f49]/20 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            We're redefining digital innovation by delivering high-tech solutions that empower businesses to lead the way.{" "}
            <span className="text-[#0da2e7]">
              Our agile approach helps startups and B2B enterprises transform bold ideas into impactful, future-ready realities.
            </span>
          </p>
        </div>

        {/* Feature Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 justify-center py-3 px-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#0da2e7]/10 border border-[#0da2e7]/30 flex items-center justify-center flex-shrink-0 text-lg">
                {f.icon}
              </div>
              <span className="text-white/70 text-sm font-medium">{f.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-black font-sans">
      <Header />
      <main className="w-full">
        <AboutHero />
        <AboutWork />
    
<AboutCompany />
<AboutProcess />
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage;
