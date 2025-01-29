import { MetaFunction } from "@remix-run/node";
import AnimatedCounter from "~/components/AnimatedCounter";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "Software Engineering Lab - Universitas Negeri Surabaya" },
    { name: "description", content: "Advanced software engineering education and research facility" },
  ];
};

const studyClubs = [
  {
    name: "Web Development",
    description: "Master modern web development technologies and build responsive, scalable applications. Learn from industry and work on real-world projects.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  },
  {
    name: "Data Science",
    description: "Dive into the world of data science, machine learning, and artificial intelligence. Transform raw data into meaningful insights and solutions.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  },
  {
    name: "DevOps",
    description: "Learn to bridge the gap between development and operations. Master continuous integration, deployment, and modern cloud infrastructure.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
  },
  {
    name: "System Administration",
    description: "Develop expertise in managing and securing computer systems and networks. Learn essential skills for modern IT infrastructure.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />,
  }
];


const getClubDetails = (clubName: string) => {
  const details = {
    "Web Development": [
      "Frontend & Backend Development",
      "React, Node.js, and Modern Frameworks",
      "UI/UX Design Principles",
      "API Development & Integration"
    ],
    "Data Science": [
      "Machine Learning & AI",
      "Data Analysis & Visualization",
      "Python & R Programming",
      "Big Data Technologies"
    ],
    "DevOps": [
      "CI/CD Pipeline Implementation",
      "Docker & Kubernetes",
      "Cloud Services (AWS, GCP, Azure)",
      "Infrastructure as Code"
    ],
    "System Administration": [
      "Network Configuration & Security",
      "Server Management",
      "Linux Administration",
      "Monitoring & Troubleshooting"
    ]
  };
  return details[clubName as keyof typeof details];
};

const getClubSchedule = (clubName: string) => {
  const schedules = {
    "Web Development": "Meets every Tuesday & Thursday",
    "Data Science": "Meets every Monday & Wednesday",
    "DevOps": "Meets every Wednesday & Friday",
    "System Administration": "Meets every Monday & Thursday"
  };
  return schedules[clubName as keyof typeof schedules];
};

const latestProjects = [
  {
    title: "AI-Powered Traffic Management",
    description: "Developing intelligent systems for optimizing urban traffic flow",
    status: "Ongoing",
    progress: 75,
  },
  {
    title: "Smart Campus Initiative",
    description: "Creating an IoT-based infrastructure for campus automation",
    status: "Completed",
    progress: 100,
  },
  {
    title: "Blockchain for Education",
    description: "Implementing secure credential verification system",
    status: "Planning",
    progress: 25,
  }
];

const partnerships = [
  {
    name: "DataCamp",
    logo: "https://www.datacamp.com/datacamp-logo.svg",
    description: "Official learning partner for data science education",
    category: "Education"
  },
  {
    name: "Juniper Networks",
    logo: "https://www.juniper.net/juniper-logo.svg",
    description: "Infrastructure and networking solutions partner",
    category: "Infrastructure"
  },
  {
    name: "Red Hat",
    logo: "https://www.redhat.com/redhat-logo.svg",
    description: "Open source and cloud technology partner",
    category: "Technology"
  },
  {
    name: "Microsoft",
    logo: "https://www.microsoft.com/microsoft-logo.svg",
    description: "Cloud and development tools partner",
    category: "Technology"
  },
  {
    name: "AWS",
    logo: "https://aws.amazon.com/aws-logo.svg",
    description: "Cloud infrastructure partner",
    category: "Infrastructure"
  },
  {
    name: "Google Cloud",
    logo: "https://cloud.google.com/gcloud-logo.svg",
    description: "Cloud and AI technology partner",
    category: "Technology"
  }
];



export default function Index() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-black">
      <Layout>
        {/* Hero Section */}
        <div className="relative flex justify-center pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
          {/* Animated Background */}
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
              {/* Decorative elements */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                bg-gradient-to-r from-apple-blue-500/20 to-purple-500/20
                dark:from-apple-blue-500/10 dark:to-purple-500/10
                rounded-full blur-3xl opacity-30 -z-10" />

              <div className="text-center space-y-6 sm:space-y-8 relative">
                {/* Pre-title */}
                <div className="inline-block animate-fade-in-up">
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full
                         bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Now accepting applications for 2025
                    </span>
                  </div>
                </div>

                {/* Main title */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
                    <span className="inline-block mb-2" style={{ animationDelay: '200ms' }}>
                      Software Engineering
                    </span>
                    <br />
                    <span className="inline-block relativet" style={{ animationDelay: '400ms' }}>
                      Laboratory
                      <svg className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-4 text-apple-blue-500/30 dark:text-apple-blue-400/30" viewBox="0 0 208 9">
                        <path fill="currentColor" d="M5.68 8C37.14 6.35 68.16 5.03 99.18 4.26c31.02-.77 62.04-.98 93.5.43 3.04.14 6.08.3 9.12.47.37.02.7-.27.72-.64.02-.37-.27-.7-.64-.72-31.02-1.41-61.6-1.2-92.18-.43C78.8 4.1 47.78 5.42 16.32 7.07c-3.04.16-6.08.33-9.12.51-.37.02-.66.35-.64.72.02.35.32.63.67.63l-.37-.93h.18-.36z" />
                      </svg>
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300
                       max-w-3xl mx-auto font-light px-4 sm:px-0" style={{ animationDelay: '600ms' }}>
                    Where innovation meets excellence in software development, fostering the next generation of tech leaders
                  </p>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8"
                  style={{ animationDelay: '800ms' }}>
                  <button className="px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900
                           text-lg font-medium hover:shadow-xl hover:scale-105 transform transition-all duration-300
                           shadow-gray-900/10">
                    Apply Now
                  </button>
                  <button className="px-8 py-4 rounded-full border-2 border-gray-900/10 dark:border-white/10
                           text-lg font-medium text-gray-900 dark:text-white
                           hover:bg-gray-900/5 dark:hover:bg-white/5 transition-all duration-300">
                    Explore Research →
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-12 sm:pt-16
     max-w-4xl mx-auto px-4 sm:px-0">
                  {[
                    { label: "Research Projects", value: 50 },
                    { label: "Industry Partners", value: 10 },
                    { label: "Published Papers", value: 100 },
                    { label: "Student Members", value: 50 }
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="text-center group
                                hover:transform hover:scale-110 transition-all duration-300
                                cursor-pointer"
                      style={{ animationDelay: `${1000 + index * 100}ms` }}
                    >
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2
                    group-hover:text-apple-blue-600 dark:group-hover:text-apple-blue-400
                    transition-colors duration-300">
                        <AnimatedCounter end={stat.value} />
                        <span>+</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400
                    group-hover:text-gray-900 dark:group-hover:text-white
                    transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
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
                {[...partnerships, ...partnerships].map((partner, index) => (
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
                {[...partnerships, ...partnerships].map((partner, index) => (
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

        {/* Study Clubs Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-black pb-24 pt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Study Clubs
              </h2>
              <p className="text-base sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
                Join our specialized study clubs and develop your expertise in various domains of software engineering
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {studyClubs.map((club, index) => (
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
                        {getClubDetails(club.name).map((detail, idx) => (
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
                          {getClubSchedule(club.name)}
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

        {/* Latest Projects Section */}
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
              {latestProjects.map((project, index) => (
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

        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
                  from-apple-blue-500/[0.03] via-transparent to-transparent"/>

          <div className="max-w-6xl mx-auto px-6 sm:py-32 sm:pb-48 py-24">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px]
                    bg-gradient-to-r from-apple-blue-500/10 to-purple-500/10
                    dark:from-apple-blue-500/5 dark:to-purple-500/5
                    rounded-full blur-3xl opacity-30 -z-10"/>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Journey Story */}
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                    Begin Your Journey in
                    <br />
                    <span className="text-apple-blue-600 dark:text-apple-blue-400">
                      Software Innovation
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Join a community of passionate developers, researchers, and innovators.
                    Our lab offers state-of-the-art facilities and mentorship from industry experts.
                  </p>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
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
                    ].map((benefit, index) => (
                      <div key={benefit.title} className="group">
                        <div className="flex items-start space-x-4 p-4 rounded-xl
                             bg-white/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30
                             hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-300">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-lg bg-apple-blue-500/10 dark:bg-apple-blue-400/10
                                  flex items-center justify-center
                                  group-hover:bg-apple-blue-500/20 dark:group-hover:bg-apple-blue-400/20
                                  transition-colors duration-300">
                              <svg className="w-5 h-5 text-apple-blue-600 dark:text-apple-blue-400"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Application Card */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600
                         dark:from-gray-400 dark:to-gray-600 rounded-2xl blur opacity-10"/>
                  <div className="relative bg-white dark:bg-gray-800/30 rounded-2xl p-8 md:p-12
                         border border-gray-200/50 dark:border-gray-700/30">
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          Ready to Join?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Applications for Summer 2025 are now open. Submit your application today and
                          take the first step towards your future in software engineering.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <button className="w-full px-8 py-4 rounded-xl bg-gray-900 dark:bg-white
                                 text-white dark:text-gray-900 font-medium
                                 hover:bg-gray-800 dark:hover:bg-gray-100
                                 transform hover:scale-[1.02] transition-all duration-300
                                 shadow-lg shadow-gray-900/10">
                          Apply Now
                        </button>
                        <button className="w-full px-8 py-4 rounded-xl
                                 bg-gray-50 dark:bg-gray-700/50
                                 text-gray-900 dark:text-white font-medium
                                 hover:bg-gray-100 dark:hover:bg-gray-700
                                 transition-all duration-300">
                          Download Information Pack
                        </button>
                      </div>

                      <div className="pt-6 border-t border-gray-200/50 dark:border-gray-700/30">
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <span>Next Intake</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            May 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout >
    </div >
  );
}

