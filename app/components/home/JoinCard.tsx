interface Benefit {
    title: string;
    description: string;
    icon: JSX.Element;
}

const benefits: Benefit[] = [
    {
        title: "Hands-on Learning",
        description: "Work on real projects",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        )
    },
    {
        title: "Expert Mentorship",
        description: "Learn from the best",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        )
    },
    {
        title: "Research Opportunities",
        description: "Push boundaries",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        )
    },
    {
        title: "Growth Opportunities",
        description: "Build your future",
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        )
    }
];

export default function JoinCard() {
    return (
        <section
            aria-labelledby="join-heading"
            className="relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
                    from-apple-blue-500/[0.03] via-transparent to-transparent"
            />

            <div className="max-w-6xl mx-auto px-6 sm:py-32 sm:pb-48 py-24">
                <div className="relative">
                    {/* Decorative Elements */}
                    <div
                        aria-hidden="true"
                        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px]
                            bg-gradient-to-r from-apple-blue-500/10 to-purple-500/10
                            dark:from-apple-blue-500/5 dark:to-purple-500/5
                            rounded-full blur-3xl opacity-30 -z-10"
                    />

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Journey Story */}
                        <div className="space-y-8">
                            <header>
                                <h2
                                    id="join-heading"
                                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                                >
                                    Begin Your Journey in
                                    <br />
                                    <span className="text-apple-blue-600 dark:text-apple-blue-400">
                                        Software Innovation
                                    </span>
                                </h2>
                                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                                    Join a community of passionate developers, researchers, and innovators.
                                    Our lab offers state-of-the-art facilities and mentorship from industry experts.
                                </p>
                            </header>

                            {/* Benefits Grid */}
                            <ul className="grid grid-cols-2 gap-6" role="list">
                                {benefits.map((benefit) => (
                                    <li key={benefit.title} className="group">
                                        <article className="flex items-start space-x-4 p-4 rounded-xl
                                            bg-white/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30
                                            hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                                            <div className="flex-shrink-0">
                                                <div
                                                    aria-hidden="true"
                                                    className="w-10 h-10 rounded-lg bg-apple-blue-500/10 dark:bg-apple-blue-400/10
                                                        flex items-center justify-center
                                                        group-hover:bg-apple-blue-500/20 dark:group-hover:bg-apple-blue-400/20
                                                        transition-colors duration-300"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-apple-blue-600 dark:text-apple-blue-400"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        {benefit.icon}
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </article>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Column - Application Card */}
                        <aside className="relative">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600
                                    dark:from-gray-400 dark:to-gray-600 rounded-2xl blur opacity-10"
                            />
                            <div className="relative bg-white dark:bg-gray-800/30 rounded-2xl p-8 md:p-12
                                border border-gray-200/50 dark:border-gray-700/30">
                                <div className="space-y-8">
                                    <header>
                                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                            Ready to Join?
                                        </h3>
                                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                                            Applications for Summer 2025 are now open. Submit your application today and
                                            take the first step towards your future in software engineering.
                                        </p>
                                    </header>

                                    <nav className="space-y-4">
                                        <a
                                            href="/apply"
                                            className="block w-full px-8 py-4 rounded-xl bg-gray-900 dark:bg-white
                                                text-white dark:text-gray-900 font-medium text-center
                                                hover:bg-gray-800 dark:hover:bg-gray-100
                                                transform hover:scale-[1.02] transition-all duration-300
                                                shadow-lg shadow-gray-900/10"
                                        >
                                            Apply Now
                                        </a>
                                        <a
                                            href="/information-pack"
                                            className="block w-full px-8 py-4 rounded-xl text-center
                                                bg-gray-50 dark:bg-gray-700/50
                                                text-gray-900 dark:text-white font-medium
                                                hover:bg-gray-100 dark:hover:bg-gray-700
                                                transition-all duration-300"
                                        >
                                            Download Information Pack
                                        </a>
                                    </nav>

                                    <footer className="pt-6 border-t border-gray-200/50 dark:border-gray-700/30">
                                        <dl className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                            <dt>Next Intake</dt>
                                            <dd className="font-medium text-gray-900 dark:text-white">
                                                May 2025
                                            </dd>
                                        </dl>
                                    </footer>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}