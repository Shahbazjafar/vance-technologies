import { useState } from "react";
import clientImg from "../../assets/noam.jpg";
import clientImg1 from "../../assets/noam1.webp";

const testimonials = [
  { name: "Noam Shalev", role: "Founder of Highlight Films", text: "Vance Technologies has been an incredible partner for us. Their team is professional, responsive, and always ready to help. Every update or change is handled quickly and efficiently. Our website is always up to date and running flawlessly. Highly recommended!", img: clientImg },
  { name: "Ahmed Khan", role: "CEO of NNT Bot", text: "Working with Vance Technologies transformed our product. Their technical expertise and attention to detail is unmatched. They delivered beyond our expectations and on time.", img: clientImg1 },
];

const ServicesTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="w-full flex justify-center bg-black py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="w-full px-4 sm:px-8 xl:px-24">
          <div className="bg-[#0d0d0d] rounded-3xl p-6 sm:p-10 lg:p-16 relative overflow-hidden">

            {/* World map bg */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2560px-World_map_-_low_resolution.svg.png')] bg-center bg-contain bg-no-repeat" />
            </div>

            <div className="relative z-10">
              <h2 className="text-white text-xl sm:text-2xl lg:text-4xl font-bold text-center mb-10 sm:mb-12">
                A Few Testimonials From
                <br />
                Satisfied Clients!
              </h2>

              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 max-w-4xl mx-auto">

                {/* Image */}
                <div className="flex-shrink-0 w-36 h-48 sm:w-48 sm:h-64 rounded-2xl overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">{t.name}</h3>
                  <p className="text-white/40 text-sm mb-3">{t.role}</p>

                  <button className="inline-flex items-center gap-2 border border-white/20 text-white text-xs px-4 py-1.5 rounded-full mb-5 hover:border-[#0da2e7] hover:text-[#0da2e7] transition-colors duration-200">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    Watch Video
                  </button>

                  <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                    {t.text}
                  </p>

                  <div className="flex gap-3 justify-center sm:justify-start">
                    <button onClick={prev} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#0da2e7] hover:text-[#0da2e7] text-white transition-colors duration-200">←</button>
                    <button onClick={next} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#0da2e7] hover:text-[#0da2e7] text-white transition-colors duration-200">→</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;