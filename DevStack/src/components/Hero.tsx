// import React from 'react';
import bannerStack from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <section className="bg-white py-12 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                
                    <div className="w-full lg:w-1/2 space-y-6 text-left">

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                        Build Your Ideal <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-[#FF6B35] via-[#E91E63] to-[#8E24AA] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                        </h1>

                        <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
                        Explore frontend, backend, database, and tooling options, <br className="hidden sm:inline" />
                        compare them side by side, and put together the stack that fits your
                        next project.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-2">

                            <button className="btn bg-gradient-to-r from-[#FF6B35] via-[#E91E63] to-[#8E24AA] hover:opacity-95 text-white border-none rounded-xl px-6 sm:px-7 text-sm sm:text-base font-semibold shadow-md transition-all duration-200">
                                Explore Technologies
                            </button>


                            <button className="btn btn-outline border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:border-gray-300 rounded-xl px-6 sm:px-7 text-sm sm:text-base font-medium shadow-2xs">
                                Learn More
                            </button>
                        </div>
                    </div>


                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-lg lg:max-w-xl">
                        <img
                            src={bannerStack}
                            alt="Development Stack Illustration"
                            className="w-full h-auto object-contain drop-shadow-xl"
                        />
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;