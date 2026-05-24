import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6Lcn-dYsAAAAAOkK25bt4sfFduv9RxEJZszKK7rS";
// const API_URL = "https://api.vancetechnologies.com";
const API_URL = "http://localhost:5024";

const budgets = ["<$5,00", "$1,000 - 5,000",  "$5,000 - 10,000", "$10,000 - 20,000", "$20,000+"];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBudget = (b) => {
    setFormData({ ...formData, budget: b });
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
    setError("");
  };

  const handleSubmit = async () => {
    if (!formData.name.trim()) { setError("Name is required."); return; }
    if (!formData.email.trim()) { setError("Email is required."); return; }
    if (!formData.message.trim()) { setError("Message is required."); return; }
    if (!captchaToken) { setError("Please complete the reCAPTCHA."); return; }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "", budget: "", message: "" });
        setCaptchaToken(null);
        recaptchaRef.current.reset();
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not connect to server. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full flex justify-center bg-white py-12">
      <div className="w-full max-w-[1820px] mx-2 sm:mx-8 xl:mx-11">

        <div className="bg-[#0d0d0d] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="w-full px-4 sm:px-8 xl:px-24">

            {/* Decorative diamonds */}
            <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none">
              <div className="w-40 h-40 border-4 border-[#0da2e7] rotate-45 rounded-sm" />
              <div className="w-28 h-28 border-4 border-[#0da2e7] rotate-45 rounded-sm mt-4 ml-6" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

              {/* LEFT — Form */}
              <div className="flex flex-col gap-8">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-white text-base font-medium mb-3 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-b border-white/30 text-white/60 text-sm py-2 outline-none focus:border-[#0da2e7] transition-colors duration-200 placeholder:text-white/30"
                    />
                  </div>
                  <div>
                    <label className="text-white text-base font-medium mb-3 block">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      className="w-full bg-transparent border-b border-white/30 text-white/60 text-sm py-2 outline-none focus:border-[#0da2e7] transition-colors duration-200 placeholder:text-white/30"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-white text-base font-medium mb-3 block">Company e-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full bg-transparent border-b border-white/30 text-white/60 text-sm py-2 outline-none focus:border-[#0da2e7] transition-colors duration-200 placeholder:text-white/30"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="text-white text-base font-medium mb-4 block">Estimated Budget</label>
                  <div className="flex flex-wrap gap-3">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        onClick={() => handleBudget(b)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                          formData.budget === b
                            ? "border-[#0da2e7] text-[#0da2e7] bg-[#0da2e7]/10"
                            : "border-white/30 text-white/60 hover:border-white/60"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  <div className="border-b border-white/10 mt-6" />
                </div>

                {/* Message */}
                <div>
                  <label className="text-white text-base font-medium mb-3 block">Tell us about your project</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                    rows={5}
                    className="w-full bg-transparent border-b border-white/30 text-white/60 text-sm py-2 outline-none focus:border-[#0da2e7] transition-colors duration-200 placeholder:text-white/30 resize-none"
                  />
                </div>

                {/* reCAPTCHA — Responsive */}
                <div className="overflow-hidden">
                  <div className="recaptcha-wrapper">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={SITE_KEY}
                      onChange={handleCaptcha}
                      onExpired={() => setCaptchaToken(null)}
                      theme="dark"
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {/* Success Message */}
                {success && (
                  <div className="flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 rounded-lg px-4 py-3">
                    <svg className="w-4 h-4 text-[#0da2e7] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[#0da2e7] text-sm">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:border-[#0da2e7] hover:text-[#0da2e7] hover:bg-[#0da2e7]/10 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : "Submit"}
                  </button>
                </div>

              </div>

              {/* RIGHT — Info */}
              <div className="flex flex-col justify-between gap-10">
                <div>
                  <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Lets Talk!
                  </h2>
                  <p className="text-white/60 text-base leading-relaxed max-w-md">
                    Ready to bring your business idea to life? Get in touch today for free
                    consultation and lets build something that stands out among the tough
                    competition!
                  </p>
                </div>

                {/* Contact Options Card */}
                <div className="border border-white/10 rounded-2xl p-6 sm:p-8 max-w-sm">
                  <p className="text-white/60 text-sm text-center mb-5">
                    Other contact options:
                  </p>
                  <div className="flex flex-col gap-3">
                     <a
                      href="mailto:info@vancetechnologies.com"
                      className="flex items-center justify-center gap-2 bg-white text-black text-sm font-medium px-5 py-3 rounded-lg hover:bg-[#0da2e7] transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      info@vancetechnologies.com
                    </a>
                    <a
                      href="tel:+92-320-0603583"
                      className="flex items-center justify-center gap-2 bg-white text-black text-sm font-medium px-5 py-3 rounded-lg hover:bg-[#0da2e7] transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      +92-320-0603583
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;