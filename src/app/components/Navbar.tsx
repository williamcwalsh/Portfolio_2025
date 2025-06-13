// components/Navbar.tsx
import Link from "next/link"

export default function Navbar() {
    const navItems = ["Home", "Projects", "Skills", "Experience", "Education", "Contact"]

    return (
        <nav className="fixed top-4 text-[#000080] left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-gray-200/30 border border-white/20 shadow-lg rounded-full px-6 py-3 flex gap-6 items-center text-sm md:text-base"
        >
            {navItems.map((item) => (
                <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#007bff] transition-colors font-medium"
                >
                    {item}
                </Link>
            ))}
        </nav>
    )
}
