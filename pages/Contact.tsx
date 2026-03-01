import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "support@havenwatchfoundation.org";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-white mb-6">Contact Havenwatch</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Get in touch with our team for inquiries, information requests, or
              general questions about our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="mb-10">General Inquiries</h2>

          <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-600" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="mb-2">Email Support</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  For all general inquiries, volunteer questions, or information
                  requests, please contact our support team.
                </p>
              </div>
            </div>

            {/* Copy-to-clipboard Email Field */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-medium text-slate-600 uppercase tracking-wide mb-2 block">
                    Email Address
                  </label>
                  <a
                    href={`mailto:${email}`}
                    className="text-lg font-medium text-primary-600 hover:text-primary-700 transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
                <motion.button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all shrink-0"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-secondary-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Response Time Notice */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-slate-200 rounded-lg p-8"
          >
            <h3 className="mb-4">Response Times</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                As a volunteer-run organization, we aim to respond to all inquiries
                within 3–5 business days. Response times may vary depending on
                inquiry complexity and volunteer availability.
              </p>
              <p>
                For urgent matters related to child safety, please contact
                appropriate authorities directly rather than waiting for a response
                from Havenwatch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Include */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="mb-10">When Contacting Us</h2>
          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <p className="text-slate-700 leading-relaxed mb-6">
              To help us respond effectively, please include:
            </p>
            <ul className="space-y-3">
              {[
                "Clear subject line indicating the nature of your inquiry",
                "Specific question or topic you need information about",
                "Any relevant context or background information",
                "Preferred contact method if different from email",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Privacy Note */}
      <section className="bg-primary-50 border-y border-primary-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-700 leading-relaxed">
              All inquiries are handled confidentially in accordance with our{" "}
              <a
                href="https://www.slideshare.net/slideshow/havenwatch-foundation-for-child-protection-data-handling-privacy-policy/285671601"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-medium hover:text-primary-700 underline"
              >
                Data Handling & Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
