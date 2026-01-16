import { PageContainer, TitleSection } from "@/components"
import { MotionPosition } from "@/components/Transition";
import { PROJECT_GLASSES, PROJECT_TASTENEST, PROJECT_VOYAGGI } from "@/constants/images/images"
import { ProjectPorfolio, taskFlowApi, tasteNest, voyaggi } from "@/constants/projects"
import { FaXmark } from "react-icons/fa6"
import CardProject from "./CardProject";

export interface Projects {
    id: string;
    title: string,
    type: string,
    image: string,
    project: ProjectPorfolio,
    polygonClass: string,
    cardHeight: string,
    align: string,
    position: MotionPosition,
}

const projectsData: Projects[] = [
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


    return (
        <section id="projects" className='my-16 relative'>
            <div className="w-full h-20 opacity-50 absolute bottom-0 left-0" />
            <PageContainer>
                <div className="absolute bottom-20 left-8 border-4 border-primary p-2 rounded-full" />
                <div className="absolute bottom-40 left-16 bg-primary p-1 rounded-full" />
                <div className="absolute bottom-[40%] right-8 text-primary text-2xl rotate-6" >
                    <FaXmark />
                </div>

                {/* Title */}
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center w-full justify-end'>
                        <span className='w-1/2 h-px bg-white' />
                        <TitleSection text="Projects" reverse position="right" />
                    </div>
                </div>

                {/* Cards projects */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full py-8">
                    {projectsData.map((project) => (
                        <CardProject key={project.id} {...project} />
                    ))}
                </div>
            </PageContainer>
        </section>
    )
}
