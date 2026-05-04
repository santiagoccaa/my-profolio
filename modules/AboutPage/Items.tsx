import { MotionTransition } from "@/components/Transition"
import { useTranslations } from "next-intl"

interface Trajectory {
    id: number,
    title: string,
    description: string
}

const trajectory: Trajectory[] = [
    {
        id: 1,
        title: "title1",
        description: "description1",
    },
    {
        id: 2,
        title: "title2",
        description: "description2",
    },
    {
        id: 3,
        title: "title3",
        description: "description3",
    },
]

export const Items = () => {
    const t = useTranslations('aboutMe.items')
    return (
        <MotionTransition
            position="right"
        >
            <div className="mt-8 flex flex-col justify-center items-center gap-y-4">
                {
                    trajectory.map(({ title, description, id }) => (
                        <div key={id} className='flex gap-4 w-full'>
                            <div className="relative">
                                <div className='min-w-6 min-h-6 max-w-6 max-h-6 mt-2 rounded-full border-t-2 border-l-2 border-b-2 border-r-2 border-r-transparent border-primary -rotate-45' />
                                <span className="absolute -top-1 right-0 text-lg font-bold">
                                    {id}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-light w-full"><span className="font-medium">{t(title)} </span>{t(description)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </MotionTransition>
    )
}

