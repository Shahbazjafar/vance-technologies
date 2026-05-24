import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import ofc1 from '../assets/ofc1.webp'
import ofc2 from '../assets/ofc2.jpg'
import ofc3 from '../assets/office4.jpg'
import ofc4 from '../assets/ofc6.jpg'
import ofc5 from '../assets/office6.webp'

// Passionate section images — apni images lagao
import p1 from '../assets/p1.webp'
import p2 from '../assets/p2.webp'
import p3 from '../assets/p3.webp'
import p4 from '../assets/p4.webp'
import p5 from '../assets/p5.webp'
import p6 from '../assets/p6.jpg'

const passionPhotos = [p1, p2, p3, p4, p5, p6]

const PhotoBox = ({ img, className }) => (
  <div className={`relative rounded-2xl overflow-hidden bg-[#1a1a1a] ${className}`}>
    {img && <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />}
  </div>
)

// ========================
// COUNTER HOOK
// ========================
const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = target / (duration / 16)
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 16)
      }
    }, { threshold: 0.3 })
    if (elementRef.current) observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [target, duration])
  return [count, elementRef]
}

// ========================
// CAREER HERO
// ========================
const CareerHero = () => {
  const heroImages = [ofc1, ofc2, ofc3, ofc4, ofc5]

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-20 pb-10">

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute w-[1px] h-16 bg-[#0da2e7]/50" style={{ top: '18%', left: '48%', transform: 'rotate(-20deg)' }} />
        <div className="absolute w-[1px] h-12 bg-[#0da2e7]/50" style={{ top: '15%', left: '52%', transform: 'rotate(-30deg)' }} />
        <div className="absolute w-[1px] h-14 bg-[#0da2e7]/40" style={{ top: '55%', left: '22%', transform: 'rotate(-35deg)' }} />
        <div className="absolute w-[1px] h-10 bg-[#0da2e7]/40" style={{ top: '65%', right: '28%', transform: 'rotate(-25deg)' }} />
        <div className="absolute w-[1px] h-16 bg-[#0da2e7]/30" style={{ top: '30%', right: '18%', transform: 'rotate(-40deg)' }} />
      </div>

      {/* Background Images Row */}
      <div className="absolute inset-0 flex items-center justify-between gap-2 px-0">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden flex-1 ${
              i === 0 || i === 4
                ? 'h-[55vh] rounded-2xl'
                : 'h-[70vh] rounded-2xl'
            } ${i === 2 ? 'flex-[1.5]' : 'flex-1'}`}
          >
            <img src={img} alt={`team ${i}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Center Text */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Join us and be a part of the{' '}
          <span className="text-[#0da2e7]">next-gen innovation</span>
          <br />
          that is shaping the future
        </h1>
        <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
          We're not just offering jobs; we're shaping careers that inspire growth, innovation,
          and impact. With a culture of collaboration, passion, and well-being, we empower you
          to create a brighter future and the world.
        </p>
        <a
          href="#opportunities"
          className="inline-block border border-white/50 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-sm sm:text-base"
        >
          View Opportunities
        </a>
      </div>
    </section>
  )
}

// ========================
// PASSIONATE DRIVEN UNITED
// ========================
const PassionateSection = () => {
  const [count100, count100Ref] = useCounter(100)
  const [count50, count50Ref] = useCounter(50)
  const [count35, count35Ref] = useCounter(35)

  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="w-full px-4 sm:px-8 xl:px-24">

          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
              Passionate, Driven, United
            </h2>
            <p className="text-black/50 text-sm sm:text-base max-w-lg mx-auto">
              Our team is a close-knit family of creative minds, problem solvers, and forward-thinkers,
              united by a shared passion for turning bold ideas into reality.
            </p>
          </div>

          {/* Mosaic Grid — Row 1 */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-3">
            {/* Stat 100+ */}
            <div ref={count100Ref} className="bg-blue-700 rounded-2xl p-6 flex flex-col justify-end min-h-[180px] sm:min-h-[220px]">
              <p className="text-white text-3xl sm:text-4xl font-bold leading-none">{count100} +</p>
              <p className="text-white/80 text-xs sm:text-sm mt-1">Export Driving Innovation</p>
            </div>

            {/* Photo 1 */}
            <PhotoBox img={passionPhotos[0]} className="min-h-[180px] sm:min-h-[220px]" />

            {/* Photo 2 — center team photo */}
            <PhotoBox img={passionPhotos[1]} className="min-h-[180px] sm:min-h-[220px]" />

            {/* Photo 3 */}
            <PhotoBox img={passionPhotos[2]} className="min-h-[180px] sm:min-h-[220px]" />

            {/* Stat 50+ */}
            <div ref={count50Ref} className="bg-black rounded-2xl p-6 flex flex-col justify-end min-h-[180px] sm:min-h-[220px]">
              <p className="text-white text-3xl sm:text-4xl font-bold leading-none">{count50} +</p>
              <p className="text-white/80 text-xs sm:text-sm mt-1">Solutions Transformed Industries</p>
            </div>
          </div>

          {/* Mosaic Grid — Row 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {/* Wide photo — spans 2 cols */}
            <PhotoBox img={passionPhotos[3]} className="col-span-2 min-h-[200px] sm:min-h-[240px]" />

            {/* Photo 4 */}
            <PhotoBox img={passionPhotos[4]} className="min-h-[200px] sm:min-h-[240px]" />

            {/* Stat 35+ */}
            <div ref={count35Ref} className="bg-blue-700 rounded-2xl p-6 flex flex-col justify-end min-h-[200px] sm:min-h-[240px]">
              <p className="text-white text-3xl sm:text-4xl font-bold leading-none">{count35} +</p>
              <p className="text-white/80 text-xs sm:text-sm mt-1">Partnerships Built on Trust</p>
            </div>

            {/* Photo 5 */}
            <PhotoBox img={passionPhotos[5]} className="min-h-[200px] sm:min-h-[240px]" />
          </div>

        </div>
      </div>
    </section>
  )
}

// ========================
// COMPANY CULTURE
// ========================
const culture = [
  {
    title: "Collaborative Innovation",
    desc: "We believe that the best ideas come from working together. Therefore, collaboration is at the heart of everything we do.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0da2e7]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Work-Life Balance & Flexibility",
    desc: "Healthy work-life balance is our priority. We offer flexible working hours, occasional remote work options, and a supportive environment that allows you to thrive both professionally and personally.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0da2e7]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Diversity & Inclusion",
    desc: "Our team is composed of individuals from different backgrounds, cultures, and perspectives. We create an inclusive workplace where all employees feel valued and respected.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0da2e7]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Empowering to Lead",
    desc: "Our employees are empowered to take initiative, contribute to projects, and lead change within the organization. This autonomy creates an environment where innovation thrives, and everyone has a voice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0da2e7]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
]

const CompanyCulture = () => (
  <section className="w-full flex justify-center bg-white py-12">
    <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
      <div className="bg-[#f4f4f6] rounded-3xl p-6 sm:p-10 xl:p-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
          Company Culture at<br />Vance Technologies
        </h2>
        <p className="text-black/50 text-sm sm:text-base mb-10">
          We value bold ideas, love what we do, and know how to keep it fun.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {culture.map((c, i) => (
            <div key={i}>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                {c.icon}
              </div>
              <h3 className="text-black text-base sm:text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-black/50 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

// ========================
// CAREER ADVANCEMENT
// ========================
const advancement = [
  {
    step: "Step 1", title: "Ongoing Learning",
    desc: "Gain access to top training programs and certifications for continuous growth.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0da2e7]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  },
  {
    step: "Step 2", title: "Cross-Team Collaboration",
    desc: "Work with different teams to broaden your skills and knowledge.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0da2e7]"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
  },
  {
    step: "Step 3", title: "Leadership Growth",
    desc: "Climb the career ladder with clear paths to leadership roles.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0da2e7]"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  },
  {
    step: "Step 4", title: "Recognition & Global Exposure",
    desc: "Enjoy recognition, rewards, and opportunities to work on international projects.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 text-[#0da2e7]"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" /></svg>,
  },
]

const CareerAdvancement = () => (
  <section className="w-full flex justify-center bg-white py-12">
    <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
      <div className="bg-[#0d0d0d] rounded-3xl p-6 sm:p-10 xl:p-14">

        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              Career Advancement
              <br />
              Opportunities You Get Here
            </h2>
          </div>
          <div>
            <div className="w-12 h-12 bg-[#111] border border-[#0da2e7]/30 rounded-xl flex items-center justify-center mb-4">
              {advancement[0].icon}
            </div>
            <h3 className="text-[#0da2e7] font-semibold text-base sm:text-lg mb-2">
              {advancement[0].step}: {advancement[0].title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">{advancement[0].desc}</p>
          </div>
        </div>

        {/* Bottom 3 steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {advancement.slice(1).map((a, i) => (
            <div key={i}>
              <div className="w-12 h-12 bg-[#111] border border-[#0da2e7]/30 rounded-xl flex items-center justify-center mb-4">
                {a.icon}
              </div>
              <h3 className="text-[#0da2e7] font-semibold text-sm sm:text-base mb-2">
                {a.step}: {a.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
)

// ========================
// JOB OPENINGS
// ========================
const categories = ['All', 'Engineering', 'Design', 'Marketing']

const jobs = [
 
  {
    title: 'React Developer',
    desc: "Looking for an experienced React Developer to build cutting-edge web applications using modern frontend technologies.",
    type: 'Full Time',
    exp: '3 Years Experience',
    category: 'Engineering',
  },
  {
    title: 'UI/UX Designer',
    desc: "Join our design team to create beautiful, user-centered digital experiences that make a real impact.",
    type: 'Full Time',
    exp: '2 Years Experience',
    category: 'Design',
  },
]

const JobOpenings = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? jobs : jobs.filter(j => j.category === activeCategory)

  return (
    <section id="opportunities" className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="bg-[#0d0d0d] rounded-3xl p-6 sm:p-10 xl:p-14">

          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
            Be a Part of Our Vision
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-6 max-w-md">
            Vance Technologies is committed to providing competitive, innovative, and inclusive
            benefits to promote employee well-being.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'border-[#0da2e7] text-[#0da2e7] bg-[#0da2e7]/10'
                    : 'border-white/20 text-white/60 hover:border-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="flex flex-col">
            {filtered.map((job, i) => (
              <div
                key={i}
                className="border-t border-white/10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex-1">
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-3 max-w-lg">{job.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1.5 border border-[#0da2e7]/50 text-[#0da2e7] text-xs px-3 py-1 rounded-full">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.type}
                    </span>
                    <span className="border border-white/20 text-white/50 text-xs px-3 py-1 rounded-full">
                      {job.exp}
                    </span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="flex items-center gap-1.5 text-white font-semibold text-lg sm:text-xl hover:text-[#0da2e7] transition-colors duration-200 flex-shrink-0"
                >
                  Apply
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Link>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="py-12 text-center text-white/30 text-sm border-t border-white/10">
                No openings in this category right now.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

// ========================
// CAREER PAGE
// ========================
const CareerPage = () => {
  return (
    <div className="w-full min-h-screen bg-black font-sans">
      <Header />
      <main className="w-full">
        <CareerHero />
        <PassionateSection />
        <CompanyCulture />
        <CareerAdvancement />
        <JobOpenings />
      </main>
      <Footer />
    </div>
  )
}

export default CareerPage
