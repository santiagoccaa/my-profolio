import { PageContainer } from "@/components"
import { Items } from "./Items"
import { LuDownload } from "react-icons/lu"
import { MdArrowForward } from "react-icons/md"
import Link from "next/link"
import { AnimatedText } from "@/components/Transition"
import { useTranslations } from "next-intl"

export const About = () => {
    const t = useTranslations()
    return (
        <section id="projects" className='relative h-screen flex items-center'>
            <div className='flex justify-between mb-8 absolute top-4 right-4 w-full'>
                <div className='flex gap-2 items-center w-full justify-end'>
                    <span className='w-1/2 h-px bg-white' />
                    <AnimatedText key={t('aboutMe.title')} text={t('aboutMe.title')} className="text-sm uppercase tracking-[0.4em]" />
                </div>
            </div>

            <div className="absolute bottom-32 md:top-1/2 md:-translate-y-1/2 left-0 bg-linear-to-b from-[#0D1117] via-secondary to-[#0D1117] w-full md:w-[30%] h-44 opacity-60" />
            <PageContainer>
                <div className="flex flex-col-reverse md:flex-row md:gap-x-4 lg:gap-x-20 gap-y-8 items-center justify-center">
                    <div className="relative w-full flex justify-center items-center">
                        <div className="w-full h-72 rounded-xl bg-red-500 sm:bg-green-500 md:bg-sky-500 lg:bg-secondary relative">
                            <div className="absolute bottom-0 left-0 bg-black rounded-tr-sm pt-2 pr-2 w-1/2">
                                <button aria-label="dowload cv" className="w-full h-14 bg-secondary rounded-sm shadow-2xl flex items-center justify-center text-md font-medium gap-2 cursor-pointer group">
                                    {t('common.donwload')} <LuDownload size={20} className="group-hover:translate-y-0.5 duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">
                            {t('aboutMe.subtitle')} <br /> My <span className="text-primary">{t('aboutMe.subtitle2')}</span>
                        </h2>
                        <Items />
                        <div className="relative mt-8 hidden">
                            <div className="w-32 h-14 absolute left-4 -top-1 border-2 border-secondary rounded-xs inset-0" />
                            <Link href={"/about"} aria-label="learn more" className="relative w-34 h-12 rounded-xs bg-secondary font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xl active:scale-95 duration-300 text-md group">
                                Learn more <MdArrowForward size={20} className="group-hover:translate-x-2 duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </section>
    )
}
