import AnimatedCounter from '~/components/AnimatedCounter';

export default function Hero() {
    return (
        <section aria-labelledby="hero-heading" className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/80
                dark:from-black dark:via-gray-900 dark:to-black
                animate-gradient-xy" />

                {/* Additional gradient layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-apple-blue-500/[0.02] via-transparent to-apple-blue-500/[0.02]
                animate-gradient-x" />

                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-apple-blue-500/[0.02] to-transparent
                animate-gradient" />

                {/* Animated circles */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64
                bg-apple-blue-500/[0.03] dark:bg-apple-blue-400/[0.03]
                rounded-full blur-3xl animate-pulse-slow"
                        style={{ animationDuration: '10s' }} />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96
                bg-apple-blue-600/[0.02] dark:bg-apple-blue-500/[0.02]
                rounded-full blur-3xl animate-pulse-slow"
                        style={{ animationDuration: '15s', animationDelay: '-5s' }} />
                    <div className="absolute bottom-1/4 left-1/3 w-80 h-80
                bg-apple-blue-400/[0.03] dark:bg-apple-blue-300/[0.03]
                rounded-full blur-3xl animate-pulse-slow"
                        style={{ animationDuration: '12s', animationDelay: '-7s' }} />
                </div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(77,145,255,0.02)_0.5px,transparent_0.5px),linear-gradient(to_right,rgba(77,145,255,0.02)_0.5px,transparent_0.5px)]
              dark:bg-[linear-gradient(rgba(77,145,255,0.01)_0.5px,transparent_0.5px),linear-gradient(to_right,rgba(77,145,255,0.01)_0.5px,transparent_0.5px)]
              bg-[size:32px_32px] opacity-75" />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-soft-light"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }} />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
                <div className="relative">
                    {/* Decorative gradient */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                        bg-gradient-to-r from-apple-blue-500/20 to-purple-500/20
                        dark:from-apple-blue-500/10 dark:to-purple-500/10
                        rounded-full blur-3xl opacity-30 -z-10"
                        aria-hidden="true" />

                    <div className="text-center space-y-6 sm:space-y-8 relative">
                        {/* Announcement banner */}
                        <div className="inline-block animate-fade-in-up">
                            <p role="banner" className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full
                                bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10">
                                <span className="relative flex h-2 w-2" aria-hidden="true">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                    Now accepting applications for 2025
                                </span>
                            </p>
                        </div>

                        {/* Main content */}
                        <header className="space-y-4">
                            <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
                                <span className="inline-block mb-2" style={{ animationDelay: '200ms' }}>
                                    Software Engineering
                                </span>
                                <br />
                                <span className="inline-block relative" style={{ animationDelay: '400ms' }}>
                                    Laboratory
                                    <svg className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-4 text-apple-blue-500/30 dark:text-apple-blue-400/30"
                                        viewBox="0 0 208 9"
                                        aria-hidden="true">
                                        <path fill="currentColor" d="M5.68 8C37.14 6.35 68.16 5.03 99.18 4.26c31.02-.77 62.04-.98 93.5.43 3.04.14 6.08.3 9.12.47.37.02.7-.27.72-.64.02-.37-.27-.7-.64-.72-31.02-1.41-61.6-1.2-92.18-.43C78.8 4.1 47.78 5.42 16.32 7.07c-3.04.16-6.08.33-9.12.51-.37.02-.66.35-.64.72.02.35.32.63.67.63l-.37-.93h.18-.36z" />
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300
                                max-w-3xl mx-auto font-light px-4 sm:px-0"
                                style={{ animationDelay: '600ms' }}>
                                Where innovation meets excellence in software development, fostering the next generation of tech leaders
                            </p>
                        </header>

                        {/* Call to action */}
                        <nav className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8"
                            aria-label="Primary"
                            style={{ animationDelay: '800ms' }}>
                            <a href="/apply" className="px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900
                                text-lg font-medium hover:shadow-xl hover:scale-105 transform transition-all duration-300
                                shadow-gray-900/10">
                                Apply Now
                            </a>
                            <a href="/research" className="px-8 py-4 rounded-full border-2 border-gray-900/10 dark:border-white/10
                                text-lg font-medium text-gray-900 dark:text-white
                                hover:bg-gray-900/5 dark:hover:bg-white/5 transition-all duration-300">
                                Explore Research →
                            </a>
                        </nav>

                        {/* Statistics */}
                        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-12 sm:pt-16
                            max-w-4xl mx-auto px-4 sm:px-0">
                            {[
                                { label: "Research Projects", value: 50 },
                                { label: "Industry Partners", value: 10 },
                                { label: "Published Papers", value: 100 },
                                { label: "Student Members", value: 50 }
                            ].map((stat, index) => (
                                <div key={stat.label}
                                    className="text-center group hover:transform hover:scale-110 transition-all duration-300"
                                    style={{ animationDelay: `${1000 + index * 100}ms` }}>
                                    <dt className="text-sm text-gray-600 dark:text-gray-400
                                        group-hover:text-gray-900 dark:group-hover:text-white
                                        transition-colors duration-300">
                                        {stat.label}
                                    </dt>
                                    <dd className="text-3xl font-bold text-gray-900 dark:text-white mb-2
                                        group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400
                                        transition-colors duration-300">
                                        <AnimatedCounter end={stat.value} />
                                        <span aria-hidden="true">+</span>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}