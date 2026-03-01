import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

interface Resource {
  title: string;
  category: "Policy" | "Volunteer" | "Standards";
  description: string;
  url: string;
}

export function Resources() {
  const resources: Resource[] = [
    {
      title: "Data Handling & Privacy Policy",
      category: "Policy",
      description: "How Havenwatch collects, stores, and protects sensitive information throughout the reporting process.",
      url: "https://www.slideshare.net/slideshow/havenwatch-foundation-for-child-protection-data-handling-privacy-policy/285671601",
    },
    {
      title: "Ethics & Safeguarding Policy",
      category: "Policy",
      description: "Ethical guidelines and safeguarding measures that govern all organizational activities.",
      url: "https://www.slideshare.net/slideshow/havenwatch-foundation-ethics-safeguarding-policy/285671686",
    },
    {
      title: "Code of Conduct",
      category: "Policy",
      description: "Expected behavior and professional standards for all volunteers and contributors.",
      url: "https://www.slideshare.net/slideshow/havenwatch-foundation-for-child-protection-code-of-conduct/285671934",
    },
    {
      title: "Organizational Charter",
      category: "Policy",
      description: "Foundational document outlining mission, structure, and governance principles.",
      url: "https://www.slideshare.net/slideshow/havenwatch-foundation-organizational-charter-df24/285671935",
    },
    {
      title: "Volunteer Engagement Policy",
      category: "Volunteer",
      description: "Guidelines for volunteer participation, including expectations, roles, and support structures.",
      url: "https://www.slideshare.net/slideshow/havenwatch-foundation-volunteer-engagement-policy/285672056",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Policy":
        return "bg-primary-50 text-primary-700 border-primary-200";
      case "Volunteer":
        return "bg-secondary-50 text-secondary-700 border-secondary-200";
      case "Standards":
        return "bg-slate-100 text-slate-700 border-slate-300";
      default:
        return "bg-slate-100 text-slate-700 border-slate-300";
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-white mb-6">Resources & Documentation</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Access policies, guidelines, and educational materials that define
              how Havenwatch operates and supports its volunteers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, idx) => (
            <motion.a
              key={idx}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 rounded-lg p-6 group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{
                y: -4,
                borderColor: "var(--color-primary-600)",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FileText className="w-6 h-6 text-slate-900 flex-shrink-0" strokeWidth={2} />
                </motion.div>
                <span
                  className={`text-xs px-3 py-1 rounded-full border ${getCategoryColor(
                    resource.category
                  )}`}
                >
                  {resource.category}
                </span>
              </div>
              <h3 className="mb-3">{resource.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {resource.description}
              </p>
              <div className="text-sm text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                View Document
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Document Access Note */}
      <section className="bg-primary-50 border-y border-primary-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6">Document Access</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Most Havenwatch documents are publicly available to ensure transparency
                and accountability. Some operational materials may be restricted to
                active volunteers to protect case integrity and organizational security.
              </p>
              <p>
                If you have questions about accessing specific documents or require
                clarification on any policy, please contact us at{" "}
                <a
                  href="mailto:support@havenwatchfoundation.org"
                  className="text-primary-600 font-medium underline hover:text-primary-700"
                >
                  support@havenwatchfoundation.org
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* External Resources */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-10">External Resources</h2>
          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h4 className="mb-3">National Center for Missing & Exploited Children (NCMEC)</h4>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  The primary reporting hub for child sexual exploitation in the United States.
                </p>
                <a
                  href="https://www.missingkids.org/gethelpnow/cybertipline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 font-medium inline-flex items-center gap-2 hover:text-primary-700 transition-colors"
                >
                  CyberTipline Reporting
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h4 className="mb-3">Internet Watch Foundation (IWF)</h4>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  UK-based organization for reporting child sexual abuse material online.
                </p>
                <a
                  href="https://www.iwf.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 font-medium inline-flex items-center gap-2 hover:text-primary-700 transition-colors"
                >
                  IWF Website
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h4 className="mb-3">Platform Safety Centers</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Most major platforms have dedicated safety centers and reporting tools.
                  Havenwatch can guide you through platform-specific reporting processes.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
