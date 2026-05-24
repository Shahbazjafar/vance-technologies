const steps = [
  {
    num: 1,
    title: "Vision Discovery",
    desc: "We begin by deeply understanding your business goals and challenges. This helps us create a clear roadmap that aligns with your vision for growth and digital transformation.",
  },
  {
    num: 2,
    title: "Strategic Alignment",
    desc: "By combining our technical expertise with strategic insight, we ensure that your objectives are matched with solutions that are both innovative and practical for long-term success.",
  },
  {
    num: 3,
    title: "Solution Design",
    desc: "Our team crafts customized strategies designed to solve your unique challenges, focusing on creating impactful solutions that drive measurable results.",
  },
  {
    num: 4,
    title: "Execution Planning",
    desc: "We outline a precise implementation plan with clear timelines, resources, and milestones, ensuring that your project is executed smoothly and efficiently.",
  },
  {
    num: 5,
    title: "Continual Optimization",
    desc: "After launch, we focus on optimizing performance and ensuring continuous improvement, helping your business adapt and thrive in a dynamic digital landscape.",
  },
];

const AboutProcess = () => {
  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
        <div className="bg-[#f4f4f6] rounded-3xl p-6 sm:p-10 xl:p-14">

          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                Our Process
              </h2>
            </div>
            <div>
              <p className="text-black/50 text-sm sm:text-base leading-relaxed">
                We understand that navigating complex processes can be a headache. That's why
                we've designed our approach to be refreshingly simple and streamlined, taking
                the stress out of the equation.
              </p>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                {/* Number Badge */}
                <div className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center mb-5">
                  <span className="text-white font-bold text-sm">{step.num}</span>
                </div>

                <h3 className="text-black text-lg font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-black/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutProcess;