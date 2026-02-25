'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaHome } from "react-icons/fa"
import { GiSkills } from "react-icons/gi"
import { GrProjects } from "react-icons/gr"
import { MdConnectWithoutContact, MdMiscellaneousServices, MdPersonSearch } from "react-icons/md"
import { SiXdadevelopers } from "react-icons/si"

const nav = [

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

const Navbar = () => {
    const pathName = usePathname()
    if (pathName === '/') return
    return (
        <div className='w-fit px-4 py-2 rounded-full absolute left-1/2 overflow-hidden -translate-x-1/2 bottom-4 z-40 flex items-center gap-4'>
            <div className="absolute w-full h-full bg-primary opacity-50 top-0 left-0" />
            {
                nav.map(({ href, icon }, index) => (
                    <Link key={index} href={href} className="relative">
                        <span className={`${pathName === href && 'text-primary'} transition-all duration-300 text-2xl`}>
                            {icon}
                        </span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Navbar
