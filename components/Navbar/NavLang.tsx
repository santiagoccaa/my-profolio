"use client"

import { FaHome } from 'react-icons/fa'
import LanguageSelector from '../LanguajeSelector'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavLang = () => {
    const pathName = usePathname()
    return (
        <div className="absolute top-4 left-4 flex gap-3 items-center">
            {pathName !== "/" && <Link href={"/"}
                className={`relative z-10 w-10 h-10 hover:bg-primary rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 cursor-pointer`}>
                <FaHome size={20} />
            </Link>}
            <LanguageSelector />
        </div>
    )
}
