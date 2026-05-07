import { PageContainer, TitlePage } from "@/components"
import { MotionPosition } from "@/components/Transition";
import { PROJECT_ACADEMY, PROJECT_TASTENEST, PROJECT_VOYAGGI } from "@/constants/images/images"
import { academy, ProjectPorfolio, tasteNest, voyaggi } from "@/constants/projects"
import CardProject from "./CardProject";
import { useTranslations } from "next-intl";

export interface Projects {
    id: string;
    title: string,
    type: string,
    image: string,
    project: ProjectPorfolio,
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
        align: 'left',
        position: "left"
    },
    {
        id: 'voyaggi',
        title: 'Voyaggi',
        type: 'Full stack',
        image: PROJECT_VOYAGGI,
        project: voyaggi,
        align: 'right',
        position: "top"
    },
    {
        id: 'academy',
        title: 'Academy LMS',
        type: 'Full stack',
        image: PROJECT_ACADEMY,
        project: academy,
        align: 'right',
        position: "right"
    }
] as const

export const ProjectsPage = () => {
    const t = useTranslations()
    return (
        <section className='relative'>
            {/* Title */}
            <PageContainer>
                <TitlePage title="projects.title" />

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
