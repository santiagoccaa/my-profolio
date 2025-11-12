import Image from "next/image"

import { IconType } from "react-icons"
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdOutlineEmojiPeople } from "react-icons/md"
import { RiArrowDownDoubleFill } from "react-icons/ri"
import { IconSkill } from "./IconSkill"
import { NestedCircles } from "./NestedCircles"

type Social = {
    href: string,
    icon: IconType
}

const social: Social[] = [
    {
        href: "linkedin",
        icon: FaLinkedinIn
    },
    {
        href: "github",
        icon: FaGithub
    },
    {
        href: "discord",
        icon: FaDiscord
    },
]

// TODO: mejorar el diseño en tablet
export const Hero = () => {
    return (
        <>
            <div className="absolute top-0 left-0 right-0 z-0 w-full h-full overflow-hidden">
                <div className="w-32 h-2 rounded-full bg-linear-to-l from-primary to-secondary opacity-30 absolute top-20 animate-slide-horizontal" />
                <div className="w-24 h-3 rounded-full bg-primary opacity-15 absolute top-40 animate-slide-horizontal-slow" />
                <div className="w-16 h-2 rounded-full bg-primary opacity-25 absolute top-60 animate-slide-horizontal-fast" />
                <div className="w-24 h-2 rounded-full bg-primary opacity-20 absolute top-80 animate-slide-horizontal" />
                <div className="w-10 h-3 rounded-full bg-primary opacity-18 absolute bottom-20 animate-slide-horizontal-slow" />
                <div className="w-44 h-2 rounded-full bg-primary opacity-22 absolute bottom-40 animate-slide-horizontal-fast" />
            </div>
            <div className="min-h-screen max-h-screen w-full relative z-10 flex flex-col lg:flex-row items-stretch">
                <div className="h-[50%] lg:h-full absolute bottom-0 right-1 md:top-0 flex flex-col justify-center gap-8">
                    {
                        social.map(({ href, icon: Icon }) => (
                            <button key={href} className="w-8 md:w-10 h-8 md:h-10 text-xl md:text-2xl rounded-full outline-2 outline-offset-1 hover:outline-offset-4 outline-primary transition-all duration-200 cursor-pointer group">
                                <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-primary group-hover:scale-90 duration-300 flex items-center justify-center">
                                    <Icon />
                                </div>
                            </button>
                        ))
                    }
                </div>
                {/* Lado izquiero - mobile:superior */}
                <div className="w-full lg:w-1/2 relative z-10 flex-1 pt-20 flex flex-col justify-center gap-y-3">
                    <div className="px-2 py-[1.5px] rounded-full border-2 border-primary flex items-center gap-1 w-fit ">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        <h2 className="text-xs uppercase">Full-Stack Web-Developer</h2>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        Porfolio <br /> <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent text-nowrap">Santiago Contreras</span>
                    </h2>
                    <div className="flex gap-6 items-center mt-5">
                        <IconSkill alt="Next" img="nextjs" className="bg-white" />
                        <IconSkill alt="React" img="react" />
                        <IconSkill alt="Node" img="node" />
                        <IconSkill alt="typescript" img="typescript" />
                    </div>
                    <div className="mt-8 flex gap-6">
                        <button className="bg-linear-to-t duration-300 from-primary to-secondary hover:from-secondary hover:to-primary transition-colors p-2 px-4 rounded-full outline-2 outline-primary outline-offset-1 font-medium flex items-center gap-2 cursor-pointer group">
                            My Projects <RiArrowDownDoubleFill className="group-hover:translate-y-1 duration-300" />
                        </button>

                        <div className="flex items-center gap-2">
                            <button className="text-2xl p-2 rounded-full bg-primary cursor-pointer active:scale-90 duration-300"><MdOutlineEmojiPeople /> </button>Me
                        </div>
                    </div>

                </div>
                {/* Lado derecho - mobile:inferior */}
                <div className="w-full lg:w-1/2 relative z-10 flex-1 min-h-[50dvh]">
                    <div className="absolute bottom-20 left-20 hidden md:block">
                        <NestedCircles sizes={[300, 250, 200, 150, 100, 50]} />
                    </div>
                    <div className="absolute top-8 left-0 block md:hidden">
                        <NestedCircles sizes={[250, 200, 150, 100, 50, 25]} />
                    </div>
                    <Image src={"/me.png"} width={800} height={800} alt="me" className="h-full lg:h-[70%] xl:h-[90%] aspect-auto absolute bottom-0" style={{ filter: "drop-shadow(0 0 1px #667eea" }} />
                </div>
            </div>
        </>
    )
}

