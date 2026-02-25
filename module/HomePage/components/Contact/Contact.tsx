'use client'

import { PageContainer } from "@/components"
import { AnimatedText } from "@/components/Transition"
import { useTranslations } from "next-intl"
import { BiLogoGmail, BiSend } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa6"
import { LuLinkedin } from "react-icons/lu"
import { getEmailHref } from "../Hero/Social"
import { LINKEDIN } from "@/constants/profile/santiago"
import { useState } from "react"

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

export const Contact = () => {
  const t = useTranslations('contact')

  const [isLoading, setIsLoading] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [textError, setTextError] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const text = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    setEmailError(!isEmailValid)
    setTextError(!text.trim())

    if (!isEmailValid || !text.trim()) return

    setIsLoading(true)
    form.reset()

    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section id="projects" className='relative h-screen flex items-center'>
      <div className='flex justify-between mb-8 absolute top-4 right-4 w-full'>
        <div className='flex gap-2 items-center w-full justify-end'>
          <span className='w-10 lg:w-full max-w-1/2 h-px bg-white' />
          <AnimatedText key={t('title')} text={t('title')} className="text-sm uppercase tracking-[0.4em]" />
        </div>
      </div>
      <PageContainer>
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
            <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-96 text-center">
              <h2 className="text-xl font-medium">{t('subtitle')}</h2>
              <input
                type="email"
                name="email"
                placeholder={t('inputEmail')}
                autoComplete="off"
                className={`p-2 bg-white text-black font-medium text-md rounded-sm outline-none border
    ${emailError ? 'border-red-500 border-2' : 'border-transparent border-2'}
  `}
              />

              <textarea
                name="message"
                placeholder={t('inputText')}
                className={`p-2 bg-white text-black font-light text-md rounded-sm outline-none border
    ${textError ? 'border-red-500 border-2' : 'border-transparent border-2'}
  `}
              />
              <div className="relative mt-8">
                <div className="w-32 h-14 absolute left-4 -top-1 border-2 border-secondary rounded-xs inset-0" />
                <button
                  type="submit"
                  aria-label="send message"
                  disabled={isLoading}
                  className={`relative w-34 h-12 rounded-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xl duration-300 text-md group
    ${isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-secondary active:scale-95"}
  `}
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      {t('button')}
                      <BiSend size={20} className="group-hover:translate-x-2 duration-300" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
