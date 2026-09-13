// import React from 'react';
import hamburgerIcon from "../assets/hamburger.png";
import logoText from "../assets/logo-text.png";

const Navbar = () => {
    
    const navLinks = (
        <>
            <li>
                <a className="text-[#E91E63] font-semibold hover:text-[#D81B60]">Home</a>
            </li>
            <li>
                <a className="text-gray-600 hover:text-gray-900 font-medium">Technologies</a>
            </li>
            <li>
                <a className="text-gray-600 hover:text-gray-900 font-medium">Projects</a>
            </li>
            <li>
                <a className="text-gray-600 hover:text-gray-900 font-medium">About</a>
            </li>
            <li>
                <a className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
            </li>
        </>
    );

    const renderLogo = (
        <a className="flex items-center cursor-pointer">
            {logoText ? (
                <img
                    src={logoText}
                    alt="Dev Stack"
                    className="h-7 lg:h-9 w-auto object-contain"
                />
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
    );

    return (
        <div className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle p-1"
                        >
                            <img
                                src={hamburgerIcon}
                                alt="Menu"
                                className="h-6 w-6 object-contain"
                            />
                        </div>
                        
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-gray-100"
                        >
                            {navLinks}
                        </ul>
                    </div>
                
                    <div className="hidden lg:flex">
                        {renderLogo}
                    </div>
                </div>

                <div className="navbar-center lg:hidden">
                    {renderLogo}
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end gap-1 ml-12 sm:gap-3">
                    <button className="btn btn-ghost text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium px-2 sm:px-4 text-sm sm:text-base">
                        Sign In
                    </button>
                
                    <button className="btn bg-[#E91E63] hover:bg-[#D81B60] text-white border-none rounded-full px-5 sm:px-6 font-medium text-sm sm:text-base shadow-sm">
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;