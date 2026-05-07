"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaHome } from "react-icons/fa"
import { GiSkills } from "react-icons/gi"
import { GrProjects } from "react-icons/gr"
import { MdConnectWithoutContact, MdMiscellaneousServices, MdPersonSearch } from "react-icons/md"
import { SiXdadevelopers } from "react-icons/si"

const navItems = [

    {
        hero: 'home',
        href: '/',
        icon: <FaHome />
    },
    {
        name: 'projects',
        href: '/projects',
        icon: <GrProjects />
    },
    {
        name: 'services',
        href: '/services',
        icon: <MdMiscellaneousServices />
    },
    {
        name: 'about',
        href: '/about',
        icon: <MdPersonSearch />
    },
    {
        name: 'skills',
        href: '/skills',
        icon: <GiSkills />
    },
    {
        name: 'tools',
        href: '/tools',
        icon: <SiXdadevelopers />
    },
    {
        name: 'contact',
        href: '/contact',
        icon: <MdConnectWithoutContact />
    },
]

export const Test = () => {
    const [active, setActive] = useState(0)

    return (
        <div className="flex justify-center items-center h-screen bg-neutral-900">
            <div className="relative bg-neutral-800 rounded-full px-2 py-2 flex gap-2 shadow-lg">

                {/* Indicador líquido */}
                <span
                    className="absolute top-2 h-10 w-10 rounded-full bg-primary transition-all duration-500 ease-out"
                    style={{
                        transform: `translateX(${active * 120}%)`,
                    }}
                />

                {navItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`relative z-10 min-w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 cursor-pointer ${active === index ? "text-white" : "text-primary"} text-xl`}
                    >
                        {item.icon}
                    </button>
                ))}
            </div>
        </div>
    )
}