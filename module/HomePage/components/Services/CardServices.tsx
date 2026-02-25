import Image from "next/image"
import { TbPointFilled } from "react-icons/tb"
import { CardServicesProps } from "./Services"

const CardServices = (service: CardServicesProps) => {
    return (
        <div
            key={service.title}
            className="w-full max-w-80 md:w-72 h-76 relative rounded-sm bg-black-secondary flex flex-col"
        >
            <div className="w-28 h-28 rounded-full bg-black-light p-2 absolute -top-16 left-1/2 -translate-x-1/2 z-20">
                <div className="w-full h-full relative rounded-full bg-black-light">
                    <Image src={service.image} fill alt="logo" className="object-cover" />
                </div>
            </div>

            <div className="h-1/2 rounded-t-sm bg-linear-to-b from-primary to-secondary w-full flex flex-col items-center justify-end pb-4 shadow-2xl overflow-hidden relative z-0">

                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="text-sm text-white/80 px-4 mt-1 text-center">
                    {service.description}
                </p>
            </div>

            <div className="w-full flex-1 flex flex-col items-stretch p-4">
                <ul className="space-y-2">
                    {service.items.map((item, index) => (
                        <li key={index} className="text-sm font-medium flex items-center"><TbPointFilled /> {item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CardServices
