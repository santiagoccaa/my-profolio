import { TitleSection } from "@/components";
import { FIGMA, GITHUB, N8N } from "@/constants/icons/icons";
import Image from "next/image";

const otherSkills = [
  {
    title: 'Figma',
    description: 'Se todo lo necesario de figma para poder guiarme y hacer cualquier diseño de manera precisa.',
    image: FIGMA
  },
  {
    title: 'Github',
    description: 'Mi favorito para manejar version de proyectos, se todo lo necesario para crear proyectos, issues y merge.',
    image: GITHUB
  },
  {
    title: 'n8n',
    description: 'Lo utilizo para automatizar diferentes tareas repetitivas, un ejemplo claro puede ser ordenar gmail.',
    image: N8N
  },
]

export default function Skills() {

  return (
    <section className="py-16">
      {/* Header */}
      <div className='flex justify-between mb-8'>
        <div className='flex gap-2 items-center w-full justify-start'>
          <TitleSection text="Other Skills" position="left" />
          <span className='w-1/2 h-px bg-white' />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
          {
            otherSkills.map(({ image, description, title }) => (
              <div key={title} className="w-full max-w-80 h-fit rounded-xl bg-[#1C1C1C] relative hover:rotate-2 duration-300">
                <div className="absolute top-4 right-full bg-primary h-16 w-2 rounded-l-full" />
                <div className="p-4 space-y-2 relative">
                  <div className="bg-[#292929] p-2 rounded-full w-18 h-18 flex justify-center items-center">
                    <div className="min-w-16 min-h-16 relative rounded-full">
                      <Image src={image} fill alt="figma logo" className="object-cover" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold">{title}</h2>
                  <p className="text-sm">
                    {description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}