import companyImg from "../../assets/office4.jpg";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="bg-[#0d0d0d] rounded-3xl p-6 sm:p-10 xl:p-14 relative overflow-hidden">

          {/* Green glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#082f49]/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left — Image */}
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden w-full max-w-[400px]" style={{ height: "480px" }}>
                 <img src={companyImg} alt="company" className="w-full h-full object-cover" /> 
                <div className="w-full h-full bg-[#1a2e20] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-2 bg-[#0da2e7]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#0da2e7]/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909" />
                      </svg>
                    </div>
                    <p className="text-white/20 text-xs">Add company image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Content */}
            <div>
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug mb-6">
                We are a Software Company empowering{" "}
                <span className="text-[#0da2e7]">forward thinking startups,</span>
                <br />
                <span className="text-[#0da2e7]">B2B</span> and{" "}
                <span className="text-[#0da2e7]">Fintech</span> companies to unlock
                their growth potential
              </h2>

              <p className="text-white/50 text-sm leading-relaxed mb-4">
                The digital age waits for no one and neither do we. At Vance Technologies,
                we're here to bridge the gap between innovation and real-world impact,
                helping businesses tackle today's complexities while preparing for
                tomorrow's opportunities.
              </p>

              <p className="text-white/50 text-sm leading-relaxed mb-4">
                What sets us apart is more than just technical expertise; it's the way we
                approach every project with a human-first mindset. We take the time to
                understand your unique challenges, developing solutions that don't just fix
                problems but unlock growth. For us, every collaboration is an opportunity
                to inspire progress and drive meaningful change.
              </p>

              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Fueled by a passion for quality and a future-focused vision, we turn bold
                ideas into transformative results. Each project we undertake is a testament
                to our relentless commitment to excellence because the future belongs to
                those who are ready to shape it.
              </p>

              <Link to="/services">
                <button className="border border-[#0da2e7] text-[#0da2e7] font-semibold  px-6 py-2.5 rounded-lg hover:bg-[#0da2e7] hover:text-black transition-colors duration-200 text-sm">
                  Explore Our Services
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;