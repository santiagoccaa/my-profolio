"use client"

import { HiArrowsPointingOut } from 'react-icons/hi2'
import { MotionTransition } from "@/components/Transition"
import { usePorfolioStore } from "@/store/contextPorpofolio"
import Image from "next/image"
import { Projects } from './ProjectsPage'

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
                className="w-64 h-110 rounded-md shadow-sm overflow-hidden group hover:-translate-y-2 hover:shadow-2xl duration-300 relative"
            >
                <div className={`w-full h-full relative`}>
                    <Image
                        src={project.image}
                        fill
                        alt={project.title}
                        className="object-cover"
                    />
                </div>

                {/* Footer */}
                <div
                    className='absolute bg-primary bottom-0 left-0 w-full flex items-center justify-between p-4 transition-colors duration-300'
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
