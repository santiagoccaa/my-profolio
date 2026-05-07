
import { PageContainer, TitlePage } from "@/components"
import { useTranslations } from "next-intl"
import { BiLogoGmail, BiSend } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa6"
import { LuLinkedin } from "react-icons/lu"
import { getEmailHref } from "../HomePage/components/Hero/Social"
import { LINKEDIN } from "@/constants/profile/santiago"
import { FormContact } from "./FormContact/FormContact"

const contacts = [
  {
    icon: FaWhatsapp,
    text: '+57 3167268571',
    arial: 'ir a whatsapp',
    href: `https://wa.me/3167268571?text=${encodeURIComponent(
      "Hola, me gustaría hablar contigo"
    )}`
  },
  {
    icon: BiLogoGmail,
    text: 'santiagodev@gmail.com',
    arial: 'ir a gmail',
    href: getEmailHref()
  },
  {
    icon: LuLinkedin,
    text: 'santiagolinkedin',
    arial: 'ir a linkedin',
    href: LINKEDIN
  }
]

export const ContactPage = () => {
  const t = useTranslations('contact')

  return (
    <section id="projects" className='relative'>
      <PageContainer>
        <TitlePage title="contact.title" />

        <div className="flex flex-col md:flex-row mt-4">
          <div className="w-full md:w-1/2">
            <div className="w-72">
              <div className="mt-16 space-y-8">
                {
                  contacts.map(({ text, icon: Icon, arial, href }, index) => (
                    <div key={index} className="flex gap-8 items-center">
                      <a href={href} aria-label={arial} target="_blank" className="p-3 bg-linear-to-bl from-primary to-secondary rounded-full cursor-pointer active:scale-90 duration-300 hover:shadow-lg shadow-primary">
                        <Icon size={30} />
                      </a>
                      <span className="text-md font-medium">{text}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <FormContact />
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
