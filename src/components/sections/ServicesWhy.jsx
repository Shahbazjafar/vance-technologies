const reasons = [
  {
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0da2e7]" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "70% Cost Savings",
    desc: "Maximize ROI with up to 70% savings on project costs. We deliver high-quality solutions at a fraction of the cost.",
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0da2e7]" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
    title: "80% Faster Delivery",
    desc: "We thrive under pressure and deliver solutions faster than competitors, on time and within budget, even with tight deadlines.",
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0da2e7]" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
    title: "Unique and Tailored Solutions",
    desc: "Custom-built solutions to fit your business needs. Full ownership of your code and intellectual property.",
  },
  {
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0da2e7]" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
    title: "No Hassles, Results with Transparent Pricing",
    desc: "Focus on delivering results without unnecessary meetings. Transparent pricing with no hidden costs, ensuring top-tier solutions at an affordable price.",
  },
];

const ServicesWhy = () => {
  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="bg-[#f4f4f6] rounded-3xl p-6 sm:p-10 lg:p-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
            Why Vance Technologies
          </h2>
          <p className="text-black/50 text-sm sm:text-base mb-10 sm:mb-12">
            We don't just develop solutions, we create powerful, scalable, and cost-effective solutions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            {reasons.map((r, i) => (
              <div key={i}>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                  {r.icon}
                </div>
                <h3 className="text-black text-base sm:text-lg font-semibold mb-2">{r.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWhy;