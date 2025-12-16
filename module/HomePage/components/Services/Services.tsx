import { TitleSection } from "@/components"
import { AUTOMATIZACION, BACKEND, STYLE } from "@/constants/icons/icons"
import Image from "next/image"
import { FaArrowUpWideShort } from "react-icons/fa6"
import { TbPointFilled } from "react-icons/tb"

const services = [
  {
    title: "Automatización",
    description: "Soluciones inteligentes para optimizar y agilizar tus procesos.",
    image: AUTOMATIZACION,
    items: [
      "Optimiza tus procesos repetitivos",
      "Ahorra tiempo en tareas rutinarias",
      "Simplifica tu flujo de trabajo",
    ],
  },
  {
    title: "Web Design",
    description: "Diseños modernos enfocados en experiencia y conversión.",
    image: STYLE,
    items: [
      "Diseños que destacan tu marca",
      "Experiencias web memorables",
      "Sitios que convierten visitantes en clientes"
    ],
  },
  {
    title: "Backend Web",
    description: "Arquitecturas eficientes que soportan aplicaciones escalables.",
    image: BACKEND,
    items: [
      "La base sólida de tu aplicación",
      "Infraestructura confiable y potente",
      "Sistemas que escalan con tu negocio",
    ],
  },
]

export const Services = () => {
  return (
    <div className="my-16">
      <div className='flex justify-between'>

        <div className='flex gap-2 items-center w-full justify-end'>
          <span className='w-1/2 h-px bg-white' />
          <TitleSection text="Services" reverse position="right" />
        </div>
      </div>

      <div className="flex justify-center items-center py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-20 items-center justify-center">
          {services.map((service) => (
            <div
              key={service.title}
              className="w-full max-w-80 md:w-72 h-86 relative rounded-sm bg-black-secondary flex flex-col shadow-md hover:shadow-primary hover:scale-105 duration-300"
            >
              <div className="w-28 h-28 rounded-full bg-black p-2 absolute -top-16 left-1/2 -translate-x-1/2">
                <div className="w-full h-full relative rounded-full bg-black-light">
                  <Image src={service.image} fill alt="logo" />
                </div>
              </div>

              <div className="min-h-36 rounded-t-sm bg-linear-to-b from-primary to-secondary w-full flex flex-col items-center justify-end pb-4">
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="text-sm text-white/80 px-4 mt-1 text-center">
                  {service.description}
                </p>
              </div>

              <div className="w-full flex flex-col items-stretch p-4 h-full">
                <ul className="space-y-2 flex-1">
                  {service.items.map((item, index) => (
                    <li key={index} className="text-sm font-medium flex items-center"><TbPointFilled /> {item}</li>
                  ))}
                </ul>
                <div className="flex-1 flex items-end">
                  <div className="relative mt-8">
                    <div className="w-28 h-12 absolute left-4 -top-1 border-2 border-primary rounded-xs inset-0" />
                    <button className="relative w-30 h-10 rounded-xs bg-primary font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xl active:scale-95 duration-300 text-sm group">
                      Show me <FaArrowUpWideShort size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
