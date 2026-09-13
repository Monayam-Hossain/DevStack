import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="bg-white py-12 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">

                    <div className="w-full lg:w-1/2 space-y-6 text-center sm:text-left flex flex-col items-center sm:items-start">

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                        Build Your Ideal <br className="hidden sm:inline" />
                            <span className="bg-brand-gradient bg-clip-text text-transparent block sm:inline">
                                Development Stack
                            </span>
                        </h1>

                        <p className="text-gray-500 text-sm sm:text-lg max-w-xl leading-relaxed font-normal mx-auto sm:mx-0">
                        Explore frontend, backend, database, and tooling options, <br className="hidden sm:inline" />
                        compare them side by side, and put together the stack that fits your next project.
                        </p>

                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none">
                            <button className="btn bg-brand-gradient hover:opacity-95 text-white border-none rounded-xl px-3 sm:px-7 text-xs sm:text-base font-semibold shadow-md transition-all duration-200 w-full sm:w-auto">
                                Explore Technologies
                            </button>

                            <button className="btn btn-outline border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:border-gray-300 rounded-xl px-3 sm:px-7 text-xs sm:text-base font-medium shadow-2xs w-full sm:w-auto bg-white">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-xl">
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