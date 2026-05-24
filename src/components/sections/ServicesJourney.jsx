const steps = [
  { title: "Discovery & Analysis", desc: "We collaborate with your team to understand your goals and your vision, assess requirements, set milestones, and select the right technologies. We also evaluate your existing tech infrastructure for seamless integration, ensuring the solution delivers results and supports your digital transformation." },
  { title: "Design & Prototyping", desc: "We focus on creating designs that not only look great but also offer intuitive, user-friendly interfaces aligned with your brand's vision. Our engineers develop prototypes to test functionality early, gather real-time feedback from stakeholders, and fine-tune every detail, ensuring the final product is both visually engaging and technically sound." },
  { title: "Development & Testing", desc: "We adopt an agile approach to development, i.e., continuously test performance, refine functionality, and incorporate real-time feedback to ensure the product meets your expectations. This process ensures a smooth, high-quality solution, with ongoing optimization based on real-world use and evolving requirements." },
  { title: "Launch & Ongoing Support", desc: "Once your solution/product is ready, we launch it across all platforms and ensure flawless integration with your existing systems. Post-launch, our team provides continuous support, maintenance, and updates to optimize performance and address evolving needs, to ensure long-term success." },
];

const ServicesJourney = () => {
  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="w-full px-4 sm:px-8 xl:px-24 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black lg:sticky lg:top-32">
                4-Step Journey with
                <br />
                Vance Technologies
              </h2>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-[#0da2e7]/30" />
              <div className="flex flex-col">
                {steps.map((step, i) => (
                  <div key={i} className="relative pl-10 sm:pl-12 pb-16 sm:pb-24">
                    <div className="absolute left-0 top-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0da2e7] border-4 border-white z-10" />
                    <h3 className="text-black text-2xl sm:text-3xl lg:text-4xl font-light leading-snug mb-4">
                      {step.title}
                    </h3>
                    <p className="text-black/50 text-sm sm:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesJourney;