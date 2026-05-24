import HEROIC from "../../assets/HEROIC.png";
import MangCoding from "../../assets/MangCoding.png";
import Google from "../../assets/Google.png";
import MStore from "../../assets/MStore.png";
import NNTBot from "../../assets/NNTBot.png";
import HIGHLIGHT from "../../assets/HIGHLIGHT.png";

const brands = [
  { name: "Heroic", text: "HEROIC", logo: HEROIC },
  { name: "MangCoding", text: "MangCoding", logo: MangCoding },
  { name: "Google", text: "Google", logo: Google },
  { name: "MStore", text: "M Store", logo: MStore },
  { name: "NNT Bot", text: "NNT Bot", logo: NNTBot },
  { name: "Highlight", text: "HIGHLIGHT", logo: HIGHLIGHT },
];

const repeated = [...brands, ...brands, ...brands, ...brands];

const Marquee = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* Top Right Triangle */}
      <div className="flex justify-end items-center w-full">
        <div className="w-0 h-0 border-t-[14px] sm:border-t-[24px] md:border-t-[32px] lg:border-t-[40px] border-r-[50vw] border-t-transparent border-r-black" />
      </div>

      {/* Rotated Green Strip */}
      <div className="w-full -rotate-3 transition-all">
        <div className="w-full bg-[#2E5347] py-4 sm:py-5 md:py-7 lg:py-9 rotate-3 transition-all overflow-hidden">
          <div
            className="flex items-center gap-6 sm:gap-8 md:gap-12 whitespace-nowrap"
            style={{ animation: "marquee 20s linear infinite" }}
          >
            {repeated.map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex justify-center items-center gap-2 sm:gap-3"
              >
                {/* Logo */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
                />
                {/* Text */}
                <span className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-2xl tracking-wide">
                  {brand.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Left Triangle */}
      <div className="flex justify-start items-center w-full">
        <div className="w-0 h-0 border-b-[14px] sm:border-b-[24px] md:border-b-[32px] lg:border-b-[40px] border-l-[50vw] border-b-transparent border-l-black" />
      </div>

    </div>
  );
};

export default Marquee;