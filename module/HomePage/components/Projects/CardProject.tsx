"use client"

import { HiArrowsPointingOut } from 'react-icons/hi2'
import { MotionTransition } from "@/components/Transition"
import { usePorfolioStore } from "@/store/contextPorpofolio"
import Image from "next/image"
import { Projects } from './Projects'

const CardProject = (project: Projects) => {

    const { setOpenModal, setProject } = usePorfolioStore()

    return (
        <MotionTransition
            position={project.position}
            key={project.id}
            className={`w-full lg:w-fit flex ${project.align === 'right' ? 'justify-end' : ''
                }`}
        >
            <div
                className={`cardPolygon w-72 ${project.cardHeight} relative group`}
            >
                <div
                    className={`${project.polygonClass} transition-all duration-700 w-72 ${project.cardHeight} relative group`}
                >
                    <div className={`w-72 ${project.cardHeight} absolute top-0 left-0`}>
                        <Image
                            src={project.image}
                            fill
                            alt={project.title}
                            className="object-cover"
                        />
                    </div>

                    {/* Overlay */}
                    <div className={`h-full lg:h-0 w-full absolute bottom-0 left-0 group-hover:h-96 duration-300 overflow-hidden z-50 bg-black opacity-60`} />
                </div>

                {/* Footer */}
                <div
                    className={`absolute ${project.align === 'right'
                        ? 'bottom-9 right-0 pr-8 text-right'
                        : 'bottom-16 left-0 px-8'
                        } w-full`}
                >
                    <button
                        aria-label={`open modal project ${project.id}`}
                        onClick={() => {
                            setOpenModal(true)
                            setProject(project.project)
                        }}
                        className={`absolute text-xl p-1 rounded-full text-black lg:opacity-0 group-hover:opacity-100 bg-white top-3 ${project.align === 'right' ? 'left-12' : 'right-18'} hover:shadow-2xl cursor-pointer duration-300 group`}
                    >
                        <HiArrowsPointingOut className="group-hover:scale-105 duration-300" />
                    </button>

                    <h2 className="text-xs uppercase tracking-[0.25em]">
                        {project.type}
                    </h2>
                    <h2 className="text-2xl font-medium">{project.title}</h2>
                </div>
            </div>
        </MotionTransition>
    )
}

export default CardProject
