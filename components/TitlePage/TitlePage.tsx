"use client"

import { usePathname } from 'next/navigation'
import { AnimatedText } from '../Transition'
import { useTranslations } from 'next-intl'
import { FaHome } from 'react-icons/fa'
import LanguageSelector from '../LanguajeSelector'
import Link from 'next/link'
import { PageContainer } from '../PageContainer'

interface TitlePageProp {
    title: string
}

export const TitlePage = ({ title }: TitlePageProp) => {
    const pathName = usePathname()

    const t = useTranslations()

    return (
        <PageContainer>
            <div className='flex justify-between pt-2 mb-4'>
                <div className="flex gap-3 items-center">
                    {pathName !== "/" && <Link href={"/"}
                        className={`relative z-10 w-10 h-10 hover:bg-primary rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 cursor-pointer`}>
                        <FaHome size={20} />
                    </Link>}
                    <LanguageSelector />
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 items-center w-full justify-end'>
                        <span className='w-10 lg:w-full max-w-1/2 h-px bg-white' />
                        <AnimatedText key={t(title)} text={t(title)} className="text-sm uppercase tracking-[0.4em]" />
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}
