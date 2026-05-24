const articles = [
  { id: 1, title: "How to Check If Your HubSpot Marketing Automation Is Working", author: "Vance Technologies", date: "August 12, 2025", link: "#" },
  { id: 2, title: "HubSpot Automation for Beginners: What Works and How to Set It Up", author: "Vance Technologies", date: "August 11, 2025", link: "#" },
  { id: 3, title: "How to Track HubSpot Lead Gen ROI and Identify What Works", author: "Vance Technologies", date: "August 7, 2025", link: "#" },
  { id: 4, title: "How to Effectively Improve Your Sales Pipeline with HubSpot Growth Tools and Metrics", author: "Vance Technologies", date: "August 7, 2025", link: "#" },
];

const ArrowGray = () => (
  <svg className="w-14 h-14 ml-auto flex-shrink-0" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="27" stroke="#ccc" strokeWidth="1.5" />
    <path d="M20 36L36 20M36 20H22M36 20V34" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowGreen = () => (
  <svg className="w-14 h-14 ml-auto flex-shrink-0" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="27" fill="#34d399" stroke="#34d399" strokeWidth="1.5" />
    <path d="M20 36L36 20M36 20H22M36 20V34" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArticleIllustration = () => (
  <svg viewBox="0 0 400 500" fill="none" className="w-full h-full opacity-80">
    <rect x="40" y="60" width="320" height="380" rx="16" fill="#e5e7eb" />
    <rect x="70" y="100" width="260" height="20" rx="4" fill="#d1d5db" />
    <rect x="70" y="135" width="200" height="14" rx="4" fill="#e5e7eb" />
    <rect x="70" y="160" width="220" height="14" rx="4" fill="#e5e7eb" />
    <rect x="70" y="220" width="260" height="80" rx="8" fill="#d1d5db" />
    <circle cx="100" cy="260" r="20" fill="#9ca3af" />
    <rect x="130" y="248" width="140" height="10" rx="3" fill="#e5e7eb" />
    <rect x="70" y="320" width="260" height="14" rx="4" fill="#e5e7eb" />
    <rect x="70" y="345" width="200" height="14" rx="4" fill="#e5e7eb" />
    <circle cx="310" cy="400" r="30" fill="#34d399" opacity="0.3" />
    <path d="M298 412L322 388M322 388H302M322 388V408" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LatestArticles = () => {
  return (

    //    <section className="w-full flex justify-center bg-white py-12">
    //   <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
    //     <div className="w-full px-4 sm:px-8 xl:px-24">
    //             <div className="bg-[#0a1a12] rounded-3xl p-10 lg:p-12 relative overflow-hidden">


              
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">
          <div className="w-full px-4 sm:px-8 xl:px-24">
         <div className="bg-[#f4f4f6] rounded-3xl p-10 lg:p-12 relative overflow-hidden">
        {/* <div className="bg-[#f4f4f6] w-full py-10 sm:py-20 rounded-3xl relative"> */}
        

            <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 lg:mb-20">
              <h2 className="text-black text-[28px] sm:text-[40px] lg:text-[48px] font-semibold">Our Latest Articles</h2>
              <a href="#" className="text-xs sm:text-base lg:text-lg font-light text-black border-b border-black w-fit mt-2 sm:mt-0 hover:text-sky-500 hover:border-sky-500 transition-colors duration-200">MORE ARTICLES</a>
            </div>

            <div className="flex gap-11">
              <div className="hidden md:block w-[45%] flex-shrink-0"><ArticleIllustration /></div>
              <div className="w-full">
                <div className="border-b-2 border-black/10 opacity-50" />
                {articles.map((article) => (
                  <a key={article.id} href={article.link} className="pt-8 group hover:scale-105 flex flex-col gap-7 sm:gap-12 transition-all duration-300 ease-in-out border-b-2 border-black/10 pb-10 block">
                    <div className="flex items-start">
                      <p className="w-[80%] text-base md:text-lg lg:text-2xl font-medium text-black/70 group-hover:text-black transition-colors duration-300 leading-snug">{article.title}</p>
                      <div className="ml-auto">
                        <div className="group-hover:hidden block"><ArrowGray /></div>
                        <div className="hidden group-hover:block"><ArrowGreen /></div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-black/50 group-hover:text-black/70 transition-colors duration-300 mr-16">{article.author}</span>
                      <span className="text-sm text-black/50 group-hover:text-black/70 transition-colors duration-300">{article.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;