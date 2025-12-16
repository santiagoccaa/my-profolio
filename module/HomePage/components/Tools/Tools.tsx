'use client'
import { useRef } from "react"
import { PageContainer, TitleSection } from "@/components"
import {
    EXPRESS,
    FIGMA, GIT, GITHUB, HTML5, mysql, N8N, nextJs, node,
    react, strapi, supabase, tailwind, typescript
} from "@/constants/icons/icons"
import Tool from "./Tool"
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"

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
    const carouselRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (!carouselRef.current) return

        const width = carouselRef.current.clientWidth
        carouselRef.current.scrollBy({
            left: direction === 'left' ? -width : width,
            behavior: 'smooth'
        })
    }

    return (
        <section className="my-16">
            <PageContainer>
                <div className="flex justify-center mb-8">
                    <TitleSection text="Conocimientos" position="top" />
                </div>

                <div className="relative px-10 lg:px-20">
                    {/* Botón izquierda */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center  bg-primary rounded-full cursor-pointer active:scale-95 duration-300 group"
                    >
                        <TiArrowLeftThick size={25} className="text-white group-hover:-translate-x-1 duration-300" />
                    </button>

                    {/* Carousel */}
                    <div
                        ref={carouselRef}
                        className="flex justify-between h-32 gap-4 items-center overflow-x-scroll scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
                    >
                        {tools.map((tool, i) => (
                            <Tool key={i} {...tool} />
                        ))}
                    </div>

                    {/* Botón derecha */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary w-8 h-8 flex items-center justify-center rounded-full cursor-pointer active:scale-95 duration-300 group"
                    >
                        <TiArrowRightThick className="text-white group-hover:translate-x-1 duration-300" size={25} />
                    </button>
                </div>
            </PageContainer>
        </section>
    )
}
