"use client";
import Navbar from "./components/Navbar"
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/skills/Skills";
import ExperienceCard from "./components/ExperienceCard";
import EducationCard from "./components/EducationCard";
import ContactSection from "./components/ContactSection";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["fullstack developer", "student", "movie lover", "night owl"];
const finalWord = "fullstack developer.";

export default function Home() {
  const [nameText, setNameText] = useState("");
  const [prefixText, setPrefixText] = useState("");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [phase, setPhase] = useState<
    "name" | "slide" | "prefix" | "looping" | "final"
  >("name");
  const [done, setDone] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [hasSlid, setHasSlid] = useState(false);
  const projects = [
    {
      id: "curiosity-stream",
      title: "CuriosityStream Internship",
      description: "End to end modular streaming platform powering multiple subscription video-on-demand services including flagship CuriosityStream.",
      description2: "20 Million+ subscribers globally.",
      imageSrc: "/images/curiosityExperience.jpg",
    },
    {
      id: "stryv-academics",
      title: "Stryv Academics",
      description: "Progressive web application centralizing tutoring management for Stryv Academics, with role-based scheduling, payments, and communication for students, parents, tutors, and admins.",
      imageSrc: "/images/STRYV.png",
    },
    {
      id: "global-privacy-control",
      title: "Global Privacy Control— Published by The Washington Post",
      description: "Research project testing Global Privacy Control (GPC) compliance across major retailer websites, uncovering widespread non-compliance and statistically significant evidence of illegal retargeted advertising.",
      imageSrc: "/images/GPC.png",
    },
    {
      id: "coursekata-analysis",
      title: "CourseKata Data Analysis",
      description:
        "Led a team of 5 to win \"Best Data-Driven Recommendation\" at the New England Statistical Society's 2024 DataFest.",
      imageSrc: "/images/DataFest.png",
    },
    {
      id: "cappuccino-games",
      title: "Cappuccino Games",
      description: "This is a placeholder description for Project 3.",
      imageSrc: "/images/cappuccinoBanner.png",
    },
  ];


  useEffect(() => {
    if (phase !== "name") return;

    const full = "Hi, I'm Will Walsh";
    const timeout = setTimeout(() => {
      setNameText(full.slice(0, nameText.length + 1));
      if (nameText.length + 1 === full.length) {
        setShowNavbar(true);
        setTimeout(() => setPhase("slide"), 200);
      }

    }, 60);

    return () => clearTimeout(timeout);
  }, [nameText, phase]);

  useEffect(() => {
    if (phase !== "prefix") return;

    const full = "I'm a ";
    const timeout = setTimeout(() => {
      setPrefixText(full.slice(0, prefixText.length + 1));
      if (prefixText.length + 1 === full.length) {
        setTimeout(() => setPhase("looping"), 400);
      }
    }, 60);

    return () => clearTimeout(timeout);
  }, [prefixText, phase]);

  useEffect(() => {
    if (!["looping", "final"].includes(phase) || done) return;

    const currentWord = phase === "looping" ? words[index] : finalWord;
    const fullLength = currentWord.length;
    const currentLength = text.length;

    const isTyping = !isDeleting && currentLength < fullLength;
    const isFinishedTyping = !isDeleting && currentLength === fullLength;
    const isDeletingPhase = isDeleting && currentLength > 0;
    const isDeleted = isDeleting && currentLength === 0;

    const timeout = setTimeout(
      () => {
        if (isTyping) {
          setText(currentWord.slice(0, currentLength + 1));
        } else if (isFinishedTyping) {
          if (phase === "looping") {
            setTimeout(() => setIsDeleting(true), 600);
          } else {
            setDone(true);
          }
        } else if (isDeletingPhase) {
          setText(currentWord.slice(0, currentLength - 1));
        } else if (isDeleted) {
          if (phase === "looping") {
            const nextIndex = index + 1;
            if (nextIndex < words.length) {
              setIndex(nextIndex);
              setIsDeleting(false);
            } else {
              setPhase("final");
              setIsDeleting(false);
            }
          }
        }
      },
      isDeleting ? 50 : 70
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, phase, done]);

  const experiences = [
    {
      logoSrc: "/images/curiosity.png",
      description: "Worked on the CuriosityU app's onboarding flow, password reset, and localization pipeline.",
      dateRange: "January 2024 – March 2025",
    },
    {
      logoSrc: "/images/curiosity.png",
      description: "Fullstack developer for Stryv Academics",
      dateRange: "January 2025 – May 2025",
    },
    {
      logoSrc: "/images/CR.png",
      description: "Published in The Washington Post for uncovering illegal ad practices under Global Privacy Control laws.",
      dateRange: "January 2024 – March 2025",
    },
    {
      logoSrc: "/images/cappuccino.png",
      description: "Led statistical analysis for CourseKata, winning a top award at DataFest 2024.",
      dateRange: "January 2024 – March 2025",
    },
  ];

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center w-full max-w-screen-md mx-auto">
        <div
          className={`flex flex-col items-center transition-all duration-500 ${phase !== "name" ? "gap-1" : "gap-0"}`}
        >
          <motion.h1
            className="text-4xl font-extrabold text-[#000080]"
            initial={{ y: 0 }}
            animate={{
              y:
                phase === "slide" ||
                  phase === "prefix" ||
                  phase === "looping" ||
                  phase === "final"
                  ? -30
                  : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={() => {
              if (phase === "slide") {
                setPhase("prefix");
                setHasSlid(true); //  mark when the first line finishes animating
              }
            }}
          >
            {nameText}
          </motion.h1>

          <div className="min-h-[3.5rem]">
            {(phase !== "name" || prefixText.length > 0) && (
              <motion.h2
                className="inline-block text-4xl font-extrabold text-[#000080]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {prefixText}
                <span className="text-[#1E90FF] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.25)]">
                  {text}
                </span>
              </motion.h2>
            )}
          </div>
        </div>
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={showNavbar ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-[700px]"
        >
          <Navbar />
        </motion.div>

        {/* wrap in a div class with relative position, then position bar with absolute top-0 */}
        <div className="relative mt-[15rem] flex justify-center">
          {hasSlid && (
            <motion.div
              initial={{ opacity: 0, y: 80, height: "1.5rem" }}
              animate={{ opacity: 1, y: 0, height: "25rem" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 w-1.5 rounded-full bg-[#000080] shadow-md pointer-events-none"
            />
          )}
        </div>
      </main>
      {/*  Always-rendered Projects Section in separate container */}
      <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-screen-md mx-auto px-4 mt-[400px]"
      >
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-[#000080] mb-12">Projects</h2>
          <div className="flex flex-col gap-12 items-center">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                id={project.id}
                title={project.title}
                description={project.description}
                description2={project.description2}
                imageSrc={project.imageSrc}
                fromLeft={i % 2 === 1}
              />
            ))}
          </div>
        </section>
      </motion.div>
      {/* we need the div here to reserve the space for growing separator bar */}
      <div className="relative h-[25rem] my-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, height: "1.5rem" }}
          whileInView={{ opacity: 1, height: "25rem" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: .5, ease: "easeOut" }}
          className="w-1.5 bg-[#000080] rounded-full shadow-md pointer-events-none"
        />
      </div>
      <motion.div
        key="skills-section" // <- force re-render animation
        id="skills"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto px-4"
      >
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-[#000080] mb-12">Skills</h2>
          <Skills />
        </section>
      </motion.div>
      <div className="relative h-[25rem] my-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, height: "1.5rem" }}
          whileInView={{ opacity: 1, height: "25rem" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: .5, ease: "easeOut" }}
          className="w-1.5 bg-[#000080] rounded-full shadow-md pointer-events-none"
        />
      </div>

      <motion.div
        id="experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-screen-md mx-auto px-4"
      >
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-[#000080] mb-12">Experience</h2>
          <div className="relative h-[50rem] my-12 flex justify-center">
            <motion.div
              initial={{ opacity: 0, height: "1.5rem" }}
              whileInView={{ opacity: 1, height: "50rem" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: .5, ease: "easeOut" }}
              className="w-3 bg-white/90 border border-white/20 rounded-full shadow-inner shadow-white/10 pointer-events-none"
            />
          </div>
          <div className="flex flex-col gap-24 -mt-[45rem] z-10 relative">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={i}
                logoSrc={exp.logoSrc}
                description={exp.description}
                dateRange={exp.dateRange}
                fromLeft={i % 2 === 0}
              />
            ))}
          </div>
        </section>
      </motion.div>
      <motion.div
        id="education"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-screen-md mx-auto px-4"
      >
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-[#000080] mb-12">My Education</h2>
          <div className="flex flex-col items-center">
            <EducationCard
              logoSrc="/images/wes.png"
              title="Wesleyan University"
              degree="Bachelor of Arts"
              graduationYear="2027"
              gpa="3.8/4"
              stemGpa="3.9/4"
              major="Major in Computer Science"
              deansList="Dean's List Freshman, Sophomore Year"
            />
          </div>
        </section>
      </motion.div>
      <ContactSection />
    </>
  );
}
