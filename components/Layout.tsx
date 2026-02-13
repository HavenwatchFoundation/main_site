
import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Structure', path: '/structure' },
        { name: 'Resources', path: '/resources' },
        { name: 'Volunteer', path: '/volunteer' },
        { name: 'Contact', path: '/contact' },
        { name: 'Legal/Data Handling', path: '/data-handling' },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 z-50">
                        <img src="/havenwatchlogo.svg" alt="Havenwatch" className="h-14 md:h-16 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-primary-600",
                                    location.pathname === item.path ? "text-primary-600" : "text-slate-600"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>

                    {/* Mobile Navigation Overlay */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden"
                            >
                                <nav className="flex flex-col gap-6 text-center">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={clsx(
                                                "text-xl font-medium transition-colors hover:text-primary-600",
                                                location.pathname === item.path ? "text-primary-600" : "text-slate-800"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </header>

            <main className="flex-grow pt-20">
                <Outlet />
            </main>

            <footer className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <h3 className="text-white mb-4 text-xl font-bold">Havenwatch Foundation</h3>
                            <p className="text-slate-400 mb-6 max-w-sm">
                                Dedicated to identifying, documenting, and lawfully reporting online child sexual exploitation through structured, evidence-based methodologies.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white mb-4 font-semibold">Quick Links</h4>
                            <ul className="space-y-2 text-slate-400">
                                {navItems.slice(0, 6).map((item) => (
                                    <li key={item.path}>
                                        <Link to={item.path} className="hover:text-primary-400 transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white mb-4 font-semibold">Legal & Policy</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li>
                                    <Link to="/data-handling" className="hover:text-primary-400 transition-colors">
                                        Legal / Data Handling
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} Havenwatch Foundation. All rights reserved.</p>
                        <p className="mt-2 md:mt-0">Built for child protection.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

