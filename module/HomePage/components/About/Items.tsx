import Image from "next/image"

interface Trajectory {
    title: string,
    description: string,
    img: string
}

const trajectory: Trajectory[] = [
    {
        title: "Software Engineer",
        description: "I hold a degree in Software Engineering from the University of Cartagena. My academic background provided a strong foundation in programming, system design, and problem-solving.",
        img: "graduation"
    },
    {
        title: "Continuous Learning",
        description: "I’ve refined my skills through online courses, self-driven projects, and hands-on experimentation. Each challenge has helped me grow as both a developer and a thinker.",
        img: "learning"
    },
    {
        title: "Experience",
        description: "I completed internships at a couple of companies. I’ve also built and contributed to several independent projects that strengthened my and teamwork abilities.",
        img: "experience"
    },
]

export const Items = () => {
    return (
        <div className="mt-8 flex flex-col justify-center items-center gap-y-4">
            {
                trajectory.map(({ title, description, img }, index) => (
                    <div key={index} className='flex items-center gap-4 w-full'>
                        <div className='bg-primary min-w-16 min-h-16 max-w-16 max-h-16 rounded-full hidden md:flex justify-center items-center'>
                            <Image src={`/items/${img}.svg`} width={40} height={40} className="w-10 h-10" alt={title} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl md:text-lg text-primary md:text-white">{title}</h2>
                            <p className="text-sm font-light w-full">{description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

