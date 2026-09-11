// import React from 'react';
import hamburgerIcon from "../assets/hamburger.png";
import logoText from "../assets/logo-text.png"


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
                
                    <a className="hidden lg:flex items-center cursor-pointer">
                        <img
                        src={logoText}
                        alt="Dev Stack"
                        className="h-9 w-auto object-contain"
                        />
                    </a>
                </div>

                <div className="navbar-center lg:hidden">
                    <a className="flex items-center cursor-pointer">
                        <img
                        src={logoText}
                        alt="Dev Stack"
                        className="h-8 w-auto object-contain"
                        />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end gap-1 sm:gap-3">
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