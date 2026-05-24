import { useEffect, useState } from "react";
import bg1 from "../../assets/bg4.png";
import { Link } from "react-router-dom";

const fullText1 = "Map Your Digital Vision";
const fullText2 = "with Next-Gen Technology";

const Hero = () => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [showLine2, setShowLine2] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let t2;
    const t1 = setInterval(() => {
      setLine1(fullText1.slice(0, i + 1));
      i++;
      if (i === fullText1.length) {
        clearInterval(t1);
        setShowLine2(true);
        let j = 0;
        t2 = setInterval(() => {
          setLine2(fullText2.slice(0, j + 1));
          j++;
          if (j === fullText2.length) {
            clearInterval(t2);
            setDone(true);
          }
        }, 45);
      }
    }, 45);
    return () => {
      clearInterval(t1);
      clearInterval(t2);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-hidden px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 lg:min-h-[95vh] lg:justify-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Center Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center justify-start text-center sm:-translate-y-4 lg:h-full lg:-translate-y-20 lg:justify-center">

        {/* Creative Pulse Badge */}
        <div className="hero-badge-float mb-4 inline-flex max-w-full items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1.5 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 sm:mb-5 sm:px-4">
          {/* Active Ping Dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          {/* Text */}
          <span className="whitespace-normal text-center font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-300 sm:whitespace-nowrap sm:text-[11px]">
            Innovative Solutions • Seamless Experience
          </span>
        </div>

        {/* Heading with typewriter */}
        <h1 className="mb-4 max-w-[1050px] text-[clamp(2rem,9vw,4.5rem)] font-bold leading-[1.08] tracking-tight sm:text-[clamp(3rem,7vw,4.5rem)]">
          <span className="hero-title-cyan" style={{ color: "#0da2e7" }}>
            {line1}
            {!showLine2 && (
              <span
                className="inline-block w-[3px] ml-1 animate-pulse align-middle"
                style={{
                  height: "clamp(30px, 5vw, 55px)",
                  backgroundColor: "#0da2e7",
                }}
              />
            )}
          </span>
          <br />
          <span className="hero-title-white text-white">
            {line2}
            {showLine2 && !done && (
              <span className="inline-block w-[3px] h-[30px] sm:h-[42px] lg:h-[55px] bg-white ml-1 animate-pulse align-middle" />
            )}
          </span>
        </h1>

        {/* Subtext — compressed spacing */}
        <p
          className={`mb-6 max-w-2xl text-sm leading-relaxed text-white/70 transition-opacity duration-700 sm:mb-8 sm:text-base md:text-lg ${
            done ? "opacity-100" : "opacity-0"
          }`}
        >
          From Concept to Execution: Shaping the Future of Businesses
        </p>

        {/* CTA Button */}
        <div className={`transition-opacity duration-700 delay-300 ${done ? "opacity-100" : "opacity-0"}`}>
          <Link
            to="/contact"
            className="inline-block rounded-lg bg-white px-7 py-3 text-sm font-semibold text-black shadow-md transition-colors duration-200 sm:px-9 sm:text-base"
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#0da2e7"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "white"}
          >
            Get In Touch
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <div className={`mt-7 flex flex-col items-center justify-center transition-all delay-500 duration-1000 sm:mt-9 ${done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="group flex flex-col items-center gap-2">
            <div className="relative h-14 w-[2px] overflow-hidden bg-[#0da2e7]/35 shadow-[0_0_12px_rgba(13,162,231,0.45)]">
              <span className="scroll-line-dot absolute left-1/2 top-0 h-5 w-[2px] -translate-x-1/2 rounded-full bg-[#0da2e7] shadow-[0_0_16px_rgba(13,162,231,0.95)]" />
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#0da2e7] transition-colors duration-300 group-hover:text-cyan-300">
              Scroll
            </span>
            <span className="scroll-chevron h-2.5 w-2.5 rotate-45 border-b-2 border-r-2 border-[#0da2e7]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

// import { useEffect, useState } from "react";
// import bg1 from "../../assets/bg1.png";
// import { Link } from "react-router-dom";
// const fullText1 = "Map Your Digital Vision";
// const fullText2 = "with Next-Gen Technology";

// const Hero = () => {
//   const [line1, setLine1] = useState("");
//   const [line2, setLine2] = useState("");
//   const [showLine2, setShowLine2] = useState(false);
//   const [done, setDone] = useState(false);

//   useEffect(() => {
//     let i = 0;
//     const t1 = setInterval(() => {
//       setLine1(fullText1.slice(0, i + 1));
//       i++;
//       if (i === fullText1.length) {
//         clearInterval(t1);
//         setShowLine2(true);
//         let j = 0;
//         const t2 = setInterval(() => {
//           setLine2(fullText2.slice(0, j + 1));
//           j++;
//           if (j === fullText2.length) {
//             clearInterval(t2);
//             setDone(true);
//           }
//         }, 45);
//       }
//     }, 45);
//     return () => clearInterval(t1);
//   }, []);

//   return (
//     <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${bg1})` }}
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

//       {/* Center Content */}
//       <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">

//         {/* Badge */}
//         <div className="inline-flex items-center border border-white/30 bg-black/50 text-white/80 text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
//           Innovative Solutions, Seamless Experience
//         </div>

//         {/* Heading with typewriter */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
//           <span className="text-[#0da2e7]">
//             {line1}
//             {!showLine2 && (
//               <span className="inline-block w-[3px] h-[36px] sm:h-[48px] lg:h-[60px] bg-[#0da2e7] ml-1 animate-pulse align-middle" />
//             )}
//           </span>
//           <br />
//           <span className="text-white">
//             {line2}
//             {showLine2 && !done && (
//               <span className="inline-block w-[3px] h-[36px] sm:h-[48px] lg:h-[60px] bg-white ml-1 animate-pulse align-middle" />
//             )}
//           </span>
//         </h1>

//         {/* Subtext — fade in after typing done */}
//         <p
//           className={`text-white/60 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 transition-opacity duration-700 ${
//             done ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           From Concept to Execution: Shaping the Future of Businesses
//         </p>

//         {/* CTA Button — fade in after typing done */}
//         <div className={`transition-opacity duration-700 delay-300 ${done ? "opacity-100" : "opacity-0"}`}>
//           <Link
//             to="/contact"
//             className="bg-white text-black font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-[#0da2e7] transition-colors duration-200 text-sm sm:text-base"
//           >
//             Get In Touch
//           </Link>
//         </div>

//         {/* Scroll Down */}
//         <div className={`mt-12 sm:mt-16 flex flex-col items-center transition-opacity duration-700 delay-500 ${done ? "opacity-100" : "opacity-0"}`}>
//           <div className="relative w-16 h-16 sm:w-20 sm:h-20">
//             <svg className="w-16 h-16 sm:w-20 sm:h-20 animate-spin" style={{ animationDuration: "8s" }} viewBox="0 0 80 80">
//               <defs>
//                 <path id="scrollCircle" d="M 40,40 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" />
//               </defs>
//               <text fontSize="8.5" fill="white" opacity="0.5" letterSpacing="1">
//                 <textPath href="#scrollCircle">Scroll Down • Scroll Down • </textPath>
//               </text>
//             </svg>
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-6 h-9 border-2 border-white/50 rounded-full flex justify-center items-start pt-2">
//                 <div className="w-[3px] h-2.5 bg-white/50 rounded-full animate-bounce" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
