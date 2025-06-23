import SkillBadge from "./SkillBadge";
import { motion } from "framer-motion";

const skills = [
    { label: "TypeScript", imageSrc: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000" },
    { label: "Node.js", imageSrc: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
    { label: "GraphQL", imageSrc: "https://img.icons8.com/?size=100&id=zdI5E8moxhs-&format=png&color=000000" },
    { label: "PHP", imageSrc: "https://img.icons8.com/?size=100&id=f0R4xVI4Sc8O&format=png&color=000000" },
    { label: "C#", imageSrc: "https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg" },
    { label: "Python", imageSrc: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
    { label: "Laravel", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" },
    { label: "SQL" },
    { label: "PostgreSQL", imageSrc: "https://img.icons8.com/?size=100&id=LwQEs9KnDgIo&format=png&color=000000" },
    { label: "MySQL", imageSrc: "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" },
    { label: "DynamoDB", imageSrc: "https://img.icons8.com/?size=100&id=yg89IhMa2QQk&format=png&color=000000" },
    { label: "REST APIs" },
    { label: "Elasticsearch", imageSrc: "https://img.icons8.com/?size=100&id=8WYF248rC5Yy&format=png&color=000000" },
    { label: "Logstash", imageSrc: "https://img.icons8.com/?size=100&id=COGDdXNGIF6r&format=png&color=000000" },
    // Add others
];

type Props = { fromLeft?: boolean };

export default function BackendSkills({ fromLeft = true }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: fromLeft ? [-100, 10, 0] : [100, -10, 0] }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8 flex gap-40 items-start"
        >
            <div className="mb-8 flex gap-40 items-start">
                <div className="min-w-[90px] pt-1 text-xl font-medium">Backend</div>
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill) => (
                        <SkillBadge key={skill.label} {...skill} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
