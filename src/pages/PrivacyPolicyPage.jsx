import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-black font-sans text-white">
    <Header />
    <main className="bg-white px-4 pb-16 pt-28 text-black sm:px-8">
      <section className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0da2e7]">
          Legal
        </p>
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <div className="space-y-5 text-base leading-8 text-black/65">
          <p>
            Vance Technologies respects your privacy. We collect only the
            information needed to respond to inquiries, schedule discovery calls,
            and provide our software, CRM, design, and business technology
            services.
          </p>
          <p>
            Information submitted through contact forms may include your name,
            email, phone number, project budget, and message. We use this
            information to communicate with you and prepare relevant proposals.
          </p>
          <p>
            We do not sell personal information. We may use trusted service
            providers for hosting, analytics, security, email delivery, and spam
            prevention where required to operate the website.
          </p>
          <p>
            To request access, correction, or deletion of your information,
            contact us at info@vancetechnologies.com.
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicyPage;
