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
        position: 0,
        name: 'projects',
        href: '/projects',
        icon: <GrProjects />
    },
    {
        position: 1,
        name: 'services',
        href: '/services',
        icon: <MdMiscellaneousServices />
    },
    {
        position: 2,
        name: 'about',
        href: '/about',
        icon: <MdPersonSearch />
    },
    {
        position: 3,
        name: 'tools',
        href: '/tools',
        icon: <GiSkills />
    },
    {
        position: 4,
        name: 'knowledge',
        href: '/knowledge',
        icon: <SiXdadevelopers />
    },
    {
        position: 5,
        name: 'contact',
        href: '/contact',
        icon: <MdConnectWithoutContact />
    },
]

const Navbar = () => {
    const pathName = usePathname()

    if (pathName === "/") {
        return null
    }
    const positionInitial = nav.filter((item) => item.href === pathName)

    const position = positionInitial[0].position

    const [active, setActive] = useState<number>(position ?? 0)

    if (pathName === '/') return
    return (
        <div className="w-full mt-10 pb-4 flex justify-center">
            <div className='w-fit'>
                <div className="relative bg-neutral-800 rounded-full px-2 py-2 flex gap-2 shadow-lg">
                    <span
                        className="absolute top-2 h-10 w-10 rounded-full bg-primary transition-all duration-500 ease-out"
                        style={{
                            transform: `translateX(${active * 120}%)`,
                        }}
                    />
                    {
                        nav.map(({ href, position, icon }, index) => (
                            <Link key={index} href={href} onClick={() => setActive(position)}
                                className={`relative z-10 min-w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 cursor-pointer ${position === index ? "text-white" : "text-primary"} text-xl`}>
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
