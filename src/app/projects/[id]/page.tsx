"use client";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Project data - this should match the data structure from the main page
const projects = [
  {
    id: "curiosity-stream",
    title: "CuriosityStream Internship",
    description:
      "End to end modular streaming platform powering multiple subscription video-on-demand services including flagship CuriosityStream",
    description2: "20 Million+ subscribers globally",
    fullDescription:
      "At CuriosityStream, I helped build Streamline, a modular streaming platform powering multiple brands. I designed a dynamic infrastructure context system to centralize environment configuration and feature flags, enabling seamless environment switching and backend-driven rollouts. I implemented a token-based authentication and profile management flow with multi-profile support, ensuring secure and scalable session handling. I also developed parallelized data fetching and transformation logic with rate-limited batch calls and error recovery, which improved performance and reliability across search and content pages.",
    achievements: [
      "20 Million users globally supported with scalable infrastructure",
      "Integrated a modern, adaptive video player using Video.js with HLS/DASH support, delivering smooth playback, fallback handling, and cross-device reliability.",
      "Built a scalable content exploration system that dynamically renders carousels and groups based on backend configuration, enabling rapid updates and A/B testing without redeployment.",
    ],
    imageSrc: "/images/curiosityExperience.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Context API",
      "Video.js",
      "HLS.js",
      "CSS",
    ],
    duration: "May 2025 – August 2025",
    category: "Software Engineering",
  },
  {
    id: "stryv-academics",
    title: "Stryv Academics",
    description: "This is a placeholder description for Project 5.",
    fullDescription:
      "At Stryv Academics, I helped build a progressive web app to centralize and scale tutoring operations for the company, replacing manual processes spread across Airtable, WhatsApp, and email. We developed role-based dashboards for tutors, students, parents, and admins with secure authentication, lesson management, and integrated scheduling. My work focused on strengthening admin management tools, lesson and package tracking, and tutor workflows, which laid the groundwork for future updates like payments and real-time messaging.",
    achievements: [
      "Built role-based dashboards and lesson management tools, allowing tutors, students, parents, and admins to schedule, track, and manage sessions in one platform.",
      "Designed and implemented Supabase database schema with row-level security and relational views, enabling secure role-based access and streamlined cross-role data management.",
    ],
    imageSrc: "/images/STRYV.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "SupaBase",
      "ShadCN-UI",
      "Linear",
      "GitHub",
    ],
    duration: "January 2025 – May 2025",
    category: "Fullstack Development",
  },
  {
    id: "global-privacy-control",
    title: "Global Privacy Control— Published by The Washington Post",
    description: "This is a placeholder description for Project 2.",
    fullDescription:
      "Working with 2 other Wesleyan University students and the Consumer Reports Lab, our Global Privacy Control (GPC) testing project investigated whether major retailers were complying with state privacy laws in California and Colorado. By simulating user sessions with GPC signals enabled, adding products to carts, and then monitoring retargeted ads on publisher sites and data captured by Meta Pixel, we curated and tested 40 retailers under controlled conditions. We found that over 20% of sites showed possible violations, with high-confidence cases including American Express, JCPenney, and Uniqlo, indicating non-compliance with CCPA and CPA requirements. Statistical analysis confirmed a significant difference in ad behavior when GPC was enabled versus disabled, providing strong evidence that many companies continue to ignore legally binding privacy requests.",
    achievements: [
      "Published research findings in The Washington Post, bringing international attention to privacy violations.",
      "Uncovered systematic violations of user privacy rights by major advertising networks.",
    ],
    imageSrc: "/images/GPC.png",
    technologies: [
      "Python",
      "Web Scraping",
      "Meta Pixel",
      "Data Analysis",
      "Statistical Modeling",
    ],
    duration: "August 2024 – December 2024",
    category: "Research",
  },
  {
    id: "coursekata-analysis",
    title: "CourseKata Data Analysis",
    description:
      'Led a team of 5 to win "Best Data-Driven Recommendation" at the New England Statistical Society\'s 2024 DataFest...',
    fullDescription:
      "I competed in DataFest 2024, a national data analysis competition with over 100 student coders from colleges including Yale, UConn, Connecticut College, and Trinity. My team, The Sticky Notes, partnered with CourseKata to analyze engagement and performance data from their online statistics textbook. We identified trends in student learning outcomes, showing that engagement and performance declined as chapters progressed, and highlighted specific sections where video content correlated with lower retention. Our findings led us to propose concrete design changes to improve student engagement and retention, and we were awarded Best Data-Driven Recommendation for the strength of our analysis.",
    achievements: [
      'Won "Best Data-Driven Recommendation" award at the New England Statistical Society\'s 2024 DataFest.',
    ],
    imageSrc: "/images/DataFest.png",
    technologies: [
      "Python",
      "Machine Learning",
      "Statistical Analysis",
      "Data Visualization",
    ],
    duration: "April 2024",
    category: "Data Science",
  },
  {
    id: "cappuccino-games",
    title: "Cappuccino Games",
    description: "This is a placeholder description for Project 3.",
    fullDescription:
      "During my internship at Cappuccino Games, I led a team of five to develop a 2D multiplayer platformer. I implemented real-time networking with Photon Unity Networking (PUN), built a custom matchmaking system for fair and responsive gameplay, along with other scalable multiplayer features.",
    achievements: [
      "Optimized multiplayer performance by designing scalable systems that supported smooth synchronization and low-latency gameplay.",
    ],
    imageSrc: "/images/cappuccinoBanner.png",
    technologies: ["Unity", "C#", "WebSocket", "Photo Unity Networking"],
    duration: "May 2023 – July 2023",
    category: "Game Development",
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#000080] mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 bg-[#1E90FF] text-white rounded-lg hover:bg-[#0066CC] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        {/* Back Button */}
        <motion.button
          onClick={() => router.push("/#projects")}
          className="mb-8 flex items-center text-[#1E90FF] hover:text-[#0066CC] transition-colors"
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#000080] mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 mb-2">{project.duration}</p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Description Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-[#000080] mb-6">
            Project Overview
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          {/* Technologies Used */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#000080] mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#1E90FF] text-white rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-xl font-semibold text-[#000080] mb-4">
              Key Achievements
            </h3>
            <ul className="space-y-3 text-gray-700">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#1E90FF] mr-3 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Additional Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-[#000080] mb-6">
            Project Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Duration
              </h3>
              <p className="text-gray-600">{project.duration}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Category
              </h3>
              <p className="text-gray-600">{project.category}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
