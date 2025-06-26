import { motion } from "framer-motion";
import Image from "next/image";

type ExperienceCardProps = {
    logoSrc: string;
    description: string;
    dateRange: string;
    fromLeft?: boolean;
};

export default function ExperienceCard({
    logoSrc,
    description,
    fromLeft = false,
    dateRange,
}: ExperienceCardProps) {
    return (
        <div className="relative w-full flex justify-center">
            <div className="relative flex items-center w-full max-w-4xl">
                {/* Description Card */}
                <motion.div
                    initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: fromLeft ? [-100, 10, 0] : [100, -10, 0] }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className={`absolute top-1/2 -translate-y-1/2 max-w-[320px] border border-gray-300 p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-colors duration-300 will-change-transform
                    left-1/2 ${fromLeft ? "-translate-x-[calc(100%+4.5rem)]" : "translate-x-[calc(4.5rem)]"}
                    `}
                >
                    <p className="text-base text-gray-800 text-left">{description}</p>
                </motion.div>

                {/* Date Range */}
                <motion.div
                    initial={{ opacity: 0, x: fromLeft ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: fromLeft ? [100, -10, 0] : [-100, 10, 0] }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className={`absolute top-1/2 -translate-y-1/2 text-base text-[#000080] text-opacity-70 z-20
                    left-1/2 ${fromLeft ? "translate-x-[calc(4.5rem)] text-left" : "-translate-x-[calc(100%+4.5rem)] text-right"}
                    `}
                >
                    {dateRange}
                </motion.div>

                {/* Centered Button */}
                <motion.button
                    initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: fromLeft ? [-100, 10, 0] : [100, -10, 0] }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="z-10 w-20 h-20 bg-[#f8f8f8] border border-gray-300 rounded-full shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8),_inset_-2px_-2px_4px_rgba(0,0,0,0.1)] flex items-center justify-center mx-auto will-change-transform"
                >
                    <Image src={logoSrc} alt="Company logo" width={40} height={40} />
                </motion.button>
            </div>
        </div>
    );
}
