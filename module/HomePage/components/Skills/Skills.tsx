import { PageContainer } from "@/components";
import { AnimatedText } from "@/components/Transition";
import { FIGMA, GITHUB, N8N } from "@/constants/icons/icons";
import { useTranslations } from "next-intl";
import Image from "next/image";

const otherSkills = [
  {
    title: 'Figma',
    description:
      'figma.description',
    image: FIGMA,
  },
  {
    title: 'GitHub',
    description:
      'gitHub.description',
    image: GITHUB,
  },
  {
    title: 'n8n',
    description:
      'n8n.description',
    image: N8N,
  },
];

export default function Skills() {
  const t = useTranslations('tools')

  return (
    <section className='relative h-screen flex items-center'>
      {/* Header */}
      <div className='flex justify-between mb-8 absolute top-4 right-4 w-full'>
        <div className='flex gap-2 items-center w-full justify-end'>
          <span className='w-10 lg:w-full max-w-1/2 h-px bg-white' />
          <AnimatedText key={t('title')} text={t('title')} className="text-sm uppercase tracking-[0.4em]" />
        </div>
      </div>
      <PageContainer>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 items-stretch">
            {otherSkills.map(({ image, description, title }) => (
              <div
                key={title}
                className="w-full max-w-80 h-full rounded-xl bg-[#1C1C1C] relative hover:rotate-2 duration-300"
              >
                <div className="absolute top-4 right-full bg-primary h-16 w-2 rounded-l-full" />

                <div className="p-4 space-y-2 relative flex flex-col h-full">
                  <div className="bg-[#292929] p-2 rounded-full w-18 h-18 flex justify-center items-center">
                    <div className="min-w-16 min-h-16 relative rounded-full">
                      <Image src={image} fill alt={`${title} logo`} className="object-cover" />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold">{title}</h2>

                  <p className="text-sm mt-auto">
                    {t(description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}