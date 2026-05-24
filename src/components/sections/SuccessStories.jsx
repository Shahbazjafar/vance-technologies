import { useEffect, useRef, useState } from "react";
import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";

const projects = [
  { id: 1, title: "AI-Driven Chatbot for Hosting, Domain, and Website Creation", img: proj1, link: "#" },
  { id: 2, title: "Scalable sales platform with advanced product configuration, inventory tracking, and analytics designed for complex B2B and B2C workflows.", img: proj2, link: "#" },
];

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

const ProjectCard = ({ project, tall }) => (
  <div className="relative rounded-2xl overflow-hidden group cursor-pointer w-full" style={{ height: tall ? "420px" : "280px" }}>
    {project.img ? (
      <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full bg-[#111] flex items-center justify-center">
        <p className="text-white/20 text-xs">Add image</p>
      </div>
    )}
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300" />
    <a href={project.link} className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/40 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#0da2e7] hover:border-[#0da2e7] transition-all duration-200 z-10">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" /></svg>
    </a>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
      <p className="text-white text-sm font-medium leading-snug">{project.title}</p>
    </div>
  </div>
);

const SuccessStories = () => {
  const { count, ref } = useCounter(300);
  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
   
          <div className="bg-[#0a1a12] rounded-3xl p-10 lg:p-12 relative overflow-hidden">
                 <div className="w-full px-4 sm:px-8 xl:px-24">
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#082f49]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-5">
                <div ref={ref}>
                  <span className="text-[#0da2e7] font-black leading-none" style={{ fontSize: "clamp(90px, 13vw, 150px)" }}>
                    {count}<span className="text-4xl lg:text-5xl">+</span>
                  </span>
                </div>
                <ProjectCard project={projects[0]} tall={false} />
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="text-[#0da2e7] font-black text-3xl lg:text-4xl tracking-widest uppercase mb-3">SUCCESS STORIES</h2>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-5">
                    Result-oriented: We drive business growth with customized solutions, blending deep technical knowledge and industry expertise to deliver powerful, results-oriented digital experiences.
                  </p>
                  <button className="border border-[#0da2e7]/60 text-[#0da2e7] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0da2e7] hover:text-black transition-colors duration-200">
                    View More Projects
                  </button>
                </div>
                <ProjectCard project={projects[1]} tall={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;