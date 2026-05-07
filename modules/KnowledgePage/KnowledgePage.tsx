import { PageContainer, TitlePage } from "@/components"
import {
    CLERK,
    EXPRESS,
    FIGMA, GIT, GITHUB, HTML5, mysql, N8N, nextJs, node,
    react, strapi, supabase, tailwind, typescript
} from "@/constants/icons/icons"
import Tool from "./Knowledges"

const tools = [
    { image: nextJs, text: "Next.js", alt: "Next.js logo", className: "bg-white rounded-full" },
    { image: mysql, text: "MySQL", alt: "MySQL logo" },
    { image: node, text: "Node.js", alt: "Node.js logo" },
    { image: react, text: "React", alt: "React logo" },
    { image: strapi, text: "Strapi", alt: "Strapi logo" },
    { image: tailwind, text: "Tailwind", alt: "Tailwind logo" },
    { image: supabase, text: "Supabase", alt: "Supabase logo" },
    { image: FIGMA, text: "Figma", alt: "Figma logo" },
    { image: GITHUB, text: "GitHub", alt: "GitHub logo" },
    { image: N8N, text: "n8n", alt: "n8n logo" },
    { image: EXPRESS, text: "Express", alt: "express logo", className: "bg-white rounded-full" },
    { image: typescript, text: "TypeScript", alt: "TypeScript logo" },
    { image: HTML5, text: "HTML5", alt: "HTML5 logo" },
    { image: GIT, text: "Git", alt: "Git logo" },
    { image: CLERK, text: "Clerk", alt: "Glerk logo" },
]

export const KnowledgePage = () => {

    return (

        <section className='relative'>
            <PageContainer>
                <TitlePage title="common.knowledge" />
                <div
                    className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 place-items-center gap-4 gap-y-12 pt-10"
                >
                    {tools.map((tool, i) => (
                        <Tool key={i} {...tool} duration={i} />
                    ))}
                </div>
            </PageContainer>
        </section>
    )
}
