import { useState } from "react";
import { Link } from "react-router-dom";
import { menuServices, navLinks } from "../shared/config/navigation";

const offices = [
  {
    key: "head",
    label: "Head Office (Pakistan)",
    mapSrc:
      "https://maps.google.com/maps?q=Ground%20Floor%20Usman%20Square%20E%2011%2F2%20Islamabad%2044810&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  {
    key: "regional",
    label: "Regional Office (Canada)",
    mapSrc:
      "https://maps.google.com/maps?q=60%20Tannery%20Rd%20%23406%20Toronto%20ON%20M5A%200S8%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
];

const contactLinks = [
  { label: "info@vancetechnologies.com", href: "mailto:info@vancetechnologies.com" },
  { label: "+92-320-0603583", href: "tel:+923200603583" },
];

const serviceSlug = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const [activeOffice, setActiveOffice] = useState(offices[0]);

  return (
  <footer className="w-full bg-[#f5f8fb] px-4 py-16 text-black sm:px-8 xl:px-11">
    <div className="mx-auto grid w-full max-w-[1628px] grid-cols-1 gap-10 rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_24px_90px_rgba(2,10,28,0.08)] sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-10">
      <div className="relative overflow-hidden rounded-3xl border border-[#0da2e7]/15 bg-gradient-to-br from-white via-[#f6fbff] to-[#eaf7ff] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#0da2e7]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

        <h2 className="relative mb-6 max-w-[580px] text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[40px]">
          <span className="text-[#0da2e7]">Ready to showcase your values?</span>{" "}
          Lets Start with a conversation
        </h2>

        <div className="relative mb-4 flex flex-wrap gap-3">
          {offices.map((office) => (
            <button
              key={office.key}
              type="button"
              onClick={() => setActiveOffice(office)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold shadow-sm transition-all duration-200 ${
                activeOffice.key === office.key
                  ? "border-[#0da2e7] bg-[#0da2e7] text-white shadow-[0_10px_24px_rgba(13,162,231,0.25)]"
                  : "border-black/10 bg-white/80 text-black hover:border-[#0da2e7]/40 hover:text-[#0da2e7]"
              }`}
            >
              {office.label}
            </button>
          ))}
        </div>

        <div className="relative h-[330px] overflow-hidden rounded-2xl border border-white bg-slate-100 shadow-[0_18px_45px_rgba(2,10,28,0.16)]">
          <iframe
            title="Vance Technologies location map"
            src={activeOffice.mapSrc}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/35 to-transparent" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_18px_50px_rgba(2,10,28,0.06)] sm:p-7">
          <p className="text-base leading-8 text-black/60">
            We are now taking projects for upcoming months. Schedule a free
            discovery call or contact us to explore how we can craft something to
            bring your vision to life.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0da2e7]"
            >
              Book A Free Discovery Call
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-black px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:border-[#0da2e7] hover:text-[#0da2e7]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[#020a1c] p-8 text-white shadow-[0_26px_70px_rgba(2,10,28,0.35)] lg:min-h-[500px]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0da2e7]/70 to-transparent" />
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#0da2e7]/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-8 right-8 h-32 w-32 rotate-45 rounded-2xl border border-[#0da2e7]/15" />
          <div className="relative z-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <nav>
              <h3 className="mb-6 text-base font-bold text-[#0da2e7]">Quick Links</h3>
              <div className="grid gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-sm text-white/75 transition-colors duration-200 hover:text-[#0da2e7]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div>
              <h3 className="mb-6 text-base font-bold text-[#0da2e7]">Our Services</h3>
              <div className="grid gap-4">
              {menuServices.map((service) => (
                  <Link
                    key={service.title}
                    to={`/services#${serviceSlug(service.title)}`}
                    className="text-sm leading-snug text-white/75 transition-colors duration-200 hover:text-[#0da2e7]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-base font-bold text-[#0da2e7]">Contact Us</h3>
              <div className="grid gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/75 transition-colors duration-200 hover:text-[#0da2e7]"
                  >
                    {link.label}
                  </a>
                ))}
                <p className="text-sm text-white/75">Book a free discovery call</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-7">
            <h3 className="mb-4 text-base font-bold text-[#0da2e7]">Locate us</h3>
            <p className="max-w-3xl text-sm leading-7 text-white/70">
              <strong className="text-white">Head Office (Pakistan):</strong>{" "}
              Ground Floor, Usman Square E 11/2, Islamabad, 44810
              <br />
              <strong className="text-white">Canada:</strong> 60 Tannery Rd
              #406, Toronto, ON M5A 0S8, Canada
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>Vance Technologies. © {new Date().getFullYear()}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="transition-colors duration-200 hover:text-[#0da2e7]">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="transition-colors duration-200 hover:text-[#0da2e7]">
                Terms & Conditions
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
