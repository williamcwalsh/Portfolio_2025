import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  description2?: string;
  imageSrc: string;
  fromLeft?: boolean;
};

export default function ProjectCard({
  id,
  title,
  description,
  description2,
  imageSrc,
  fromLeft,
}: ProjectCardProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on the Washington Post link
    if ((e.target as HTMLElement).tagName === "A") {
      return;
    }
    router.push(`/projects/${id}`);
  };

  const renderTitle = () => {
    if (title.includes("The Washington Post")) {
      const parts = title.split("The Washington Post");
      return (
        <>
          {parts[0]}
          <a
            href="https://www.washingtonpost.com/technology/2025/04/01/data-privacy-laws-ignoring/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000080] hover:text-[#1E90FF] transition-colors underline"
            onClick={(e) => e.stopPropagation()}
          >
            The Washington Post
          </a>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: fromLeft ? [-100, 10, 0] : [100, -10, 0] }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      onClick={handleClick}
      className="w-full max-w-2xl border border-gray-300 p-8 rounded-xl shadow-lg hover:shadow-xl cursor-pointer hover:bg-gray-250 will-change-transform"
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[300px] object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-semibold text-[#1E90FF] mb-3 text-left">
        {renderTitle()}
      </h3>
      <p className="text-base text-gray-700 text-left">{description}</p>
      {description2 && (
        <p className="text-base font-bold text-gray-700 text-left">
          {description2}
        </p>
      )}
    </motion.div>
  );
}
