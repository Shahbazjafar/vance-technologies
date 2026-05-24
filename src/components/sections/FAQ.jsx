import { useState } from "react";

const faqs = [
  { q: "Why should I choose Vance Technologies for web development over other agencies?", a: "Vance Technologies stands apart with our innovative approach, blending technical expertise with a deep understanding of your business needs. We deliver tailored, scalable solutions that go beyond aesthetics, ensuring your projects drive meaningful results. With transparent processes, a collaborative spirit, and a track record of excellence, we're your partners in digital growth." },
  { q: "How do I know which development framework is right for my project?", a: "We analyze your project requirements, scalability needs, team expertise, and long-term goals before recommending a framework. Our consultants walk you through the tradeoffs so you make an informed decision." },
  { q: "How does your mobile app development process ensure high quality?", a: "Our mobile development follows a rigorous process including requirement analysis, UI/UX design, iterative development, automated and manual testing, and post-launch support — ensuring a polished, high-performance product." },
  { q: "How do I guarantee that my application will function properly on various operating systems?", a: "We conduct thorough cross-platform testing across multiple OS versions and devices. We use tools like BrowserStack and real device labs to ensure consistent behavior everywhere." },
  { q: "What is the process of working on the backend part of the product, and what technologies are used in the process?", a: "Our backend development uses technologies like .NET Core, Node.js, and Django depending on the project. We follow Clean Architecture, RESTful API design, and implement security best practices, CI/CD pipelines, and cloud deployments." },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
       
                <div className="bg-[#0a1a12] rounded-3xl p-10 lg:p-12 relative overflow-hidden">
                   <div className="w-full px-4 sm:px-8 xl:px-24">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#082f49]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#082f49]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">Frequently asked questions</h2>
                <p className="text-gray-400 text-sm sm:text-base">Everything you need to know about Vance Technologies</p>
              </div>

              <div className="flex flex-col mb-6 sm:mb-8">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-white/10">
                    <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-start gap-3 sm:gap-4 py-4 sm:py-5 text-left group">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-sm flex items-center justify-center text-xs font-bold mt-0.5 transition-colors duration-200 ${open === i ? "bg-[#0da2e7] text-black" : "bg-white/10 text-white/60"}`}>{i + 1}</span>
                      <span className={`flex-1 text-sm sm:text-base font-medium transition-colors duration-200 ${open === i ? "text-[#0da2e7]" : "text-white/80 group-hover:text-white"}`}>{faq.q}</span>
                      <span className="flex-shrink-0 text-white/40 text-xl leading-none mt-0.5">{open === i ? "×" : "+"}</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-60 pb-4 sm:pb-5" : "max-h-0"}`}>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-9 sm:pl-10 pr-4">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mb-8 sm:mb-10">
                <button className="text-white/40 text-xs tracking-widest uppercase hover:text-[#0da2e7] transition-colors duration-200 underline underline-offset-4">READ MORE</button>
              </div>

              <div className="border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex -space-x-3">
                    {["H", "A", "B", "S", "M"].map((letter, i) => (
                      <div key={i} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-black bg-gradient-to-br from-[#0da2e7] to-blue-700 flex items-center justify-center text-white text-xs font-bold" style={{ zIndex: 5 - i }}>{letter}</div>
                    ))}
                  </div>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">Still have questions?</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="mailto:info@vancetechnologies.com" className="flex items-center justify-center gap-2 border border-white/20 text-white text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-lg hover:border-[#0da2e7] hover:text-[#0da2e7] transition-colors duration-200">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    info@vancetechnologies.com
                  </a>
                  <a href="tel:+923002305210" className="flex items-center justify-center gap-2 border border-white/20 text-white text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-lg hover:border-[#0da2e7] hover:text-[#0da2e7] transition-colors duration-200">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    +92-320-0603583
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;