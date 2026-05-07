"use client"

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
                onClick={() => {
                    setOpenModal(true)
                    setProject(project.project)
                }}
                className="w-64 h-110 rounded-md shadow-sm overflow-hidden group hover:-translate-y-2 hover:shadow-2xl duration-300 relative cursor-pointer"
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
                </div>

            </div>
        </MotionTransition>
    )
}

export default CardProject
