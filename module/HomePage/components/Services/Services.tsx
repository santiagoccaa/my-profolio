import { PageContainer } from "@/components"
import { AUTOMATIZACION, BACKEND, STYLE } from "@/constants/icons/icons"
import CardServices from "./CardServices"
import { AnimatedText } from "@/components/Transition"
import { useTranslations } from "next-intl"

export interface CardServicesProps {
  title: string,
  image: string,
  description: string,
  items: string[]
}
const services: CardServicesProps[] = [
  {
    title: "automatizacion.title",
    description:
      "automatizacion.description",
    image: AUTOMATIZACION,
    items: [
      "automatizacion.item1",
      "automatizacion.item2",
      "automatizacion.item3"
    ],
  },
  {
    title: "webDesign.title",
    description:
      "webDesign.description",
    image: STYLE,
    items: [
      "webDesign.item1",
      "webDesign.item2",
      "webDesign.item3"
    ],
  },
  {
    title: "backendWeb.title",
    description:
      "backendWeb.description",
    image: BACKEND,
    items: [
      "backendWeb.item1",
      "backendWeb.item2",
      "backendWeb.item3"
    ],
  },
];
export const Services = () => {
  const t = useTranslations('services')
  return (
    <section id="projects" className='relative h-fit py-20 lg:pt-0 lg:h-screen flex items-center'>
      <div className='flex justify-between mb-8 absolute top-4 right-4 w-full'>
        <div className='flex gap-2 items-center w-full justify-end'>
          <span className='w-10 lg:w-full max-w-1/2 h-px bg-white' />
          <AnimatedText key={t('title')} text={t('title')} className="text-sm uppercase tracking-[0.4em]" />
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
