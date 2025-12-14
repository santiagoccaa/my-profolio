import { MotionTransition } from "./Transition"

interface TitleSectionProps {
    text: string
    reverse?:boolean
}

export const TitleSection = ({ text, reverse = false }: TitleSectionProps) => {
    return (
        <MotionTransition delay={1.2} position="bottom" className={`px-2 py-[1.5px] rounded-full flex ${reverse && 'flex-row-reverse'} items-center gap-1 w-fit`}>
            <span className="w-1 h-1 bg-primary rounded-full" />
            <h2 className="text-sm uppercase tracking-[0.5em] text-nowrap">{text}</h2>
        </MotionTransition>
    )
}
