interface Partner {
    name: string;
    logo: string;
    description: string;
    category: string;
}

export default function Partners(props: { partners: Partner[] }) {
    return (
        <div className="relative py-12 sm:py-16 overflow-hidden border-t border-gray-200/20 dark:border-gray-700/20">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20
                  dark:from-black/80 dark:via-transparent dark:to-black/80 z-10 pointer-events-none"/>

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        Empowering Innovation Through Partnership
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                        Collaborating with leading technology companies to provide students with industry-standard tools and resources
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative">
                    {/* First Row */}
                    <div className="flex space-x-8 sm:space-x-16 animate-slide-left">
                        {[...props.partners, ...props.partners].map((partner, index) => (
                            <div key={index}
                                className="flex-shrink-0 group relative">
                                <div className="relative w-32 sm:w-48 h-16 sm:h-24 bg-white dark:bg-gray-800/30
                                    rounded-xl border border-gray-200/50 dark:border-gray-700/30
                                    flex items-center justify-center p-4 sm:p-6
                                    transition-all duration-500
                                    hover:shadow-lg hover:scale-105 hover:rotate-1
                                    group-hover:border-apple-blue-500/50">
                                    <span className="text-base sm:text-xl font-semibold text-gray-400 dark:text-gray-500
                             group-hover:text-gray-900 dark:group-hover:text-white
                             transition-colors duration-300 text-center">
                                        {partner.name}
                                    </span>

                                    {/* Tooltip */}
                                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-max
                            opacity-0 group-hover:opacity-100
                            transition-all duration-200 z-20
                            pointer-events-none hidden sm:block"> {/* Hide on mobile */}
                                        <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900
                              text-sm font-medium px-4 py-2 rounded-xl
                              shadow-lg">
                                            <div className="font-semibold mb-1">{partner.name}</div>
                                            <div className="text-gray-300 dark:text-gray-600 text-xs">
                                                {partner.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row */}
                    <div className="flex space-x-8 sm:space-x-16 mt-4 sm:mt-8 animate-slide-right">
                        {[...props.partners, ...props.partners].map((partner, index) => (
                            <div key={index}
                                className="flex-shrink-0 group relative">
                                <div className="relative w-32 sm:w-48 h-16 sm:h-24 bg-white dark:bg-gray-800/30 rounded-xl
                      border border-gray-200/50 dark:border-gray-700/30
                      flex items-center justify-center p-4 sm:p-6
                      transition-all duration-300
                      hover:shadow-lg hover:scale-105">
                                    <span className="text-base sm:text-xl font-semibold text-gray-400 dark:text-gray-500
                         group-hover:text-gray-900 dark:group-hover:text-white
                         transition-colors duration-300 text-center">
                                        {partner.name}
                                    </span>

                                    {/* Tooltip */}
                                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-max
                        opacity-0 group-hover:opacity-100
                        transition-all duration-200 z-20
                        pointer-events-none hidden sm:block">
                                        <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900
                          text-sm font-medium px-4 py-2 rounded-xl
                          shadow-lg">
                                            <div className="font-semibold mb-1">{partner.name}</div>
                                            <div className="text-gray-300 dark:text-gray-600 text-xs">
                                                {partner.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}