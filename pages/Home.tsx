import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileCheck, Scale, ArrowRight, Shield, FileText, Users, AlertCircle } from "lucide-react";

export function Home() {
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, amount: 0.3 });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 border border-white rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-72 h-72 border border-white"
            animate={{
              rotate: [0, -90, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <motion.h1
              className="text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Structured, Lawful Reporting for Child Protection
            </motion.h1>
            <motion.p
              className="text-xl text-slate-300 mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Havenwatch Foundation converts scattered reports of online child exploitation
              into clear, evidence-based reporting pathways that support lawful intervention.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <motion.a
                href="https://tally.so/r/BzxrQ1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-8 py-3.5 rounded font-medium hover:bg-primary-500 transition-all inline-flex items-center gap-2 shadow-lg"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(74, 157, 181, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Apply to Volunteer
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.div
                whileHover={{ y: -2 }}
              >
                <Link
                  to="/about"
                  className="bg-slate-700 text-white px-8 py-3.5 rounded font-medium hover:bg-slate-600 transition-all border border-slate-600"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FileCheck,
              title: "Evidence Handling",
              description: "Structured documentation and secure storage of digital evidence following established protocols and chain-of-custody standards.",
              delay: 0,
            },
            {
              icon: Scale,
              title: "Legal Review",
              description: "Independent review of all reports before escalation to ensure compliance with jurisdictional requirements and reporting standards.",
              delay: 0.1,
            },
            {
              icon: Shield,
              title: "Responsible Reporting",
              description: "Clear pathways to appropriate authorities including NCMEC, platform trust and safety teams, and law enforcement agencies.",
              delay: 0.2,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white border border-slate-200 p-8 rounded-lg group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: item.delay }}
                whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-6 h-6 text-primary-600" strokeWidth={2} />
                </motion.div>
                <h3 className="mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-slate-100 py-24" ref={processRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={processInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </motion.h2>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-slate-300">
              <motion.div
                className="h-full bg-primary-600"
                initial={{ scaleX: 0 }}
                animate={processInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                style={{ originX: 0 }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { step: "01", title: "Intake", desc: "Initial report received and categorized" },
                { step: "02", title: "Analysis", desc: "Evidence reviewed and documented" },
                { step: "03", title: "Legal Review", desc: "Compliance verification completed" },
                { step: "04", title: "Handover", desc: "Report forwarded to appropriate authorities" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
                >
                  <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-primary-600 font-semibold text-lg mb-3">{item.step}</div>
                    <h4 className="mb-3">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Boundaries Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex items-start gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <AlertCircle className="w-8 h-8 text-slate-900 flex-shrink-0 mt-1" />
            <div>
              <h2 className="mb-4">What We Do Not Do</h2>
              <p className="text-slate-600 leading-relaxed">
                Havenwatch operates within clearly defined boundaries to ensure
                accountability, legality, and child safety.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "We do not conduct arrests",
                desc: "Havenwatch is not a law enforcement organization and does not engage in investigative powers or enforcement actions.",
              },
              {
                title: "We do not expose suspects publicly",
                desc: "Reports are handled confidentially and forwarded only to appropriate authorities through proper channels.",
              },
              {
                title: "We do not harass individuals",
                desc: "All activities are documentation-focused. We do not engage in confrontation, pursuit, or direct contact with suspects.",
              },
              {
                title: "We do not replace law enforcement",
                desc: "Havenwatch serves as a reporting intermediary, not as a substitute for professional investigative agencies.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white border-l-4 border-primary-600 p-6 shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <h4 className="mb-3">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Notice */}
      <section className="bg-primary-50 border-y border-primary-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <FileText className="w-12 h-12 text-slate-900 mx-auto mb-6" />
            <h3 className="mb-4">Organizational Transition</h3>
            <p className="text-slate-700 leading-relaxed">
              Havenwatch Foundation is currently transitioning from a volunteer-run
              initiative to a formally registered nonprofit organization. This process
              includes establishing governance structures, legal frameworks, and
              operational policies to ensure long-term sustainability and accountability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-16 text-center text-white shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Users className="w-12 h-12 mx-auto mb-6 text-primary-400" />
          <h2 className="text-white mb-6">Get Involved</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Havenwatch operates through the dedication of trained volunteers.
            If you have experience in digital investigations, legal compliance,
            policy development, or related fields, consider applying.
          </p>
          <motion.a
            href="https://tally.so/r/BzxrQ1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 text-white px-8 py-3.5 rounded font-medium hover:bg-primary-500 transition-all inline-flex items-center gap-2 shadow-lg"
            whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(74, 157, 181, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Learn About Volunteering
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
