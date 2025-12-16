import Image from "next/image"

interface ToolProps {
    image: string,
    text: string
    alt: string
    className?: string
}

const Tool = ({ image, text, alt, className }: ToolProps) => {
    return (
        <div className="snap-start shrink-0 w-20 h-12 flex justify-center items-center relative group">
            <div className="absolte top-0 opacity-0 group-hover:opacity-100 duration-300">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary px-2 rounded-sm z-20 text-sm">
                    {text}
                </div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-4 w-4 bg-primary rotate-45 z-10" />
            </div>
            <Image src={image} width={200} height={200} alt={alt} className={`${className} w-12 h-12`} />
        </div>
    )
}

export default Tool
