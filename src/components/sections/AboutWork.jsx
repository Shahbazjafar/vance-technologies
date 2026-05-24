import { useEffect, useRef, useState } from "react";
import workImg from "../../assets/ofc4.webp";

const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
};

const AboutWork = () => {
  const { count, ref } = useCounter(94);

  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="bg-[#f4f4f6] rounded-3xl p-6 sm:p-10 xl:p-14">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8">
            Take a sneak peek
            <br />
            of our work
          </h2>

          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

           {/* Left — Large Image Card */}
<div className="lg:col-span-2 relative rounded-2xl overflow-hidden" style={{ minHeight: "320px" }}>

  <img src={workImg} alt="work" className="absolute inset-0 w-full h-full object-cover" />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

  {/* Top label */}
  <div className="absolute top-4 left-4 z-10">
    <span className="text-white/60 text-xs tracking-wide">Customer Story</span>
  </div>

  {/* Bottom Quote */}
  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
    <p className="text-white text-sm leading-relaxed">
      " By Combining cutting-edge technology with a customer-focused approach,
      Neon Neptune exemplifies how tailored solutions can drive business success
      and innovation."
    </p>
  </div>
</div>
            {/* Right — Stats Card */}
            <div
              ref={ref}
              className="bg-black rounded-2xl p-6 flex flex-col justify-between"
              style={{ minHeight: "320px" }}
            >
              <span className="text-white/40 text-xs font-medium tracking-widest uppercase">
                Facts & Numbers
              </span>
              <div>
                <p className="text-[#0da2e7] font-bold leading-none mb-3" style={{ fontSize: "clamp(56px, 8vw, 90px)" }}>
                  {count}<span className="text-3xl">%</span>
                </p>
                <p className="text-[#0da2e7] text-lg sm:text-xl font-medium leading-snug">
                  of our clients choose to
                  <br />work with us again
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

            {/* Left — Customer Story Dark Card */}
            <div
              className="lg:col-span-2 bg-black rounded-2xl p-6 flex flex-col justify-between"
              style={{ minHeight: "280px" }}
            >
              <div>
                <span className="text-white/40 text-xs tracking-wide">Customer Story</span>
                <p className="text-white text-sm font-semibold leading-relaxed mt-3">
                  Heroic AI demonstrates how AI technologies can significantly enhance
                  and streamline user workflows, offering smarter, more efficient solutions
                  that automate tasks and improve productivity across various industries.
                </p>
              </div>

              {/* Logo */}
              <div className="bg-[#111] rounded-xl p-4 mt-5 flex items-center gap-3">
                <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#0da2e7] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="20,2 38,38 2,38" />
                  <line x1="10" y1="28" x2="30" y2="28" />
                </svg>
                <span className="text-white font-bold text-base tracking-wider">HEROIC AI</span>
              </div>
            </div>

            {/* Right — Review Light Green Card */}
            <div
              className="lg:col-span-3 bg-sky-50 rounded-2xl p-8 flex flex-col justify-between"
              style={{ minHeight: "280px" }}
            >
              <div>
                <span className="text-black/40 text-xs tracking-wide">Review</span>
                <p className="text-black text-lg sm:text-xl lg:text-2xl font-medium leading-snug mt-3">
                  "Vance Technologies has been an incredible partner for
                  us. Their team is professional, responsive, and always
                  ready to help. Every update or change is handled quickly
                  and efficiently. Highly recommended!"
                </p>
              </div>
              <p className="text-black/50 text-sm mt-6">
                Noam Shalev , Founder of Highlight Films
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWork;