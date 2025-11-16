import { PageContainer, TitleSection } from "@/components"
import { Items } from "./Items"

export const About = () => {
    return (
        <div className="relative">
            <div className="absolute bottom-32 md:top-1/2 md:-translate-y-1/2 left-0 bg-linear-to-b from-black via-secondary to-black w-full md:w-[30%] h-44 opacity-80" />
            <PageContainer>
                <div className="flex flex-col-reverse md:flex-row py-16 md:gap-x-4 lg:gap-x-20 gap-y-8 items-center justify-center">
                    <div className="relative w-full flex justify-center items-center">
                        <div className="w-full max-w-72 sm:w-72 lg:min-w-96 aspect-square rounded-xl bg-red-500 sm:bg-green-500 md:bg-sky-500 lg:bg-secondary relative">
                            <div className="absolute bottom-0 left-0 bg-black rounded-tr-4xl pt-2 pr-2">
                                <div className="w-42 h-14 bg-primary rounded-full shadow-2xl">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <TitleSection text="About me" />
                        <h2 className="text-3xl">
                            A Brief Overview of <br /> My <span className="text-primary">Professional Journey</span>
                        </h2>
                        <Items />
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}
