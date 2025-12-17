"use client"

import { PageContainer, TitleSection } from "@/components"
import { MotionTransition } from "@/components/Transition"
import { PROJECT_GLASSES, PROJECT_TASTENEST, PROJECT_VOYAGGI } from "@/constants/images/images"
import { taskFlowApi, tasteNest, voyaggi } from "@/constants/projects"
import { usePorfolioStore } from "@/store/contextPorpofolio"
import Image from "next/image"
import { FaXmark } from "react-icons/fa6"
import { HiArrowsPointingOut } from "react-icons/hi2"

const projectsData = [
    {
        id: 'taste-nest',
        title: 'Taste Nest',
        type: 'Front end',
        image: PROJECT_GLASSES,
        project: tasteNest,
        polygonClass: 'polygon1',
        cardHeight: 'h-96',
        align: 'left',
        position: "left"
    },
    {
        id: 'voyaggi',
        title: 'Voyaggi',
        type: 'Full stack',
        image: PROJECT_VOYAGGI,
        project: voyaggi,
        polygonClass: 'polygon2',
        cardHeight: 'h-89',
        align: 'right',
        position: "top"
    },
    {
        id: 'taskflow',
        title: 'TaskFlow API',
        type: 'Back end',
        image: PROJECT_TASTENEST,
        project: taskFlowApi,
        polygonClass: 'polygon3',
        cardHeight: 'h-96',
        align: 'left',
        position: "right"
    },
] as const

export const Projects = () => {

    const { setOpenModal, setProject } = usePorfolioStore()

    return (
        <section id="projects" className='my-16 relative'>
            <div className="w-full h-20 opacity-50 absolute bottom-0 left-0" />
            <PageContainer>
                <div className="absolute bottom-20 left-8 border-4 border-primary p-2 rounded-full" />
                <div className="absolute bottom-40 left-16 bg-primary p-1 rounded-full" />
                <div className="absolute bottom-[40%] right-8 text-primary text-2xl rotate-6" >
                    <FaXmark />
                </div>
                {/* title */}
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center w-full justify-end'>
                        <span className='w-1/2 h-px bg-white' />
                        <TitleSection text="Projects" reverse position="right" />
                    </div>
                </div>
                {/* cards projects */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full py-8">
                    {projectsData.map((item) => (
                        <MotionTransition
                            position={item.position}
                            key={item.id}
                            className={`w-full lg:w-fit flex ${item.align === 'right' ? 'justify-end' : ''
                                }`}
                        >
                            <div
                                className={`cardPolygon w-72 ${item.cardHeight} relative group`}
                            >
                                <div
                                    className={`${item.polygonClass} transition-all duration-700 w-72 ${item.cardHeight} relative group`}
                                >
                                    <div className={`w-72 ${item.cardHeight} absolute top-0 left-0`}>
                                        <Image
                                            src={item.image}
                                            fill
                                            alt={item.title}
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Overlay */}
                                    <div className={`h-full lg:h-0 w-full absolute bottom-0 left-0 group-hover:h-96 duration-300 overflow-hidden z-50 bg-black opacity-60`} />
                                </div>

                                {/* Footer */}
                                <div
                                    className={`absolute ${item.align === 'right'
                                        ? 'bottom-9 right-0 pr-8 text-right'
                                        : 'bottom-16 left-0 px-8'
                                        } w-full`}
                                >
                                    <button
                                        aria-label={`open modal project ${item.id}`}
                                        onClick={() => {
                                            setOpenModal(true)
                                            setProject(item.project)
                                        }}
                                        className={`absolute text-xl p-1 rounded-full text-black lg:opacity-0 group-hover:opacity-100 bg-white top-3 ${item.align === 'right' ? 'left-12' : 'right-18'} hover:shadow-2xl cursor-pointer duration-300 group`}
                                    >
                                        <HiArrowsPointingOut className="group-hover:scale-105 duration-300" />
                                    </button>

                                    <h2 className="text-xs uppercase tracking-[0.25em]">
                                        {item.type}
                                    </h2>
                                    <h2 className="text-2xl font-medium">{item.title}</h2>
                                </div>
                            </div>
                        </MotionTransition>
                    ))}
                </div>

            </PageContainer>
        </section>
    )
}
