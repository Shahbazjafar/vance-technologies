import techVideo from "../../assets/finelvideo.mp4";
import { Link } from "react-router-dom";

const TechStack = () => {
  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="w-full px-4 sm:px-8 xl:px-24">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Left — Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6">
                <span className="text-[#0da2e7]">Our </span>Tech <span className="text-[#0da2e7]">Stack</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 max-w-md">
                Our tech stack covers the full spectrum of software development, including front-end technologies like React and Angular, back-end frameworks such as Node.js and Django, cloud solutions with AWS and Azure, and modern tools like Kubernetes, Docker, and CI/CD pipelines for smooth delivery.
              </p>
              <div className="bg-black rounded-2xl p-6 sm:p-8 w-full max-w-md">
                <p className="text-white font-semibold text-base sm:text-lg leading-snug mb-5 sm:mb-6">
                  Tailored services to match your needs, see what we offer!
                </p>
                <Link to="/services">
                  <button className="border border-[#0da2e7] text-[#0da2e7] font-semibold px-5 sm:px-6 py-2.5 rounded-lg hover:bg-[#0da2e7] hover:text-black transition-colors duration-200 text-sm">
                    Discover Our Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right — Video */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-full rounded-3xl overflow-hidden mx-auto"
                style={{ aspectRatio: "1/1" }}
              >
                <video
                  src={techVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20 pointer-events-none" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;