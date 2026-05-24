import { Link } from "react-router-dom";

import zoho from "../../assets/zoho.png";
import software from "../../assets/mobile.png";
import account from "../../assets/accounts.png";
import desktop from "../../assets/desktop.png";
import marketing from "../../assets/eccom.png";


// import mobileImg from "../../assets/mobile.jpg";
// import aiImg from "../../assets/noam3.jpg";
// import genaiImg from "../../assets/noam4.webp";
// import shopifyImg from "../../assets/shopify.jpg";
import uiuxImg from "../../assets/figm.png";

const services = [
   {
    id: 1,
    title: "ZOHO & CRM",
    desc: "We are ZOHO specialists with deep expertise across the entire ZOHO ecosystem — ZOHO CRM, ZOHO Creator, ZOHO Books, ZOHO Desk, ZOHO Analytics, ZOHO Campaigns, ZOHO Sign, and ZOHO API integrations.",
    img: zoho,
         imgLeft: false
  },
  {
    id: 2,
    title: "Custom Web/Mobile/Software Development",
    desc: "Create custom web/mobile and software solutions, revamp your digital platforms, or address specific business needs with us as your trusted partner.",
    img: software,
         imgLeft: true
  },
  {
    id: 3,
    title: "Accounts",
    desc: "We provide professional accounting, bookkeeping, VAT filing, and tax preparation services for small businesses and startups. As QuickBooks Pro Advisors with expertise in financial reporting and bookkeeping, we keep your books clean, compliant, and up to date — so you can focus on growing your business.",
     img: account,
         imgLeft: false
  },
  {
    id: 4,
    title: "Desktop Applications",
    desc: "Develop custom desktop applications for Windows.",
     img: desktop,
         imgLeft: true
  },
  {
    id: 5,
    title: "Custom Digital Marketing & SEO and E-commerce Solution",
    desc: "E-commerce solutions that maximize conversions and deliver a seamless user experience, with integrated data-driven tools and optimized warehouse management.",
    img: marketing,
         imgLeft: false
  },
    { id: 6, 
      title: "UI/UX Design Services",
       desc: "A powerful design goes beyond visuals, it shapes seamless interactions and intuitive experiences. At Vance Technologies, we merge creativity with strategy to build user-centric digital journeys that captivate and convert.",
        img: uiuxImg,
         imgLeft: true
     },

];

const ServiceRow = ({ service }) => {
  return (
    <div id={service.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} className="scroll-mt-24 flex flex-col lg:grid lg:grid-cols-2 gap-2 mb-2">
      <div className={`bg-[#111] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] lg:min-h-[320px] ${service.imgLeft ? "lg:order-2" : "lg:order-1"}`}>
        <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-8">
          {service.title}
        </h3>
        <div>
          <p className="text-white/50 text-sm leading-relaxed mb-5">
            {service.desc}
          </p>
          <Link
            to="/contact"
            className="inline-block border border-white/30 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:border-[#0da2e7] hover:text-[#0da2e7] transition-colors duration-200"
          >
            Read more
          </Link>
        </div>
      </div>

      <div className={`relative rounded-2xl overflow-hidden min-h-[200px] sm:min-h-[280px] lg:min-h-[320px] ${service.imgLeft ? "lg:order-1" : "lg:order-2"}`}>
        <img src={service.img} alt={service.title} className="w-full h-full object-cover absolute inset-0" />
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="w-full flex justify-center bg-black py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="w-full px-4 sm:px-8 xl:px-24">
          <div className="bg-[#0d0d0d] rounded-3xl p-3 sm:p-6 flex flex-col gap-3">
            {services.map((s) => (
              <ServiceRow key={s.id} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
