interface Project {
    title: string;
    description: string;
    status: string;
    progress: number;
}

export default function Projects(props: { latestProjects: Project[] }) {
    return (
        <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50
                dark:from-gray-900/50 dark:via-black dark:to-gray-900/50 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Latest Projects
                    </h2>
                    <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover our ongoing research and development initiatives
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {props.latestProjects.map((project, index) => (
                        <div key={project.title}
                            className="group relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600
                         dark:from-gray-400 dark:to-gray-600 rounded-xl sm:rounded-2xl opacity-0
                         group-hover:opacity-10 transition-opacity duration-500"/>
                            <div className="bg-white dark:bg-gray-800/30 rounded-xl sm:rounded-2xl p-6 sm:p-8
                         border border-gray-200/50 dark:border-gray-700/30
                         transform transition-all duration-500
                         hover:translate-y-[-4px]">
                                <div className="mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 rounded-xl bg-gradient-to-br
                            from-gray-900 to-gray-700 dark:from-white dark:to-gray-300
                            flex items-center justify-center transform
                            group-hover:rotate-6 transition-transform duration-300">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-gray-900"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {project.status === 'Completed' ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            ) : project.status === 'Planning' ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M19 9l-7 7-7-7" />
                                            )}
                                        </svg>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            {project.progress}%
                                        </span>
                                    </div>
                                    <div className="relative w-full h-1.5 sm:h-2 bg-gray-200 dark:bg-gray-700
                            rounded-full overflow-hidden">
                                        <div className={`absolute top-0 left-0 h-full rounded-full
                              transition-all duration-500 ease-out
                              ${project.status === 'Completed'
                                                ? 'bg-green-500 dark:bg-green-400'
                                                : 'bg-gray-900 dark:bg-white'}`}
                                            style={{ width: `${project.progress}%` }} />
                                    </div>
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium
                              ${project.status === 'Completed'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400'
                                                : project.status === 'Planning'
                                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-400'
                                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-400'
                                            }`}>
                                            {project.status}
                                        </span>
                                        <button className="text-sm font-medium text-gray-900 dark:text-white
                                 hover:text-gray-600 dark:hover:text-gray-300
                                 transition-colors duration-300
                                 w-full sm:w-auto text-center sm:text-left">
                                            View Details →
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