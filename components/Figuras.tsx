"use client"

import { usePathname } from "next/navigation"
import { FaXmark } from "react-icons/fa6"

export const Figuras = () => {
    const pathName = usePathname()
    if (pathName === '/') return
    return (
        <>
            <div className="absolute bottom-20 left-8 border-4 border-primary p-2 rounded-full" />
            <div className="absolute bottom-40 left-16 bg-primary p-1 rounded-full" />
            <div className="absolute bottom-[40%] right-8 text-primary text-2xl rotate-6" >
                <FaXmark />
            </div>
        </>
    )
}

