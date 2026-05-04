import { PageContainer, TitlePage } from "@/components"
import { AUTOMATIZACION, BACKEND, STYLE } from "@/constants/icons/icons"
import CardServices from "./CardServices"

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
export const ServicesPage = () => {

  return (
    <section id="projects" className='relative bg-blue-200'>
      <TitlePage title="services.title" />
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
