import { PageContainer } from "@/components"
import {
    EXPRESS,
    FIGMA, GIT, GITHUB, HTML5, mysql, N8N, nextJs, node,
    react, strapi, supabase, tailwind, typescript
} from "@/constants/icons/icons"
import Tool from "./Tool"
import { AnimatedText } from "@/components/Transition"
import { useTranslations } from "next-intl"

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

    const t = useTranslations()

    return (
        <section className='relative h-screen flex items-center'>
            <div className='flex justify-between mb-8 absolute top-4 right-4 w-full'>
                <div className='flex gap-2 items-center w-full justify-end'>
                    <span className='w-10 lg:w-full max-w-1/2 h-px bg-white' />
                    <AnimatedText key={t('common.titleTools')} text={t('common.titleTools')} className="text-sm uppercase tracking-[0.4em]" />
                </div>
            </div>
            <PageContainer>
                <div
                    className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 gap-y-12"
                >
                    {tools.map((tool, i) => (
                        <Tool key={i} {...tool} />
                    ))}
                </div>
            </PageContainer>
        </section>
    )
}
