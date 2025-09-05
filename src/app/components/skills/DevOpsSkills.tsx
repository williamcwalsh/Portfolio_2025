import SkillBadge from "./SkillBadge";
import { motion } from "framer-motion";

const skills = [
  {
    label: "Git",
    imageSrc:
      "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  },
  {
    label: "Jupyter Notebook",
    imageSrc:
      "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  { label: "Firefox WebExtensions API" },
  { label: "HLS.js" },
];

type Props = { fromLeft?: boolean };

export default function DevOpsSkills({ fromLeft = true }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
        whileInView={{
          opacity: 1,
          x: fromLeft ? [-100, 10, 0] : [100, -10, 0],
        }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-8 flex gap-40 items-start"
      >
        <div className="min-w-[90px] text-[#000080] pt-1 text-xl font-medium">
          Development Tools
        </div>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <SkillBadge key={skill.label} {...skill} />
          ))}
        </div>
      </motion.div>
      <hr className="border-t border-grey-400 opacity-40 my-6" />
    </>
  );
}
