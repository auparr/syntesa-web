export type ClubName = "Web Development" | "Data Science" | "DevOps" | "System Administration";

export interface TypeStudyClub {
    readonly name: ClubName;
    readonly description: string;
    readonly icon: JSX.Element;
}

export type ClubDetails = Record<ClubName, readonly string[]>;
export type ClubSchedules = Record<ClubName, string>;

interface StudyClubsProps {
    studyClubs: readonly TypeStudyClub[];
    getClubDetails: (club: ClubName) => string[];
    getClubSchedule: (club: ClubName) => string;
}

export default function StudyClubs(props: StudyClubsProps) {
    return (
        <div className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-black pb-24 pt-16 overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0" aria-hidden="true">
                {/* SVG Pattern Background */}
                <svg className="absolute w-full h-full opacity-[0.03] dark:opacity-[0.05]"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>

                {/* Animated Blobs */}
                <div className="absolute top-0 left-0 right-0 bottom-0">
                    <div
                        className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/30
                                 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob">
                    </div>
                    <div
                        className="absolute top-1/3 -right-10 w-72 h-72 bg-yellow-200 dark:bg-yellow-900/30
                                 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000">
                    </div>
                    <div
                        className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 dark:bg-pink-900/30
                                 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000">
                    </div>
                </div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Study Clubs
                    </h2>
                    <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
                        Join our specialized study clubs and develop your expertise in various domains of software engineering
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {props.studyClubs.map((club, index) => (
                        <div
                            key={club.name}
                            className="relative group mx-4 sm:mx-0"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-400 dark:to-gray-600
                         rounded-xl sm:rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500">
                            </div>
                            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8
                                  bg-white dark:bg-gray-800/30 p-6 sm:p-8 rounded-xl sm:rounded-2xl
                                  border border-gray-200/50 dark:border-gray-700/30
                                  hover:border-apple-blue-500/50
                                  transition-all duration-300
                                  transform hover:-translate-y-1 hover:shadow-xl">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16
                                      bg-gradient-to-br from-gray-900 to-gray-700
                                      dark:from-white dark:to-gray-300
                                      rounded-xl sm:rounded-2xl
                                      flex items-center justify-center
                                      shadow-lg transform
                                      group-hover:scale-110 group-hover:rotate-6
                                      group-hover:animate-pulse-slow
                                      transition duration-500">
                                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white dark:text-gray-900"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            {club.icon}
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-grow text-center sm:text-left">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3
                           group-hover:text-gray-700 dark:group-hover:text-gray-300
                           transition duration-300">
                                        {club.name}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4">
                                        {club.description}
                                    </p>
                                    <div className="space-y-2">
                                        {props.getClubDetails(club.name).map((detail, idx) => (
                                            <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400
                                          justify-center sm:justify-start">
                                                <svg className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 order-2 sm:order-1">
                                            {props.getClubSchedule(club.name)}
                                        </span>
                                        <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-900 dark:text-white
                                 bg-gray-100 dark:bg-gray-700/50 rounded-full
                                 hover:bg-gray-200 dark:hover:bg-gray-700
                                 transition duration-300 order-1 sm:order-2">
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}