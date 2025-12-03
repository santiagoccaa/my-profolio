import { IconSkill, IconSkillProps } from "./IconSkill"
import { PageContainer, TitleSection } from "@/components"
import { RiArrowDownDoubleFill } from "react-icons/ri"
import { AnimatedText, MotionTransition } from "@/components/Transition"
import Social from "./Social"
import Navbar from "./Navbar"

const skills: IconSkillProps[] = [
    {
        img: "NextJs Icon",
        alt: "nextjs",
        className: 'bg-white'
    },
    {
        img: "React Icon",
        alt: "react",
    },
    {
        img: "Node Icon",
        alt: "node",
    },
    {
        img: "TypeScript Icon",
        alt: "typescript",
    },
]

export const Hero = () => {
    return (
        <div className="overflow-hidden group">
            <div className="absolute inset-0 top-0 left-0 h-screen w-full flex justify-center overflow-hidden">
                <div className="w-[200%] lg:w-full max-w-7xl aspect-square absolute -top-[50%] lg:-top-[110%] 2xl:-top-[95%] opacity-60"
                    style={{
                        background: 'radial-gradient(circle at center, #667eea, #0a0a0a, #0a0a0a)'
                    }}>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 z-0 w-full h-full overflow-hidden">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>
            <PageContainer>
                <div className="min-h-screen max-h-screen w-full flex-1 relative z-10 flex flex-col lg:flex-row">
                    <Social />
                    <Navbar />
                    <div className="w-full relative z-10 flex-1 flex flex-col items-center justify-center gap-y-8">
                        <TitleSection text="Software Engineer" />
                        <AnimatedText text="<Santiago Contreras/>" className="w-full text-center text-5xl md:text-7xl text-primary font-medium tracking-[0.2em]" />
                        <MotionTransition delay={1.3} position="top" className="flex gap-12 items-center mt-5">
                            {
                                skills.map(({ alt, img, className }) => (
                                    <IconSkill key={img} alt={img} img={alt} className={className} />
                                ))
                            }
                        </MotionTransition>
                        <MotionTransition delay={1.5} position="top" className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-6">
                            <button className="p-4 rounded-full cursor-pointer group">
                                <RiArrowDownDoubleFill size={40} className="group-hover:translate-y-2 duration-500" />
                            </button>
                        </MotionTransition>
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}