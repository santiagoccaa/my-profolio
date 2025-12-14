import { PageContainer, TitleSection } from "@/components"
import { FIGMA, GITHUB, mysql, N8N, nextJs, node, react, strapi, supabase, tailwind, typescript } from "@/constants/icons/icons"
import Image from "next/image"

export const Tools = () => {
    return (
        <div className="flex items-center w-full my-16">
            <PageContainer>
                <div className="flex w-full justify-center mb-8">
                    <TitleSection text="Mi conocimientos" />
                </div>
                <div className="flex h-44 items-center w-full justify-between gap-8 overflow-x-auto bg-red-400">
                    <Image src={nextJs} width={200} height={200} alt="logo nextjs" className="w-12 h-12 bg-white rounded-full" />
                    <div className="relative group">
                        <div className="relative">
                            <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 bg-black px-2 rounded-sm z-20">
                                MySql
                            </div>
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-4 w-4 bg-black rotate-45 z-10" />
                        </div>
                        <Image src={mysql} width={200} height={200} alt="logo nextjs" className="w-12 h-12" />
                    </div>
                    <Image src={node} width={200} height={200} alt="logo nextjs" className="w-12 h-12" />
                    <Image src={react} width={200} height={200} alt="logo nextjs" className="w-12 h-12" />
                    <Image src={strapi} width={200} height={200} alt="logo nextjs" className="w-12 h-12" />
                    <Image src={tailwind} width={200} height={200} alt="logo nextjs" className="w-12 h-12" />
                    <Image src={typescript} width={200} height={200} alt="logo nextjs" className="w-12 h-12" />
                    <Image src={supabase} width={200} height={200} alt="logo nextjs" className="w-12 h-12" />
                    <Image src={FIGMA} width={200} height={200} alt="logo nextjs" className="w-14 h-14" />
                    <Image src={GITHUB} width={200} height={200} alt="logo nextjs" className="w-12 h-12" />
                    <Image src={N8N} width={200} height={200} alt="logo nextjs" className="w-12 h-12" />
                </div>
            </PageContainer>
        </div>
    )
}

