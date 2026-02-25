import { PageContainer } from "@/components"
import { AnimatedText, MotionPosition } from "@/components/Transition";
import { PROJECT_TASTENEST, PROJECT_VOYAGGI } from "@/constants/images/images"
import { ProjectPorfolio, tasteNest, voyaggi } from "@/constants/projects"
import { FaXmark } from "react-icons/fa6"
import CardProject from "./CardProject";
import { useTranslations } from "next-intl";

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
        image: PROJECT_TASTENEST,
        project: tasteNest,
        polygonClass: 'polygon1',
        cardHeight: 'h-120',
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
        cardHeight: 'h-110',
        align: 'right',
        position: "top"
    }
] as const

export const Projects = () => {
    const t = useTranslations()
    return (
        <section id="projects" className='relative h-screen flex items-center'>
            {/* Title */}
            <div className='flex justify-between mb-8 absolute top-4 right-4 w-full'>
                <div className='flex gap-2 items-center w-full justify-end'>
                    <span className='w-10 lg:w-full max-w-1/2 h-px bg-white' />
                    <AnimatedText key={t('projects.title')} text={t('projects.title')} className="text-sm uppercase tracking-[0.4em]" />
                </div>
            </div>
            <PageContainer>
                <div className="absolute bottom-20 left-8 border-4 border-primary p-2 rounded-full" />
                <div className="absolute bottom-40 left-16 bg-primary p-1 rounded-full" />
                <div className="absolute bottom-[40%] right-8 text-primary text-2xl rotate-6" >
                    <FaXmark />
                </div>
                {/* Cards projects */}
                <div className="flex flex-col lg:flex-row items-center gap-x-16 gap-y-4 justify-center w-full">
                    {projectsData.map((project) => (
                        <CardProject key={project.id} {...project} />
                    ))}
                </div>
            </PageContainer>
        </section>
    )
}
