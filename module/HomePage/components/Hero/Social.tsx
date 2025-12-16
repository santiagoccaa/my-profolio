import { MotionTransition } from "@/components/Transition"
import { LuGithub, LuLinkedin } from "react-icons/lu"
import { BiLogoGmail } from "react-icons/bi"
import { IconType } from "react-icons"
import { GITHUB, GMAIL, LINKEDIN } from "@/constants/profile/santiago"

type Social = {
    href: string,
    icon: IconType
}

const social: Social[] = [
    {
        href: LINKEDIN,
        icon: LuLinkedin
    },
    {
        href: GITHUB,
        icon: LuGithub
    },
    {
        href: GMAIL,
        icon: BiLogoGmail
    },
]

const Social = () => {
    return (
        <div className="md:h-full absolute bottom-40 md:bottom-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-1 md:top-0 flex flex-row md:flex-col justify-center gap-x-16 gap-y-8 z-30">
            {
                social.map(({ href, icon: Icon }) => (
                    <MotionTransition key={href} delay={1} duration={0.8} position="right">
                        <div className="w-8 md:w-10 h-8 md:h-10 text-xl md:text-2xl rounded-full outline-1 outline-offset-1 hover:outline-offset-4 outline-primary transition-all duration-300 cursor-pointer group">
                            <a target="_blank" href={href} className="w-8 md:w-10 h-8 md:h-10 rounded-full group-hover:scale-90 duration-300 flex items-center justify-center text-white">
                                <Icon />
                            </a>
                        </div>
                    </MotionTransition>
                ))
            }
        </div>
    )
}

export default Social
