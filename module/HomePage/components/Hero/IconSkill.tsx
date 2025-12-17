import Image from 'next/image'

export interface IconSkillProps {
    img: string,
    alt: string,
    className?: string
}

export const IconSkill = ({ img, alt, className }: IconSkillProps) => {
    return (
        <div className={`relative h-6 w-6 lg:w-8 lg:h-8 rounded-full ${className}`}>
            <Image src={`/skills/${img}.svg`} fill alt={alt} className='object-cover' />
        </div>
    )
}
