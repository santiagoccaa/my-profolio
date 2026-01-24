import { PageContainer, TitleSection } from "@/components"
import {
    EXPRESS,
    FIGMA, GIT, GITHUB, HTML5, mysql, N8N, nextJs, node,
    react, strapi, supabase, tailwind, typescript
} from "@/constants/icons/icons"
import Tool from "./Tool"

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
]

export const Tools = () => {

    return (
        <section className="py-16 bg-[#27282A]">
            <PageContainer>
                <div className='flex justify-between mb-8'>
                    <div className='flex gap-2 items-center w-full justify-end'>
                        <span className='w-1/2 h-px bg-white' />
                        <TitleSection text="Skills" position="right" reverse />
                    </div>
                </div>
                <div
                    className="grid grid-cols-7 gap-4 gap-y-12"
                >
                    {tools.map((tool, i) => (
                        <Tool key={i} {...tool} />
                    ))}
                </div>
            </PageContainer>
        </section>
    )
}
