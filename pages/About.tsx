import { motion } from "framer-motion";
import { Shield, Target, CheckCircle, XCircle } from "lucide-react";

export function About() {
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
            <h1 className="text-white mb-6">About Havenwatch Foundation</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A structured approach to identifying, documenting, and lawfully
              reporting online child sexual exploitation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Purpose */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="flex items-start gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Target className="w-8 h-8 text-slate-900 flex-shrink-0 mt-1" />
          <div>
            <h2 className="mb-6">Mission & Purpose</h2>
            <div className="space-y-5 text-slate-700 leading-relaxed">
              <p>
                Havenwatch Foundation exists to create a reliable pathway between
                concerned individuals who witness online child exploitation and the
                authorities equipped to take action.
              </p>
              <p>
                We recognize that many cases of online abuse go unreported due to
                confusion about jurisdiction, lack of clear reporting procedures,
                or uncertainty about evidence standards. Havenwatch addresses this
                gap by providing structured intake, analysis, and escalation processes.
              </p>
              <p>
                Our work is grounded in legal compliance, procedural discipline,
                and a commitment to child safety above all else.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Structured Reporting Matters */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Structured Reporting Matters
          </motion.h2>
          <motion.div
            className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5 text-slate-700 leading-relaxed">
              <p>
                Unstructured reports often fail to reach the right authorities,
                lack necessary context, or contain incomplete evidence chains.
                This can result in cases being dismissed or never investigated.
              </p>
              <p>
                Havenwatch applies a standardized methodology to ensure that reports:
              </p>
              <ul className="space-y-3 ml-6">
                {[
                  "Include required jurisdictional information",
                  "Maintain proper evidence handling procedures",
                  "Are routed to appropriate agencies (NCMEC, platforms, law enforcement)",
                  "Meet legal and ethical standards for reporting",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                  >
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p>
                By introducing consistency and accountability into the reporting
                process, we increase the likelihood that cases receive appropriate
                attention and action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do / Don't Do */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <CheckCircle className="w-6 h-6 text-secondary-600" />
              <h3>What Havenwatch Does</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Accept and categorize incoming reports",
                "Document evidence according to standards",
                "Review reports for legal compliance",
                "Forward cases to appropriate authorities",
                "Maintain secure records and audit trails",
                "Provide guidance on reporting procedures",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* What We Don't Do */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <XCircle className="w-6 h-6 text-slate-600" />
              <h3>What Havenwatch Does Not Do</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Conduct arrests or law enforcement activities",
                "Publicly expose or shame suspects",
                "Engage in vigilante actions",
                "Contact or confront suspects directly",
                "Operate without legal oversight",
                "Act outside our jurisdictional scope",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-start gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-8 h-8 text-white flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-white mb-4">Core Principles</h2>
              <p className="text-slate-300 leading-relaxed">
                These principles guide every decision and action within Havenwatch Foundation.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Child Safety First",
                desc: "The protection and wellbeing of children is our primary concern in all operational decisions.",
              },
              {
                title: "Legal Compliance",
                desc: "We operate strictly within legal frameworks and defer to appropriate authorities.",
              },
              {
                title: "Non-Vigilantism",
                desc: "We do not engage in enforcement actions, public exposure, or confrontational tactics.",
              },
              {
                title: "Proportionality",
                desc: "Our responses are measured, evidence-based, and appropriate to the reported circumstances.",
              },
              {
                title: "Neutrality",
                desc: "We document and report objectively, without judgment, bias, or emotional rhetoric.",
              },
              {
                title: "Accountability",
                desc: "Our processes include checks, balances, and oversight to ensure responsible operation.",
              },
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -2, borderColor: "var(--color-primary-600)" }}
              >
                <h4 className="text-white mb-3">{principle.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Status */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="bg-primary-50 border border-primary-200 rounded-lg p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-6">Current Organizational Status</h3>
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              Havenwatch Foundation began as a volunteer-run initiative and is
              currently in the process of transitioning to a formally registered
              nonprofit organization.
            </p>
            <p>
              This transition involves establishing:
            </p>
            <ul className="space-y-3 ml-6">
              {[
                "Legal incorporation and governance structures",
                "Formal policies and operational procedures",
                "Financial accountability and transparency mechanisms",
                "External oversight and advisory relationships",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <p>
              Throughout this transition, we remain committed to our core mission
              and principles while building the institutional framework necessary
              for long-term sustainability.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
