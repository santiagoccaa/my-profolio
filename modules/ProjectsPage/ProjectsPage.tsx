import { PageContainer, TitlePage } from "@/components"
import { AnimatedText, MotionPosition } from "@/components/Transition";
import { PROJECT_TASTENEST, PROJECT_VOYAGGI } from "@/constants/images/images"
import { academy, ProjectPorfolio, tasteNest, voyaggi } from "@/constants/projects"
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

export const ProjectsPage = () => {
    const t = useTranslations()
    return (
        <section className='relative  bg-blue-200'>
            {/* Title */}
            <TitlePage title="projects.title" />
            <PageContainer>
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
