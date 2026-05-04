'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { GiSkills } from "react-icons/gi"
import { GrProjects } from "react-icons/gr"
import { MdConnectWithoutContact, MdMiscellaneousServices, MdPersonSearch } from "react-icons/md"
import { SiXdadevelopers } from "react-icons/si"

const nav = [

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
        name: 'tools',
        href: '/tools',
        icon: <GiSkills />
    },
    {
        name: 'knowledge',
        href: '/knowledge',
        icon: <SiXdadevelopers />
    },
    {
        name: 'contact',
        href: '/contact',
        icon: <MdConnectWithoutContact />
    },
]

const Navbar = () => {
    const [active, setActive] = useState(0)

    const pathName = usePathname()
    if (pathName === '/') return
    return (
        <div className="w-full bg-red-100 mt-10 pb-4 flex justify-center">
            <div className='w-fit'>
                <div className="relative bg-neutral-800 rounded-full px-2 py-2 flex gap-2 shadow-lg">
                    <span
                        className="absolute top-2 h-10 w-10 rounded-full bg-primary transition-all duration-500 ease-out"
                        style={{
                            transform: `translateX(${active * 120}%)`,
                        }}
                    />
                    {
                        nav.map(({ href, icon }, index) => (
                            <Link key={index} href={href} onClick={() => setActive(index)}
                                className={`relative z-10 min-w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 cursor-pointer ${active === index ? "text-white" : "text-primary"} text-xl`}>
                                {icon}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
