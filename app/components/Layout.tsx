import { Link, NavLink } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FAFAFA] dark:bg-black">
            <nav className={`sticky top-0 z-50 transition-all duration-500
                ${isScrolled
                    ? 'bg-white/80 dark:bg-black/80'
                    : 'bg-transparent'
                } backdrop-blur-xl border-b border-gray-200/10`}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link
                                to="/"
                                className="group relative px-3 py-2 text-2xl font-semibold
                                    text-gray-900 dark:text-white transition-all duration-300"
                            >
                                {/* Logo Background Effect */}
                                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50
                                    rounded-lg opacity-0 group-hover:opacity-100
                                    transition-all duration-300 -z-10" />

                                {/* Logo Text */}
                                <span className="relative bg-clip-text hover:text-transparent
                                    hover:bg-gradient-to-r from-gray-900 to-gray-600
                                    dark:from-white dark:to-gray-300">
                                    Syntesa
                                </span>
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-1">
                            {[
                                { name: 'About', path: '/about' },
                                { name: 'Programs', path: '/programs' },
                                { name: 'Projects', path: '/projects' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) => `
                                        relative px-4 py-2 rounded-xl text-sm font-medium
                                        transition-all duration-300 group
                                        ${isActive
                                            ? 'text-gray-900 dark:text-white'
                                            : 'text-gray-600 dark:text-gray-300'
                                        }
                                    `}
                                >
                                    {({ isActive }) => (
                                        <>
                                            {/* Background Effect */}
                                            <div className={`absolute inset-0 rounded-xl transition-all duration-300
                                                ${isActive
                                                    ? 'bg-gray-100 dark:bg-gray-800/50'
                                                    : 'opacity-0 group-hover:opacity-100 bg-gray-100 dark:bg-gray-800/50'
                                                }
                                            `} />

                                            {/* Text */}
                                            <span className="relative">
                                                {item.name}
                                            </span>

                                            {/* Active Indicator */}
                                            {isActive && (
                                                <span className="absolute -bottom-px left-1/2 -translate-x-1/2
                                                    w-1 h-1 rounded-full bg-gray-900 dark:bg-white" />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                {children}
            </main>

            <footer className="border-t border-gray-200/10 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        <p>© 2025 Software Engineering Lab UNESA. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}