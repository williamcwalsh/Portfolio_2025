// components/Navbar.tsx
import Link from "next/link"

export default function Navbar() {
    const navItems = ["Home", "Projects", "Skills", "Experience", "Education", "Contact"]

    return (
        <nav
            className="w-full flex flex-wrap justify-center items-center 
  gap-x-8 gap-y-3 px-8 py-4 rounded-full 
  backdrop-blur-md bg-gray-200/30 border border-white/20 shadow-lg 
  text-base font-semibold text-[#000080]"
        >

            {navItems.map((item) => (
                <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="whitespace-nowrap font-medium hover:text-[#007bff] hover:drop-shadow-[2px_2px_4px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-200"
                >
                    {item}
                </Link>
            ))}
        </nav>

    )
}
