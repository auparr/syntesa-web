import { memo, useMemo, useEffect, useState, useRef } from 'react';
import { type IconType } from 'react-icons';
import debounce from '~/utils/Debounce';

export type PartnerCategory = "Education" | "Infrastructure" | "Technology";

export interface TypePartner {
    readonly name: string;
    readonly icon: IconType;
    readonly description: string;
    readonly category: PartnerCategory;
}

interface PartnersProps {
    readonly partners: readonly TypePartner[];
}

export default function Partners(props: PartnersProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Check for mobile device on mount
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile(); // Check immediately
        const handleResize = debounce(checkMobile, 250); // Debounce resize events

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Improved Intersection Observer setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px' // Start loading slightly before the element is in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Memoize partner arrays
    const { displayPartners, displayShuffledPartners } = useMemo(() => {
        if (!isVisible) {
            return {
                displayPartners: [] as readonly TypePartner[],
                displayShuffledPartners: [] as readonly TypePartner[]
            };
        }

        const shuffled = [...props.partners].sort(() => Math.random() - 0.5);
        const duplicated = [...props.partners, ...props.partners];
        const duplicatedShuffled = [...shuffled, ...shuffled];

        return {
            displayPartners: duplicated,
            displayShuffledPartners: duplicatedShuffled
        };
    }, [props.partners, isVisible]);

    return (
        <section
            ref={sectionRef}
            aria-labelledby="partners-heading"
            className="relative py-8 sm:py-14 border-t border-gray-200/10 dark:border-gray-800/50
                      bg-gradient-to-b from-white via-gray-50 to-white
                      dark:from-black dark:via-gray-900 dark:to-black"
        >
            <div className="mx-auto">
                <header className="text-center mb-8 sm:mb-12 px-6">
                    <h2 id="partners-heading" className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                        Empowering Innovation Through Partnership
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                        Collaborating with leading technology companies to provide students with industry-standard tools and resources
                    </p>
                </header>

                {isVisible && (
                    <div className="relative" role="region">
                        {/* Gradient masks */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-black/20 z-20" />
                            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-black/20 z-20" />
                        </div>

                        {/* Partner rows */}
                        <PartnerRow partners={displayPartners} direction="left" isMobile={isMobile} />
                        <PartnerRow partners={displayShuffledPartners} direction="right" isMobile={isMobile} />
                    </div>
                )}
            </div>
        </section>
    );
};

const PartnerRow = memo(({ partners, direction, isMobile }: {
    partners: readonly TypePartner[];
    direction: 'left' | 'right';
    isMobile: boolean;
}) => {
    const animationClass = useMemo(() => {
        if (direction === 'left') {
            return isMobile ? 'animate-slide-left-mobile' : 'animate-slide-left';
        }
        return isMobile ? 'animate-slide-right-mobile' : 'animate-slide-right';
    }, [direction, isMobile]);

    return (
        <div className="overflow-hidden py-4">
            <div className={`relative flex w-[200%] ${animationClass}`}>
                <ul className="flex items-center justify-around w-full space-x-4">
                    {partners.map((partner, index) => (
                        <MarqueeItem
                            key={`${partner.name}-${index}-${direction}`}
                            partner={partner}
                            tooltipPosition={direction === 'left' ? 'top' : 'bottom'}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
});
PartnerRow.displayName = 'PartnerRow';

const MarqueeItem = memo(({ partner, tooltipPosition }: {
    partner: TypePartner,
    tooltipPosition: 'top' | 'bottom'
}) => {
    return (
        <li className="flex-shrink-0 group">
            <div className={`relative px-4 py-4 ${tooltipPosition === 'top' ? 'sm:pt-16' : 'sm:pb-16'}`}>
                <article className="relative w-32 sm:w-48 h-16 sm:h-24
                    bg-white/50 dark:bg-gray-800/30
                    rounded-xl border border-gray-200/50 dark:border-gray-700/30
                    flex items-center justify-center p-4 sm:p-6
                    transition-all duration-500
                    hover:shadow-lg hover:scale-105
                    group-hover:border-apple-blue-500/50
                    backdrop-blur-sm">
                    <partner.icon className="w-8 h-8 sm:w-10 sm:h-10
                        text-gray-400 dark:text-gray-500
                        group-hover:text-gray-900 dark:group-hover:text-white
                        transition-colors duration-300" />

                    {/* Tooltip */}
                    <div
                        role="tooltip"
                        className={`absolute ${tooltipPosition === 'top' ? '-top-12' : 'bottom-[-3rem]'} left-1/2 -translate-x-1/2 w-max
                            opacity-0 group-hover:opacity-100
                            transition-all duration-200 z-20
                            pointer-events-none hidden sm:block`}
                    >
                        <div className="bg-gray-900 dark:bg-white
                            text-white dark:text-gray-900
                            text-sm font-medium px-4 py-2 rounded-xl
                            shadow-lg backdrop-blur-sm
                            whitespace-nowrap">
                            <strong className="block font-semibold mb-1">
                                {partner.name}
                            </strong>
                            <span className="text-gray-300 dark:text-gray-600 text-xs">
                                {partner.description}
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </li>
    );
});

MarqueeItem.displayName = 'MarqueeItem';
