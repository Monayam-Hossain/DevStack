// import React from "react";
import logoText from "../assets/logo-text.png";


const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-10 text-center md:text-left">
            
                <div className="lg:col-span-2 space-y-4 flex flex-col items-center md:items-start">

                    <a href="#" className="flex items-center gap-2 cursor-pointer">
                    {logoText ? (
                        <img src={logoText} alt="Dev Stack" className="h-8 lg:h-9 w-auto object-contain" />
                    ) : (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-rose-400 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                                DS
                            </div>
                            <span className="text-xl font-bold text-gray-900 tracking-tight">
                                Dev<span className="bg-brand-gradient bg-clip-text text-transparent">Stack</span>
                            </span>
                        </div>
                    )}
                    </a>

                    <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                    Curated tools, technologies, and resources for developers building modern software.
                    </p>

                    <div className="flex items-center gap-2 pt-1 text-gray-600 font-medium text-xs sm:text-sm">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
                            GitHub
                        </a>
                        <span className="text-gray-300">•</span>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
                            Twitter
                        </a>
                        <span className="text-gray-300">•</span>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="hidden md:block space-y-3">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Product</h4>
                    <ul className="space-y-2 text-gray-400">
                    <li><a href="#home" className="hover:text-gray-700 transition-colors">Home</a></li>
                    <li><a href="#technologies" className="hover:text-gray-700 transition-colors">Technologies</a></li>
                    <li><a href="#projects" className="hover:text-gray-700 transition-colors">Projects</a></li>
                    </ul>
                </div>

                <div className="hidden md:block space-y-3">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Company</h4>
                    <ul className="space-y-2 text-gray-400">
                    <li><a href="#about" className="hover:text-gray-700 transition-colors">About</a></li>
                    <li><a href="#contact" className="hover:text-gray-700 transition-colors">Contact</a></li>
                    <li><a href="#careers" className="hover:text-gray-700 transition-colors">Careers</a></li>
                    </ul>
                </div>

                <div className="hidden md:block space-y-3">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Legal</h4>
                    <ul className="space-y-2 text-gray-400">
                    <li><a href="#privacy" className="hover:text-gray-700 transition-colors">Privacy Policy</a></li>
                    <li><a href="#terms" className="hover:text-gray-700 transition-colors">Terms of Service</a></li>
                    </ul>
                </div>

                </div>

                <div className="border-t border-gray-100 pt-6 flex flex-col-2 items-center justify-between gap-4 text-xs text-gray-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
                        <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
                    </div>
            </div>

        </div>
    </footer>
  );
};

export default Footer;