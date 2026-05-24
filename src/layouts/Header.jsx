import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuServices, navLinks } from "../shared/config/navigation";
import BrandLogo from "../shared/ui/BrandLogo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 flex min-h-[64px] items-center justify-between px-4 py-2.5 sm:min-h-[72px] sm:px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,10,28,0.97) 0%, rgba(4,18,48,0.93) 60%, rgba(2,14,38,0.85) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(13,162,231,0.12)",
          boxShadow: "0 2px 24px 0 rgba(13,162,231,0.06)",
        }}
      >
        <Link
          to="/"
          className="flex min-w-0 items-center"
          aria-label="Vance Technologies home"
        >
          <BrandLogo />
        </Link>

        <button
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          className="relative z-[60] flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-white/5"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ease-in-out sm:w-7 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ease-in-out sm:w-7 ${
              menuOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-white transition-all duration-300 ease-in-out sm:w-7 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-black transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex min-h-full flex-col gap-3 px-4 pb-6 pt-20 transition-all duration-500 ease-in-out sm:gap-4 sm:px-6 sm:pt-24 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row">
            <nav className="flex flex-1 flex-col justify-center rounded-2xl border border-[#0da2e7]/30 px-5 py-6 sm:px-8 sm:py-8 md:px-10">
              {navLinks.map((link, index) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between py-3 text-2xl font-light text-white transition-colors duration-200 hover:text-[#0da2e7] sm:py-4 sm:text-3xl md:py-5 md:text-4xl"
                  >
                    {link.label}
                    <span className="ml-4 text-base opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:text-lg">
                      -&gt;
                    </span>
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="border-b border-white/10" />
                  )}
                </div>
              ))}
            </nav>

            <aside className="relative flex min-h-[220px] flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-[#0da2e7]/30 bg-gradient-to-br from-[#0da2e7]/10 to-black p-6 sm:min-h-[240px] sm:p-8 lg:w-[320px] xl:w-[360px]">
              <div>
                <p className="mb-2 text-sm tracking-wide text-[#0da2e7] sm:mb-3">
                  Contact Us
                </p>
                <h3 className="mb-4 text-xl font-semibold leading-snug text-white sm:mb-6 sm:text-2xl md:text-3xl">
                  Have a cool project for us?
                </h3>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-[#0da2e7] sm:px-6 sm:py-3"
                >
                  Get In Touch <span>-&gt;</span>
                </Link>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Or book a free discovery call
                </p>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-0.5 block text-sm text-[#0da2e7] hover:underline"
                >
                  Book now
                </Link>
              </div>

              <div className="absolute bottom-6 right-6 flex flex-col gap-2 opacity-10">
                <div className="h-12 w-12 rotate-45 rounded-sm border-4 border-[#0da2e7] sm:h-16 sm:w-16" />
                <div className="ml-3 h-8 w-8 rotate-45 rounded-sm border-4 border-[#0da2e7] sm:ml-4 sm:h-10 sm:w-10" />
              </div>
            </aside>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {menuServices.map((service) => (
              <Link
                to="/services"
                key={service.title}
                onClick={() => setMenuOpen(false)}
                className="group rounded-2xl border border-[#0da2e7]/20 bg-black/40 p-5 transition-all duration-200 hover:border-[#0da2e7]/50 sm:p-6"
              >
                <div className="mb-3 flex items-start justify-between sm:mb-6">
                  <h4 className="flex-1 text-sm font-medium leading-snug text-white sm:text-base">
                    {service.title}
                  </h4>
                  <span className="ml-2 mt-0.5 text-lg text-white transition-colors duration-200 group-hover:text-[#0da2e7]">
                    -&gt;
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
