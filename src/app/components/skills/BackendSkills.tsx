import SkillBadge from "./SkillBadge";

const skills = [
    { label: "TypeScript", imageSrc: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000" },
    { label: "Node.js", imageSrc: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000" },
    { label: "GraphQL", imageSrc: "https://img.icons8.com/?size=100&id=zdI5E8moxhs-&format=png&color=000000" },
    // Add others
];

export default function BackendSkills() {
    return (
        <div className="flex flex-wrap items-center gap-4 mb-8">
            <h3 className="text-xl font-semibold text-left w-full sm:w-auto min-w-[90px] mr-40">
                Backend
            </h3>
            {skills.map((skill) => (
                <SkillBadge key={skill.label} {...skill} />
            ))}
        </div>
    );
}
