import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const TermsPage = () => (
  <div className="min-h-screen bg-black font-sans text-white">
    <Header />
    <main className="bg-white px-4 pb-16 pt-28 text-black sm:px-8">
      <section className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0da2e7]">
          Legal
        </p>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
          Terms & Conditions
        </h1>
        <div className="space-y-5 text-base leading-8 text-black/65">
          <p>
            By using this website, you agree to use it lawfully and not misuse,
            disrupt, or attempt to access systems without authorization.
          </p>
          <p>
            Website content is provided for general information about Vance
            Technologies services. Project scopes, pricing, timelines, and
            deliverables are confirmed separately in written agreements.
          </p>
          <p>
            All logos, content, designs, and materials on this website belong to
            Vance Technologies or their respective owners and may not be copied
            without permission.
          </p>
          <p>
            For questions about these terms, contact us at
            info@vancetechnologies.com.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TermsPage;
