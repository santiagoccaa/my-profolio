interface Trajectory {
    id: number,
    title: string,
    description: string
}

const trajectory: Trajectory[] = [
    {
        id: 1,
        title: "Software Engineer",
        description: "I hold a degree in Software Engineering from the University of Cartagena. My academic background provided a strong foundation in programming, system design, and problem-solving.",
    },
    {
        id: 2,
        title: "Continuous Learning",
        description: "I’ve refined my skills through online courses, self-driven projects, and hands-on experimentation. Each challenge has helped me grow as both a developer and a thinker.",
    },
    {
        id: 3,
        title: "Experience",
        description: "I completed internships at a couple of companies. I’ve also built and contributed to several independent projects that strengthened my and teamwork abilities.",
    },
]

export const Items = () => {
    return (
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
                            <p className="text-sm font-light w-full"><span className="font-medium">{title} </span>{description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

