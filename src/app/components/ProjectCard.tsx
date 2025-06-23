import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

type ProjectCardProps = {
    title: string;
    description: string;
    imageSrc: string;
};

export default function ProjectCard({ title, description, imageSrc }: ProjectCardProps) {

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-2xl border border-gray-300 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer hover:bg-gray-250 will-change-transform"
        >

            <img
                src={imageSrc}
                alt={title}
                className="w-full h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#1E90FF] mb-3 text-left">{title}</h3>
            <p className="text-base text-gray-700 text-left">{description}</p>
        </motion.div>
    );
}
