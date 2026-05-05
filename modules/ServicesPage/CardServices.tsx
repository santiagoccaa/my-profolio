import Image from "next/image"
import { useTranslations } from "next-intl"
import { MotionTransition } from "@/components/Transition"
import { CardServicesProps } from "./ServicesPage"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

const CardServices = (service: CardServicesProps) => {
    const t = useTranslations('services')
    return (
        <MotionTransition
            position="bottom"
        >
            <div
                key={service.title}
                className="w-full min-h-85 max-w-80 relative rounded-xl flex flex-col items-center overflow-hidden bg-black-light p-4 text-white shadow-xl hover:-translate-y-2 hover:scale-105 opacity-90 hover:opacity-100 duration-300"
            >
                <div className="w-full aspect-square rounded-full bg-primary shadow-2xl -top-55 absolute" />
                <div className="w-20 h-20 rounded-full">
                    <div className="w-full h-full relative rounded-full">
                        <Image src={service.image} fill alt="logo" className="object-cover" />
                    </div>
                </div>

                <div className="min-h-28 text-center mt-5">
                    <h2 className="text-xl font-bold">{t(service.title)}</h2>
                    <div className="h-px bg-linear-to-r from-primary via-black-light to-primary mb-2 mt-4 rounded-full w-full" />

                    {/* <h2 className="text-sm font-bold">{t(service.subtitle)}</h2> */}
                    
                    <p className="text-sm mt-1">
                        {t(service.description)}
                    </p>
                </div>

                <div className="text-left mt-6 w-full flex items-end flex-1">
                    <Link href={"/"} className="text-sm flex items-center p-2 hover:bg-primary rounded-full gap-2 text-white duration-300">
                        Saber mas <FiArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </MotionTransition>
    )
}

export default CardServices
