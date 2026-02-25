import { PageContainer, TitleSection } from "@/components"
import { AUTOMATIZACION, BACKEND, STYLE } from "@/constants/icons/icons"
import CardServices from "./CardServices"
import { AnimatedText } from "@/components/Transition"

export interface CardServicesProps {
  title: string,
  image: string,
  description: string,
  items: string[]
}

const services: CardServicesProps[] = [
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
    <section id="projects" className='relative h-screen flex items-center'>
      <div className='flex justify-between mb-8 absolute top-4 right-4 w-full'>
        <div className='flex gap-2 items-center w-full justify-end'>
          <span className='w-1/2 h-px bg-white' />
          <AnimatedText text="Services" className="text-sm uppercase tracking-[0.4em]" />
        </div>
      </div>
      <PageContainer>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-20 items-center justify-center mt-12">
            {services.map((service, index) => (
              <CardServices key={index} {...service} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
