import { motion } from "framer-motion";
import { Shield, Lock, Database, UserCheck, FileText, CheckCircle } from "lucide-react";

export function DataHandling() {
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
                        <h1 className="text-white mb-6">Data Handling & Privacy Policy</h1>
                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Havenwatch is committed to the secure, lawful, and proportional handling
                            of sensitive information related to child protection and volunteer verification.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Policy Sections */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

                {/* Volunteer Verification */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <UserCheck className="w-6 h-6 text-primary-600" />
                        </div>
                        <h2 className="mb-0">Volunteer Verification</h2>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                        <p className="text-slate-700 mb-6 leading-relaxed">
                            We employ rigorous screening processes to ensure the integrity of our volunteer network.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded border border-slate-100">
                                <h3 className="text-lg font-semibold mb-3">Verification Methods</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <CheckCircle className="w-4 h-4 text-secondary-600 mt-1 flex-shrink-0" />
                                        <span>Identity verification via KYC software</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <CheckCircle className="w-4 h-4 text-secondary-600 mt-1 flex-shrink-0" />
                                        <span>Professional certificate validation</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-slate-600">
                                        <CheckCircle className="w-4 h-4 text-secondary-600 mt-1 flex-shrink-0" />
                                        <span>Manual review by core team members</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded border border-slate-100">
                                <h3 className="text-lg font-semibold mb-3">Access Control</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Only fully verified volunteers are granted access to sensitive case information.
                                    Access logs are maintained for accountability.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Storage of Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <Database className="w-6 h-6 text-primary-600" />
                        </div>
                        <h2 className="mb-0">Storage of Contact Information</h2>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm space-y-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-3 text-slate-900">With Consent</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    If users provide explicit consent, contact information (email/phone) may be stored securely:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-slate-700 bg-green-50 px-3 py-2 rounded border border-green-100">
                                        <Lock className="w-4 h-4 text-green-600" />
                                        Stored for up to 100 days (or longer if actively engaged)
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden md:block w-px bg-slate-100"></div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-3 text-slate-900">Without Consent</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    If no consent is given for retention, we adhere to a strict non-storage policy:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-slate-700 bg-red-50 px-3 py-2 rounded border border-red-100">
                                        <Shield className="w-4 h-4 text-red-600" />
                                        No personally identifiable information (PII) is stored
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 italic pt-4 border-t border-slate-100">
                            * Contact information provided for reports or volunteer applications is always transmitted via encrypted channels.
                        </p>
                    </div>
                </motion.div>

                {/* Report Data Handling */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-primary-600" />
                        </div>
                        <h2 className="mb-0">Report Data Handling</h2>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="p-8 pb-0">
                            <p className="text-slate-700 mb-6 leading-relaxed">
                                All report data is handled with the utmost sensitivity, balancing privacy rights with the necessity of child protection.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-t border-slate-100 bg-slate-50">
                            <div className="p-6">
                                <h4 className="font-semibold text-slate-900 mb-2">Sharing</h4>
                                <p className="text-sm text-slate-600">
                                    Data may be shared with law enforcement, platform trust & safety teams, or reputable NGOs when necessary for intervention.
                                </p>
                            </div>
                            <div className="p-6">
                                <h4 className="font-semibold text-slate-900 mb-2">Principles</h4>
                                <p className="text-sm text-slate-600">
                                    Handling follows strict privacy and safety principles, prioritizing proportionality, documentation, and care.
                                </p>
                            </div>
                            <div className="p-6">
                                <h4 className="font-semibold text-slate-900 mb-2">Security</h4>
                                <p className="text-sm text-slate-600">
                                    Access is restricted, logged, and audited. Data is encrypted at rest and in transit.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </section>
        </div>
    );
}
