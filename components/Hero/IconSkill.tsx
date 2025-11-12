import Image from 'next/image'

interface IconSkillProps {
    img: string,
    alt: string,
    className?: string
}

export const IconSkill = ({ img, alt, className }: IconSkillProps) => {
    return (
        <div className={`p-2 rounded-full shadow-sm shadow-primary border-secondary`}>
            <div className={`relative h-6 w-6 lg:w-8 lg:h-8 rounded-full ${className}`}>
            <Image src={`/skils/${img}.svg`} fill alt={alt} />
            </div>
        </div>
    )
}
