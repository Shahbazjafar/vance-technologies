import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full flex justify-center bg-white pt-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="w-full px-4 sm:px-8 xl:px-24">

          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
            <span className="text-[#0da2e7]">We are </span>
            Vance<span className="text-black">Technologies</span>
          </h2>

          <p className="text-gray-600 text-base  leading-relaxed mb-8">
            Founded with a passion for innovation, Vance Technologies sets out to
            redefine how businesses embrace the digital future. What began as a
            dedicated team of visionaries has grown into a trusted global software
            development partner, delivering end-to-end solutions that empower
            businesses to thrive in an ever-changing digital world.
          </p>

          <Link to="/about">
            <button className="bg-black text-[#0da2e7] font-semibold px-6 py-3 rounded-md hover:bg-[#0da2e7] hover:text-black transition-colors duration-200 mb-12 text-sm">
              Know More
            </button>
          </Link>

          {/* Team Cards */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: "3/4" }}
              >
                <div className={`absolute inset-0 transition-colors duration-300 ${hovered === i ? "bg-black" : "bg-[#1a1a1a]"}`} />

                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/10 font-black select-none pointer-events-none"
                  style={{ fontSize: "clamp(48px, 8vw, 80px)", writingMode: "vertical-rl", letterSpacing: "0.1em" }}>
                  {member.short}
                </div>

                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    className="absolute bottom-0 right-0 object-cover object-top transition-all duration-500"
                    style={{
                      width: hovered === i ? "60%" : "100%",
                      height: hovered === i ? "65%" : "100%",
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <div className="w-24 h-24 rounded-full bg-[#0da2e7]/20 border-2 border-[#0da2e7]/40 flex items-center justify-center">
                      <span className="text-[#0da2e7] text-2xl font-bold">{member.firstName[0]}</span>
                    </div>
                  </div>
                )}

                <div className={`absolute inset-0 transition-opacity duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`}>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#0da2e7] rounded-b-2xl" />

                  <div className="absolute top-5 left-5 z-10">
                    <p className="text-[#0da2e7] text-lg font-semibold leading-none">{member.firstName}</p>
                    <p className="text-white text-xl font-bold">{member.name.split(" ")[1]}</p>
                    <p className="text-white/60 text-xs mt-1">{member.role}</p>
                  </div>
                    <a
                  
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-5 w-11 h-11 rounded-full border-2 border-black bg-transparent flex items-center justify-center hover:bg-black/20 transition-colors duration-200 z-10"
                  >
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div> */}

        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-black text-[#0da2e7] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0da2e7] hover:text-black transition-all duration-300 border border-[#0da2e7]/30 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
       
    </section>
  
  );
};

export default About;
