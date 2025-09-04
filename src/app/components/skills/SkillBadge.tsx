type SkillBadgeProps = {
    label: string;
    imageSrc?: string;
};

export default function SkillBadge({ label, imageSrc }: SkillBadgeProps) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border border-black/10 text-base">
            {imageSrc && <img src={imageSrc} alt={label} className="w-6 h-6" />}
            <span className="text-[#000080]">{label}</span> {/* this is dark blue, should not be hardcoded */}
        </div>
    );
}
