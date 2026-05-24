import { Link } from "react-router-dom";

const diagonalLines = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 23) % 100}%`,
  transform: `rotate(${-40 + ((index * 11) % 20)}deg)`,
  opacity: 0.1 + ((index * 7) % 5) / 10,
}));

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden px-4">
      {/* Diagonal lines bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {diagonalLines.map((line) => (
          <div
            key={line.id}
            className="absolute bg-[#0da2e7]/10"
            style={{
              width: "1px",
              height: "150px",
              left: line.left,
              top: line.top,
              transform: line.transform,
              opacity: line.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Revolutionizing the{" "}
          <span className="text-[#0da2e7]">Way You</span>
          <br />
          <span className="text-[#0da2e7]">Think</span> Digital
        </h1>
        <p className="text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          More than just an IT service provider, We challenge the ordinary and redefine
          what's possible. From custom software and DevOps to cloud solutions, digital
          marketing, and e-commerce, our holistic expertise equips businesses to break
          through limitations and create bold, new digital experiences.
        </p>
        <Link
          to="/contact"
          className="inline-block border border-white/40 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-sm sm:text-base"
        >
          Start your Journey
        </Link>
      </div>
    </section>
  );
};

export default ServicesHero;
