"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["fullstack developer", "student", "movie lover", "night owl"];
const finalWord = "fullstack developer";

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

  useEffect(() => {
    if (phase !== "name") return;

    const full = "Hi, I'm Will Walsh";
    const timeout = setTimeout(() => {
      setNameText(full.slice(0, nameText.length + 1));
      if (nameText.length + 1 === full.length) {
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
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
      <div
        className={`flex flex-col items-center transition-all duration-500 ${phase !== "name" ? "gap-1" : "gap-0"
          }`}
      >
        <motion.h1
          className="text-4xl font-extrabold"
          initial={{ y: 0 }}
          animate={{
            y:
              phase === "slide" ||
                phase === "prefix" ||
                phase === "looping" ||
                phase === "final"
                ? -30 // 48px = 3rem = Tailwind -translate-y-12
                : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (phase === "slide") {
              setPhase("prefix");
            }
          }}
        >
          {nameText}
        </motion.h1>

        {phase !== "name" && (
          <motion.h2
            className="text-4xl font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {prefixText}
            <span className="text-blue-600">{text}</span>
          </motion.h2>
        )}
      </div>
    </main>
  );
}
