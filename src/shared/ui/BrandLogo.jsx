import vtLogo from "../../assets/vt.png";

const BrandLogo = ({ compact = false }) => (
  <span className="flex min-w-0 items-center gap-2.5 sm:gap-3">
    <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-sm sm:h-11 sm:w-11">
      <img
        src={vtLogo}
        alt=""
        aria-hidden="true"
        className="absolute -left-[13px] -top-[13px] h-[66px] w-[66px] max-w-none object-contain sm:-left-[14px] sm:-top-[14px] sm:h-[72px] sm:w-[72px]"
      />
    </span>
    {!compact && (
      <span className="hidden whitespace-nowrap text-[11px] font-semibold tracking-wide text-white sm:inline md:text-xs">
        VANCE <span className="text-[#0da2e7]">TECHNOLOGIES</span>
      </span>
    )}
  </span>
);

export default BrandLogo;
