// components/ProjectCard.tsx
type ProjectCardProps = {
    title: string;
    description: string;
    imageSrc: string;
};

export default function ProjectCard({ title, description, imageSrc }: ProjectCardProps) {
    return (
        <div className="w-full max-w-2xl border border-gray-300 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-[300px] object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#1E90FF] mb-3 text-left">{title}</h3>
            <p className="text-base text-gray-700 text-left">{description}</p>
        </div>
    );
}
