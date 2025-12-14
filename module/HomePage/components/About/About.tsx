import { PageContainer, TitleSection } from "@/components"
import { Items } from "./Items"
import { LuDownload } from "react-icons/lu"
import { MdArrowForward } from "react-icons/md"

export const About = () => {
    return (
        <div className="relative">
            <div className="absolute bottom-32 md:top-1/2 md:-translate-y-1/2 left-0 bg-linear-to-b from-black via-secondary to-black w-full md:w-[30%] h-44 opacity-60" />
            <PageContainer>
                <div className="flex flex-col-reverse md:flex-row py-16 md:gap-x-4 lg:gap-x-20 gap-y-8 items-center justify-center border-t-[1.5px] border-white">
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
                        <div className="w-full flex justify-end">
                            <TitleSection text="About me" />
                        </div>
                        <h2 className="text-3xl">
                            A Brief Overview of <br /> My <span className="text-primary">Professional Journey</span>
                        </h2>
                        <Items />
                        <div className="relative">
                            <div className="w-32 h-14 absolute left-4 -top-1 border-2 border-primary rounded-xs inset-0" />
                            <button className="relative w-34 h-12 rounded-xs bg-primary mt-8 font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xl hover:scale-95 duration-300 text-sm group">

                                Learn more <MdArrowForward size={20} className="group-hover:translate-x-2 duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}
