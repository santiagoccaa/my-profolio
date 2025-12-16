"use client"

import { PageContainer, TitleSection } from "@/components"
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
        description: `Laudantium fugiat eius expedita ex ipsum, deleniti,
      repellat necessitatibus soluta natus reprehenderit alias.`,
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
        description: 'Laudantium fugiat eius expedita ex ipsum, deleniti, repellat necessitatibus soluta natus reprehenderit alias.',
    },
    {
        id: 'taskflow',
        title: 'TaskFlow API',
        type: 'Back end',
        image: PROJECT_TASTENEST,
        project: taskFlowApi,
        polygonClass: 'polygon3',
        cardHeight: 'h-96',
        align: 'right',
        description: `Laudantium fugiat eius expedita ex ipsum, deleniti, repellat necessitatibus soluta natus reprehenderit alias.`,
    },
]


export const Projects = () => {

    const { setOpenModal, setProject } = usePorfolioStore()

    return (
        <div className='py-16 relative'>

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
                        <div
                            key={item.id}
                            className={`w-full lg:w-fit flex ${item.align === 'right' ? 'justify-end' : ''
                                }`}
                        >
                            <div
                                className={`cardPolygon w-72 ${item.cardHeight} relative group`}
                                style={{ filter: 'drop-shadow(2px 2px 15px #667eea)' }}
                            >
                                <div
                                    className={`${item.polygonClass} transition-all duration-700 w-72 ${item.cardHeight} relative group`}
                                >
                                    <div className={`w-72 ${item.cardHeight} absolute top-0 left-0`}>
                                        <Image
                                            src={item.image}
                                            fill
                                            alt={item.title}
                                            className="bg-center"
                                        />
                                    </div>

                                    {/* Overlay */}
                                    <div
                                        className={`h-full lg:h-0 w-full absolute bottom-0 left-0 group-hover:${item.cardHeight} duration-300 overflow-hidden z-50`}
                                    >
                                        <div className="absolute bottom-0 w-full h-96 bg-black p-4 px-8">
                                            <p className="text-md font-light text-white">
                                                {item.description}
                                            </p>

                                            <div className="flex gap-2 items-center mt-4">
                                                {Array.from({ length: 4 }).map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-8 h-8 rounded-full bg-purple-800"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div
                                    className={`absolute ${item.align === 'right'
                                            ? 'bottom-9 right-0 pr-8 text-right'
                                            : 'bottom-16 left-0 px-4'
                                        } w-full`}
                                >
                                    <button
                                        onClick={() => {
                                            setOpenModal(true)
                                            setProject(item.project)
                                        }}
                                        className={`absolute text-xl p-1 rounded-full text-black lg:opacity-0 group-hover:opacity-100 bg-white top-3 ${item.align === 'right' ? 'left-12' : 'right-18'} hover:shadow-2xl cursor-pointer duration-300`}
                                    >
                                        <HiArrowsPointingOut />
                                    </button>

                                    <h2 className="text-xs uppercase tracking-[0.25em]">
                                        {item.type}
                                    </h2>
                                    <h2 className="text-2xl font-medium">{item.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </PageContainer>
        </div>
    )
}
