import { motion } from "framer-motion";
import { ArrowRight, Heart, CheckCircle } from "lucide-react";

export function Volunteer() {
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
                        <h1 className="text-white mb-6">Volunteer with Havenwatch</h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Join a dedicated team of professionals working to create safer online
                            environments through structured reporting and documentation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm mb-12">
                        <h2 className="mb-6">Who We Are Looking For</h2>
                        <div className="space-y-4 text-slate-700 leading-relaxed mb-8">
                            <p>
                                Havenwatch volunteers come from diverse professional backgrounds but share
                                a commitment to child safety, legal compliance, and attention to detail.
                            </p>
                            <p>
                                We are particularly interested in individuals with experience in:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                "Digital Investigations / OSINT",
                                "Legal & Compliance",
                                "Policy Development",
                                "Trust & Safety",
                                "Data Analysis",
                                "Victim Advocacy",
                            ].map((skill, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-100">
                                    <CheckCircle className="w-5 h-5 text-secondary-600" />
                                    <span className="font-medium text-slate-700">{skill}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
                            <a
                                href="https://tally.so/r/BzxrQ1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-600 text-white px-8 py-3.5 rounded font-medium hover:bg-primary-500 transition-all inline-flex items-center justify-center gap-2 shadow-lg"
                            >
                                Apply Now
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
                        <div className="flex items-start gap-4">
                            <Heart className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="mb-3">Commitment to Mental Health</h3>
                                <p className="text-slate-700 leading-relaxed">
                                    Volunteering in this field can be challenging. Havenwatch prioritizes
                                    the mental well-being of our team through mandatory breaks, strict
                                    exposure limits, and support resources. We ensure no volunteer is
                                    overwhelmed or working in isolation.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
