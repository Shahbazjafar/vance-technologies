import { Link } from "react-router-dom";

const ServicesCTA = () => {
  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="w-full px-4 sm:px-8 xl:px-24">
          <div className="bg-black rounded-3xl p-10 sm:p-14 lg:p-16 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(52,211,153,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-[#0da2e7] text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Transform Your Business
              </h2>
              <p className="text-white/60 text-sm sm:text-base mb-8">
                We'd love to Help you. Let's Talk about your project
              </p>
              <Link
                to="/contact"
                className="inline-block border border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-sm sm:text-base"
              >
                Start My Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;