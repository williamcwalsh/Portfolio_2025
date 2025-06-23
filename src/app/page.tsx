"use client";
import Navbar from "./components/Navbar"
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/skills/Skills";



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
      title: "CuriosityStream",
      description: "This is a placeholder description for Project 1.",
      imageSrc: "/images/placeholder.jpg",
    },
    {
      title: "Global Privacy Control— Published by WSJ",
      description: "This is a placeholder description for Project 2.",
      imageSrc: "/images/placeholder.jpg",
    },
    {
      title: "Cappuccino Games",
      description: "This is a placeholder description for Project 3.",
      imageSrc: "/images/placeholder.jpg",
    },
    {
      title: "CourseKata Data Analysis",
      description:
        "Led a team of 5 to win “Best Data-Driven Recommendation” at the New England Statistical Society’s 2024 DataFest...",
      imageSrc: "/images/placeholder.jpg",
    },
    {
      title: "Project 5",
      description: "This is a placeholder description for Project 5.",
      imageSrc: "/images/placeholder.jpg",
    },
    {
      title: "Project 6",
      description: "This is a placeholder description for Project 6.",
      imageSrc: "/images/placeholder.jpg",
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
                setHasSlid(true); // ✅ mark when the first line finishes animating
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

        {hasSlid && (
          <motion.div
            initial={{ opacity: 0, y: 80, height: "1.5rem" }} // small circle height
            animate={{ opacity: 1, y: 0, height: "25rem" }}   // full vertical bar height
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 rounded-full bg-[#000080] shadow-md pointer-events-none"
            style={{ top: '1100px' }}
          />
        )}

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
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                fromLeft={i % 2 === 1}
              />
            ))}
          </div>
        </section>
      </motion.div>
      <motion.div
        key="skills-section" // <- force re-render animation
        id="skills"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto px-4 mt-[400px]"
      >
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-[#000080] mb-12">Skills</h2>
          <Skills />
        </section>
      </motion.div>

    </>

  );

}
