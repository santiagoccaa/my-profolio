import { MotionTransition } from "./Transition"

interface TitleSectionProps {
    text: string
}

export const TitleSection = ({ text }: TitleSectionProps) => {
    return (
        <MotionTransition delay={1.2} position="bottom" className="px-2 py-[1.5px] rounded-full flex items-center gap-1 w-fit ">
            <span className="w-1 h-1 bg-primary rounded-full" />
            <h2 className="text-lg uppercase tracking-[0.25em]">{text}</h2>
        </MotionTransition>
    )
}
