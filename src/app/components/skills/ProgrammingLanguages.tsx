import SkillBadge from "./SkillBadge";
import { motion } from "framer-motion";

const skills = [
  {
    label: "Python",
    imageSrc:
      "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    label: "C++",
    imageSrc:
      "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
  },
  {
    label: "C#",
    imageSrc: "https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg",
  },
  {
    label: "Java",
    imageSrc:
      "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  },
  {
    label: "PHP",
    imageSrc:
      "https://img.icons8.com/?size=100&id=f0R4xVI4Sc8O&format=png&color=000000",
  },
  {
    label: "JavaScript",
    imageSrc:
      "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    label: "SQL",
    imageSrc:
      "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
];

type Props = { fromLeft?: boolean };

export default function ProgrammingLanguages({ fromLeft = true }: Props) {
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
        <div className="mb-8 flex gap-40 items-start">
          <div className="min-w-[90px] text-[#000080] pt-1 text-xl text-dark-blue font-medium">
            Languages
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill.label} {...skill} />
            ))}
          </div>
        </div>
      </motion.div>
      <hr className="border-t border-grey-400 opacity-40 my-6" />
    </>
  );
}
