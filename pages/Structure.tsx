import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Scale, Cog, MessageSquare, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

interface Department {
  id: string;
  icon: typeof Search;
  title: string;
  summary: string;
  responsibilities: string[];
}

export function Structure() {
  const [expandedDept, setExpandedDept] = useState<string | null>(null);

  const departments: Department[] = [
    {
      id: "investigations",
      icon: Search,
      title: "Digital Investigations & Analysis",
      summary: "Intake, documentation, and evidence handling for reported cases.",
      responsibilities: [
        "Receive and categorize incoming reports",
        "Document digital evidence according to established standards",
        "Verify source authenticity and evidence integrity",
        "Maintain secure storage and chain of custody",
        "Prepare case summaries for legal review",
      ],
    },
    {
      id: "legal",
      icon: Scale,
      title: "Legal, Policy & External Relations",
      summary: "Compliance verification, legal review, and authority liaison.",
      responsibilities: [
        "Review all reports for legal compliance before escalation",
        "Determine appropriate reporting jurisdiction and pathways",
        "Maintain relationships with NCMEC, platforms, and law enforcement",
        "Develop and update internal policies and procedures",
        "Provide legal guidance to other departments",
      ],
    },
    {
      id: "operations",
      icon: Cog,
      title: "Operations & Case Management",
      summary: "Workflow coordination, quality assurance, and organizational systems.",
      responsibilities: [
        "Coordinate case flow between departments",
        "Monitor quality assurance and procedural compliance",
        "Manage internal systems and documentation tools",
        "Track case status and ensure timely escalation",
        "Maintain audit trails and operational records",
      ],
    },
    {
      id: "communications",
      icon: MessageSquare,
      title: "Communications, Education & Outreach",
      summary: "Public information, volunteer support, and educational resources.",
      responsibilities: [
        "Develop public-facing educational materials",
        "Manage organizational communications and transparency reporting",
        "Support volunteer onboarding and training",
        "Create guidance documents for reporters and stakeholders",
        "Handle public inquiries and information requests",
      ],
    },
  ];

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
            <h1 className="text-white mb-6">Organizational Structure</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Havenwatch operates through specialized departments with clear
              separation of responsibilities and built-in checks and balances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Departments
        </motion.h2>
        <div className="space-y-4">
          {departments.map((dept, idx) => {
            const Icon = dept.icon;
            const isExpanded = expandedDept === dept.id;

            return (
              <motion.div
                key={dept.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)" }}
              >
                <button
                  onClick={() => setExpandedDept(isExpanded ? null : dept.id)}
                  className="w-full p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors text-left"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-600" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3">{dept.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{dept.summary}</p>
                  </div>
                  <motion.div
                    className="flex-shrink-0"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-200 bg-slate-50">
                        <h4 className="mb-4">Core Responsibilities</h4>
                        <ul className="space-y-3">
                          {dept.responsibilities.map((resp, respIdx) => (
                            <motion.li
                              key={respIdx}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: respIdx * 0.05 }}
                            >
                              <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2.5 flex-shrink-0" />
                              <span className="text-slate-700 leading-relaxed">{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Case Flow Diagram */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Case Flow & Oversight
          </motion.h2>

          <motion.div
            className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-10">
              {[
                {
                  num: 1,
                  title: "Report Intake",
                  dept: "Digital Investigations & Analysis",
                  action: "receives and categorizes the report.",
                  note: "Initial classification, evidence preservation, and case file creation.",
                },
                {
                  num: 2,
                  title: "Evidence Documentation",
                  dept: "Digital Investigations & Analysis",
                  action: "documents evidence and prepares case summary.",
                  note: "Overseen by Operations & Case Management for quality assurance.",
                },
                {
                  num: 3,
                  title: "Legal Review",
                  dept: "Legal, Policy & External Relations",
                  action: "reviews for compliance and determines escalation pathway.",
                  note: "Independent review ensures separation between investigation and legal approval.",
                },
                {
                  num: 4,
                  title: "External Reporting",
                  dept: "Legal, Policy & External Relations",
                  action: "submits report to appropriate authorities.",
                  note: "Tracked by Operations & Case Management with audit trail maintained.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-3">{step.title}</h4>
                      <p className="text-slate-700 mb-2 leading-relaxed">
                        <span className="font-medium">{step.dept}</span> {step.action}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.note}
                      </p>
                    </div>
                  </div>
                  {idx < 3 && (
                    <div className="flex justify-center my-6">
                      <ArrowRight className="w-6 h-6 text-slate-300 transform rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checks and Balances */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Checks & Balances
        </motion.h2>
        <motion.div
          className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-8">
            {[
              {
                title: "Separation of Functions",
                desc: "Investigation and legal review are conducted by separate departments to prevent conflicts of interest and ensure independent oversight.",
              },
              {
                title: "Multi-Stage Review",
                desc: "Every case passes through multiple review stages before external escalation, including quality assurance, legal compliance, and procedural verification.",
              },
              {
                title: "Audit Trails",
                desc: "Operations & Case Management maintains comprehensive records of all case handling, decisions, and escalations to ensure accountability and transparency.",
              },
              {
                title: "External Accountability",
                desc: "All reports are ultimately submitted to established authorities (NCMEC, platforms, law enforcement), providing external oversight of our work.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <h4 className="mb-3">{item.title}</h4>
                <p className="text-slate-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
