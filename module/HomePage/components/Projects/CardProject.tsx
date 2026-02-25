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
            className={`w-full lg:w-fit flex group ${project.align === 'right' ? 'justify-end' : ''
                }`}
        >
            <div
                className={`w-64 h-96 rounded-md shadow-sm overflow-hidden relative group hover:-translate-y-2 hover:shadow-2xl duration-300`}
            >
                {/* Overlay */}
                <div className={`h-full lg:h-0 w-full absolute bottom-0 left-0 group-hover:h-96 duration-300 overflow-hidden bg-black opacity-60`} />
                <div
                    className={` transition-all duration-700 w-72 h-96 relative group`}
                >
                    <div className={`w-72 h-96 absolute top-0 left-0`}>
                        <Image
                            src={project.image}
                            fill
                            alt={project.title}
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div
                    className='absolute group-hover:bg-primary bottom-0 left-0 w-full flex items-center justify-between p-4 transition-colors duration-300'
                >
                    <div>
                        <h2 className="text-xs uppercase tracking-[0.25em]">
                            {project.type}
                        </h2>
                        <h2 className="text-2xl font-medium">{project.title}</h2>
                    </div>
                    <button
                        aria-label={`open modal project ${project.id}`}
                        onClick={() => {
                            setOpenModal(true)
                            setProject(project.project)
                        }}
                        className={` text-xl p-1 rounded-full text-black bg-white top-3 hover:shadow-2xl cursor-pointer duration-300 group`}
                    >
                        <HiArrowsPointingOut className="group-hover:scale-105 duration-300" />
                    </button>
                </div>

            </div>
        </MotionTransition>
    )
}

export default CardProject
