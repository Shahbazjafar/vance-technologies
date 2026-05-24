import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "ZOHO & CRM",
    desc: "We are ZOHO specialists with deep expertise across the entire ZOHO ecosystem — ZOHO CRM, ZOHO Creator, ZOHO Books, ZOHO Desk, ZOHO Analytics, ZOHO Campaigns, ZOHO Sign, and ZOHO API integrations.",
    detail:
      "Our ZOHO & CRM solutions help businesses streamline their operations. We work closely with clients to understand their business requirements and deliver custom ZOHO solutions including custom module development, lead scoring, web-to-lead forms, email marketing, invoicing, automation workflows, drag-and-drop reports, and predictive analytics. We also provide ZOHO Support and marketplace expertise.",
    icon: "gear",
    color: "dark",
    full: true,
  },
  {
    id: 2,
    title: "Custom Web/Mobile/Software Development",
    desc: "Create custom web/mobile and software solutions, revamp your digital platforms, or address specific business needs with us as your trusted partner.",
    detail:
      "We design and build high-performance web applications tailored to your business. From landing pages to complex enterprise portals — using React, Next.js, .NET, Flutter, React Native and modern architectures — we deliver pixel-perfect, scalable, and maintainable solutions.",
    icon: "globe",
    color: "blue",
    full: false,
  },
  {
    id: 3,
    title: "Accounts",
    desc: "We provide professional accounting, bookkeeping, VAT filing, and tax preparation services for small businesses and startups. As QuickBooks Pro Advisors with expertise in financial reporting and bookkeeping, we keep your books clean, compliant, and up to date — so you can focus on growing your business.",
    detail:
      "We provide professional accounting, bookkeeping, VAT filing, and tax preparation services for small businesses and startups. As QuickBooks Pro Advisors with expertise in financial reporting and bookkeeping, we keep your books clean, compliant, and up to date — so you can focus on growing your business. Our team of experienced developers and architects bring deep domain expertise to every engagement, ensuring your solution is built on solid foundations.",
    icon: "scale",
    color: "dark",
    full: false,
  },
  {
    id: 4,
    title: "Desktop Applications",
    desc: "Develop custom desktop applications for Windows, macOS, and Linux platforms.",
    detail:
      "We design and build high-performance desktop applications tailored to your business needs. From simple utilities to complex enterprise solutions — using technologies like Electron, .NET, and Java — we deliver robust, scalable, and maintainable applications.",
    icon: "desktop",
    color: "dark",
    full: false,
  },
  {
    id: 5,
    title: "Custom Digital Marketing & SEO and E-commerce Solution",
    desc: "Develop AI-powered e-commerce solutions that maximize conversions and deliver a seamless user experience, with integrated data-driven tools and optimized warehouse management.",
    detail:
      "We build end-to-end e-commerce platforms with AI-powered recommendations, SEO, PPC, social media marketing, content strategy, inventory management, payment integrations, and analytics dashboards. Whether Shopify, WooCommerce, Ebay, or a fully custom solution — we make your store convert.",
    icon: "shop",
    color: "blue",
    full: false,
  },
];

// FIX 1: All SVG icons now correctly match their service category
const iconSVGs = {
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  // FIX 2: ⚖️ was showing a cloud/weather icon — replaced with correct balance scale SVG
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0H6.75A2.25 2.25 0 014.5 18.75v0M12 21h5.25A2.25 2.25 0 0019.5 18.75v0M12 3l-4.5 9h9L12 3zM3 12l3-6 3 6H3zm12 0l3-6 3 6h-6z" />
    </svg>
  ),
  // FIX 3: 💻 was showing an inbox/download icon — replaced with correct laptop/desktop SVG
  desktop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v.243a2.25 2.25 0 01-.659 1.591l-1.591 1.59" />
    </svg>
  ),
  shop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
};

// FIX 4: Background decorators per card index — Accounts (i=1) had empty string ""
const bgDecorators = ["🖥", "📊", "💻", "🛒"];

const Modal = ({ service, onClose }) => {
  if (!service) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 bg-[#071827] border border-[#082f49]/50 rounded-3xl p-10 max-w-2xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
          {iconSVGs[service.icon]}
        </div>
        <h3 className="text-white text-3xl font-bold mb-4">{service.title}</h3>
        <p className="text-gray-400 text-base leading-relaxed mb-8">{service.detail}</p>
        <div className="flex gap-4">
          <Link to="/services">
            <button className="bg-[#0da2e7] text-black font-semibold px-6 py-3 rounded-xl hover:bg-sky-300 transition-colors duration-200">
              Get Started
            </button>
          </Link>
          <button
            onClick={onClose}
            className="border border-white/20 text-white px-6 py-3 rounded-xl hover:border-[#0da2e7] transition-colors duration-200"
          >
            Close
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/40 hover:text-white text-2xl transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const [selected, setSelected] = useState(null);
  const fullCard = services.find((s) => s.full);
  const gridCards = services.filter((s) => !s.full);

  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="w-full px-4 sm:px-8 xl:px-24">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 gap-6">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4">
                <span className="text-[#0da2e7]">What </span>We{" "}
                <span className="text-[#0da2e7]">Do</span>
              </h2>
              <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
                As a full-service agency, we offer industry-leading technologies, refined processes,
                and expertise to ensure sustained growth and success at every stage of your
                product's lifecycle.
              </p>
            </div>
            <Link to="/services" className="pt-10">
              <button className="self-start lg:self-center bg-black text-[#0da2e7] font-semibold px-6 py-3 rounded-md hover:bg-[#0da2e7] hover:text-black transition-colors duration-200 whitespace-nowrap text-sm">
                Explore Our Services
              </button>
            </Link>
          </div>

          {/* Full Width Card */}
          <div
            onClick={() => setSelected(fullCard)}
            className="relative rounded-3xl overflow-hidden bg-[#071827] mb-4 cursor-pointer group"
            style={{ minHeight: "220px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#071827] via-[#082c46] to-[#06111f]" />
            <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-20 text-[180px] leading-none select-none pointer-events-none text-[#0da2e7]">
              ∞
            </div>
            <div className="relative z-10 p-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                {iconSVGs[fullCard.icon]}
              </div>
              <h3 className="text-white text-3xl font-bold mb-3 group-hover:text-[#0da2e7] transition-colors duration-200">
                {fullCard.title}
              </h3>
              <p className="text-gray-400 text-base max-w-xl leading-relaxed">{fullCard.desc}</p>
            </div>
            <div className="absolute bottom-6 right-8 w-10 h-10 rounded-full border border-[#0da2e7]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <svg className="w-4 h-4 text-[#0da2e7]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {gridCards.map((s, i) => {
              const isGreen = s.color === "blue";
              return (
                <div
                  key={s.id}
                  onClick={() => setSelected(s)}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-[1.01] ${
                    isGreen ? "bg-[#0da2e7]" : "bg-[#071827]"
                  }`}
                  style={{ minHeight: "280px" }}
                >
                  {/* FIX 4 applied: bgDecorators array used instead of inline ternary with empty string */}
                  <div
                    className={`absolute right-6 bottom-6 text-[120px] leading-none select-none pointer-events-none ${
                      isGreen ? "text-white/20" : "text-[#0da2e7]/10"
                    }`}
                  >
                    {bgDecorators[i]}
                  </div>
                  <div className="relative z-10 p-8">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                        isGreen ? "bg-white/20" : "bg-white/10"
                      }`}
                    >
                      {iconSVGs[s.icon]}
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3 group-hover:underline transition-all duration-200">
                      {s.title}
                    </h3>
                    <p className={`text-sm leading-relaxed max-w-sm ${isGreen ? "text-white/80" : "text-gray-400"}`}>
                      {s.desc}
                    </p>
                  </div>
                  <div
                    className={`absolute bottom-6 right-8 w-10 h-10 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                      isGreen ? "border-white/50" : "border-[#0da2e7]/40"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 ${isGreen ? "text-white" : "text-[#0da2e7]"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
      <Modal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Services;