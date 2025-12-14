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
    <section className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-white">
              Other
              <span className="text-primary block pl-8">Skills</span>
            </h2>
            <div className="w-20 h-[1.5px] bg-white -rotate-60" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              otherSkills.map(({ image, description, title }) => (
                <div key={title} className="w-80 h-fit rounded-xl bg-[#1C1C1C] relative">
                  <div className="absolute top-4 right-full bg-primary h-16 w-2 rounded-l-full" />
                  <div className="p-4 space-y-2 relative">
                    <div className="bg-[#292929] p-2 rounded-full w-18 h-18 flex justify-center items-center">
                      <Image src={image} width={400} height={400} alt="figma logo" className="w-16 h-16" />
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
      </div>
    </section>
  );
}