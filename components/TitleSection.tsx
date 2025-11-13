interface TitleSectionProps{
    text:string
}

export const TitleSection = ({text}: TitleSectionProps) => {
    return (
        <div className="px-2 py-[1.5px] rounded-full border-2 border-primary flex items-center gap-1 w-fit ">
            <span className="w-1 h-1 bg-primary rounded-full" />
            <h2 className="text-xs uppercase">{text}</h2>
        </div>
    )
}
