import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

type ProjectCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    fromLeft?: boolean;
};

export default function ProjectCard({ title, description, imageSrc, fromLeft }: ProjectCardProps) {

    return (
        <motion.div
            initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: fromLeft ? [-100, 10, 0] : [100, -10, 0] }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="w-full max-w-2xl border border-gray-300 p-8 rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:bg-gray-250 will-change-transform"
        >


            <img
                src={imageSrc}
                alt={title}
                className="w-full h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#1E90FF] mb-3 text-left">
                {title}
            </h3>
            <p className="text-base text-gray-700 text-left">{description}</p>
        </motion.div>


    );
}
