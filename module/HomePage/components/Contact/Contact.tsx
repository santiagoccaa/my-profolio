import { PageContainer } from "@/components"
import { AnimatedText } from "@/components/Transition"
import { BiLogoGmail, BiSend } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa6"
import { LuLinkedin } from "react-icons/lu"

const contacts = [
  {
    icon: FaWhatsapp,
    text: '+57 3167268571',
    arial: 'ir a whatsapp'
  },
  {
    icon: BiLogoGmail,
    text: 'santiagodev@gmail.com',
    arial: 'ir a gmail'
  },
  {
    icon: LuLinkedin,
    text: 'santiagolinkedin',
    arial: 'ir a linkedin'
  }
]

export const Contact = () => {
  return (
    <section id="projects" className='relative h-screen flex items-center'>
      <div className='flex justify-between mb-8 absolute top-4 right-4 w-full'>
        <div className='flex gap-2 items-center w-full justify-end'>
          <span className='w-1/2 h-px bg-white' />
          <AnimatedText text="Contact" className="text-sm uppercase tracking-[0.4em]" />
        </div>
      </div>
      <PageContainer>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="w-full md:w-1/2">
            <div className="w-72">
              <div className="mt-16 space-y-8">
                {
                  contacts.map(({ text, icon: Icon, arial }, index) => (
                    <div key={index} className="flex gap-8 items-center">
                      <button aria-label={arial} className="p-3 bg-linear-to-bl from-primary to-secondary rounded-full cursor-pointer active:scale-90 duration-300 hover:shadow-lg shadow-primary">
                        <Icon size={30} />
                      </button>
                      <span className="text-md font-medium">{text}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form action="" className="flex flex-col gap-4 max-w-96 text-center">
              <h2 className="text-xl font-medium">Send Message</h2>
              <input type="email" placeholder="email@explame.com" autoComplete="off" className="p-2 bg-white text-black font-medium text-md rounded-sm" />
              <textarea name="" id="" placeholder="Question..." className="p-2 bg-white text-black font-light text-md rounded-sm">

              </textarea>
              <div className="relative mt-8">
                <div className="w-32 h-14 absolute left-4 -top-1 border-2 border-secondary rounded-xs inset-0" />
                <button aria-label="send message" className="relative w-34 h-12 rounded-xs bg-secondary font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xl active:scale-95 duration-300 text-md group">
                  Send <BiSend size={20} className="group-hover:translate-x-2 duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
