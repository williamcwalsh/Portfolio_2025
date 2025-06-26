import Image from "next/image";

type EducationCardProps = {
  logoSrc: string;
  title: string;
  degree: string;
  graduationYear: string;
  gpa: string;
  stemGpa: string;
  major: string;
  deansList: string;
};

export default function EducationCard({
  logoSrc,
  title,
  degree,
  graduationYear,
  gpa,
  stemGpa,
  major,
  deansList,
}: EducationCardProps) {
  return (
    <div className="w-full max-w-2xl border border-gray-300 p-8 rounded-xl shadow-lg flex flex-row gap-8 items-center">
      <div className="flex-shrink-0">
        <Image src={logoSrc} alt="School logo" width={120} height={120} className="rounded-md" />
      </div>
      <div className="flex-1 text-left">
        <h3 className="text-2xl font-semibold text-[#D72331] mb-3 text-left">{title}</h3>
        <div className="text-base text-black mb-1">{degree}</div>
        <div className="text-base text-gray-800 mb-1">Graduate in {graduationYear}</div>
        <div className="text-base text-gray-800 mb-1">GPA {gpa}</div>
        <div className="text-base text-gray-800 mb-1">STEM GPA {stemGpa}</div>
        <div className="text-base text-gray-800 mb-1">{major}</div>
        <div className="text-base text-gray-800">{deansList}</div>
      </div>
    </div>
  );
} 