import Image from "next/image"
import { TbPointFilled } from "react-icons/tb"
import { useTranslations } from "next-intl"
import { MotionTransition } from "@/components/Transition"
import { CardServicesProps } from "./ServicesPage"

const CardServices = (service: CardServicesProps) => {
    const t = useTranslations('services')
    return (
        <MotionTransition
            position="bottom"
        >
            <div
                key={service.title}
                className="w-full max-w-80 relative rounded-xl flex flex-col items-center overflow-hidden justify-center bg-white p-4 py-8 text-black"
            >
                <div className="w-90 aspect-square rounded-full bg-primary shadow-2xl -top-60 absolute" />
                <div className="w-20 h-20 rounded-full">
                    <div className="w-full h-full relative rounded-full">
                        <Image src={service.image} fill alt="logo" className="object-cover" />
                    </div>
                </div>

                <div className="min-h-28 text-center mt-5">
                    <h2 className="text-xl font-bold">{t(service.title)}</h2>
                    <div className="h-px bg-linear-to-r from-black via-white to-black my-2 rounded-full w-full" />
                    <p className="text-sm mt-1">
                        {t(service.description)}
                    </p>
                </div>
            </div>
        </MotionTransition>
    )
}

export default CardServices
