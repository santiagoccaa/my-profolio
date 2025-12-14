import { PageContainer, TitleSection } from "@/components"
import { Items } from "./Items"
import { LuDownload } from "react-icons/lu"
import { MdArrowForward } from "react-icons/md"

export const About = () => {
    return (
        <div className="relative my-16">
            <div className="absolute bottom-32 md:top-1/2 md:-translate-y-1/2 left-0 bg-linear-to-b from-black via-secondary to-black w-full md:w-[30%] h-44 opacity-60" />
            <PageContainer>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-3xl text-primary font-bold'>My</h2>
                        <h2 className='text-3xl text-white pl-8 -mt-1 font-bold'>Information</h2>
                    </div>
                    <div className='flex gap-2 items-center w-full justify-end'>
                        <span className='w-1/2 h-px bg-white' />
                        <TitleSection text="About me" reverse />
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row py-16 md:gap-x-4 lg:gap-x-20 gap-y-8 items-center justify-center">
                    <div className="relative w-full flex justify-center items-center">
                        <div className="w-full h-72 rounded-xl bg-red-500 sm:bg-green-500 md:bg-sky-500 lg:bg-secondary relative">
                            <div className="absolute bottom-0 left-0 bg-black rounded-tr-4xl pt-2 pr-2">
                                <button className="w-42 h-14 bg-primary rounded-full shadow-2xl flex items-center justify-center text-sm font-light gap-2">
                                    Dowload CV <LuDownload size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">
                            A Brief Overview of <br /> My <span className="text-primary">Professional Journey</span>
                        </h2>
                        <Items />
                        <div className="relative mt-8">
                            <div className="w-32 h-14 absolute left-4 -top-1 border-2 border-primary rounded-xs inset-0" />
                            <button className="relative w-34 h-12 rounded-xs bg-primary font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xl active:scale-95 duration-300 text-sm group">
                                Learn more <MdArrowForward size={20} className="group-hover:translate-x-2 duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}
