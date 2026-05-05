import { PageContainer, TitlePage } from "@/components"
import { Items } from "./Items"
import { LuDownload } from "react-icons/lu"
import { MdArrowForward } from "react-icons/md"
import Link from "next/link"
import { AnimatedText, MotionTransition } from "@/components/Transition"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const AboutPage = () => {
    const t = useTranslations()
    return (
        <section id="projects" className='relative'>

            <div className="absolute hidden bottom-32 md:top-1/2 md:-translate-y-1/2 left-0 bg-linear-to-b from-[#0D1117] via-secondary to-[#0D1117] w-full md:w-[30%] h-44 opacity-60" />
            <PageContainer>
            <TitlePage title="aboutMe.title" />

                <div className="flex flex-col-reverse md:flex-row md:gap-x-4 lg:gap-x-20 gap-y-8 items-center justify-center">
                    <div className="relative w-full lg:w-1/2 flex items-end justify-end">
                        <MotionTransition position="left">
                            <div className="w-110 aspect-square rounded-full relative overflow-hidden">
                                <div className="bg-linear-to-b to-primary from-secondary w-80 aspect-square rounded-full absolute right-12 bottom-0">
                                </div>
                                <div className="w-120 h-120 absolute bottom-0 -right-10">
                                    <Image src={"/santiago2.png"} className="grayscale-5" alt="student" fill sizes="400px" />
                                </div>
                            </div>
                        </MotionTransition>

                        <div className="absolute bottom-0 left-0 w-full">
                            <MotionTransition position="top">
                                <a aria-label="dowload cv"
                                    target="_blank"
                                    href="/CV-Santiago.pdf"
                                    className="h-14 bg-secondary rounded-sm shadow-2xl flex items-center justify-center text-md font-medium gap-2 cursor-pointer group w-50 hover:shadow-xl hover:shadow-primary hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                                >
                                    {t('common.donwload')} <LuDownload size={20} className="group-hover:translate-y-0.5 duration-300" />
                                </a>
                            </MotionTransition>

                        </div>
                    </div>

                    <div>
                        <MotionTransition position="bottom">
                            <h2 className="text-3xl">
                                {t('aboutMe.subtitle')} <br /> My <span className="text-primary">{t('aboutMe.subtitle2')}</span>
                            </h2>
                        </MotionTransition>
                        <Items />
                        {/* button para ver mas TODO */}
                        <div className="relative mt-8">
                            <div className="w-32 h-14 absolute left-4 -top-1 border-2 border-secondary rounded-xs inset-0" />
                            <Link href={"/about"} aria-label="learn more" className="relative w-34 h-12 rounded-xs bg-secondary font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xl active:scale-95 duration-300 text-md group">
                                {t('common.contact')} <MdArrowForward size={20} className="group-hover:translate-x-2 duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </section >
    )
}
