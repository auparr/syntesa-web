import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full transition-colors duration-200
                hover:bg-gray-100/50 dark:hover:bg-gray-800/50
                relative group"
            aria-label="Toggle dark mode"
        >
            <div className="relative w-5 h-5 transition-transform duration-300">
                {/* Sun icon */}
                <HiSun
                    className={`w-full h-full absolute inset-0 transition-all duration-300
                        text-gray-900 dark:text-gray-400
                        ${theme === 'dark' ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                />
                {/* Moon icon */}
                <HiMoon
                    className={`w-full h-full absolute inset-0 transition-all duration-300
                        text-gray-900 dark:text-white
                        ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                />
            </div>

            {/* Tooltip */}
            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1
                bg-gray-900 dark:bg-white text-white dark:text-gray-900
                text-xs font-medium rounded-md opacity-0 group-hover:opacity-100
                transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Toggle dark mode
            </span>
        </button>
    );
}