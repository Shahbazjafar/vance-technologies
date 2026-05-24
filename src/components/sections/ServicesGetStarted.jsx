const ways = [
  { num: 1, title: "Full-Cycle Development", desc: "We manage the entire process, from ideation to launch.", points: ["Retain full control over the code and intellectual property", "Quick turnaround to launch your product", "End-to-end support, with no need to juggle multiple teams"] },
  { num: 2, title: "Dedicated Team", desc: "We manage the entire process, from ideation to launch.", points: ["Get the right talent quickly to keep your project moving forward", "Tailor the team to the specific phases of your project for cost efficiency", "Stay informed with consistent updates throughout the development process"] },
  { num: 3, title: "Team Extension", desc: "We manage the entire process, from ideation to launch.", points: ["Add skilled developers as your project needs to grow", "Maintain oversight and control while we support your team's goals", "Quick onboarding for smooth teamwork with your internal resources"] },
  { num: 4, title: "Consultation", desc: "We manage the entire process, from ideation to launch.", points: ["Get a thorough analysis of your project's potential", "Save on development costs with expert guidance", "Develop a clear plan for improving or executing your concept"] },
];

const ServicesGetStarted = () => {
  return (
    <section className="w-full flex justify-center bg-black py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="w-full px-4 sm:px-8 xl:px-24">
          <div className="bg-[#0d0d0d] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* Left */}
              <div>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
                  4 Ways to Get Started
                  <br />
                  with Us
                </h2>
                <div className="opacity-10 hidden sm:block">
                  <svg viewBox="0 0 120 120" className="w-32 h-32 sm:w-40 sm:h-40 text-[#0da2e7]" fill="none" stroke="currentColor" strokeWidth="4">
                    <polygon points="60,5 115,35 115,85 60,115 5,85 5,35" />
                    <polygon points="60,20 100,42 100,78 60,100 20,78 20,42" />
                    <polygon points="60,35 85,49 85,71 60,85 35,71 35,49" />
                  </svg>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-4">
                {ways.map((w) => (
                  <div key={w.num} className="bg-white rounded-2xl p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{w.num}</span>
                      </div>
                      <h3 className="text-black font-semibold text-sm sm:text-base">{w.title}</h3>
                    </div>
                    <p className="text-black/50 text-xs mb-2">{w.desc}</p>
                    <ul className="flex flex-col gap-1.5">
                      {w.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-black/60 text-xs">
                          <span className="text-sky-500 mt-0.5 flex-shrink-0">•</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGetStarted;