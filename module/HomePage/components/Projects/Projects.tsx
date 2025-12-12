"use client"

import { PageContainer } from "@/components"
import { PROJECT_GLASSES, PROJECT_TASTENEST, PROJECT_VOYAGGI } from "@/constants/images/images"
import { taskFlowApi, tasteNest, voyaggi } from "@/constants/projects"
import { usePorfolioStore } from "@/store/contextPorpofolio"
import Image from "next/image"
import { FaXmark } from "react-icons/fa6"
import { IoArrowBackOutline } from "react-icons/io5"

export const Projects = () => {

    const { setOpenModal, setProject } = usePorfolioStore()

    return (
        <div className='py-16 relative min-h-dvh'>

            <div className="w-full h-20 opacity-50 absolute bottom-0 left-0 bg-linear-to-t from-primary via-transparent to-transparent" />
            <PageContainer>
                <div className="absolute bottom-20 left-8 border-4 border-primary p-2 rounded-full" />
                <div className="absolute bottom-40 left-16 bg-primary p-1 rounded-full" />

                <div className="absolute bottom-[40%] right-8 text-primary text-2xl rotate-6" >
                    <FaXmark />
                </div>
                {/* title */}
                <div className='flex justify-between'>
                    <div className='w-fit'>
                        <h2 className='text-3xl text-primary'>My</h2>
                        <h2 className='text-3xl text-white w-full text-right pl-8 -mt-1'>Projects</h2>
                    </div>
                    <div className='flex gap-2 items-center w-full justify-end'>
                        <span className='w-1/2 h-px bg-white' />
                        <h2 className='text-sm uppercase tracking-[0.5em]'>Projects</h2>
                    </div>
                </div>
                {/* cards projects */}
                <div className='flex items-center justify-center mt-8'>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4 gap-y-16 w-full overflow-x-auto py-8'>
                        {/* Card1 */}
                        <div className="cardPolygon w-72 h-96 relative group" style={{ filter: 'drop-shadow(2px 0.1px 15px #667eea)' }}>
                            <div className='polygon1 transition-all duration-700 w-72 h-96 transform-r relative group'>
                                <div className="w-72 h-full absolute top-0 left-0">
                                    <Image src={PROJECT_GLASSES} fill alt="project glasses" className="bg-center" />
                                </div>
                                <div className="h-full lg:h-0 w-full absolute bottom-0 left-0 group-hover:h-96 duration-300 overflow-hidden z-50">
                                    <div className="absolute bottom-0 w-full h-96 bg-black p-4">
                                        <p className="text-md font-light text-white ml-2">
                                            Laudantium fugiat eius expedita ex ipsum, deleniti, repellat necessitatibus soluta natus reprehenderit alias nesciunt asperiores consequatur error, accusamus itaque laborum debitis dignissimos.
                                        </p>
                                        <div className="flex gap-2 items-center justify-center mt-4 pr-10">
                                            <div className="w-8 h-8 rounded-full bg-red-800"></div>
                                            <div className="w-8 h-8 rounded-full bg-sky-800"></div>
                                            <div className="w-8 h-8 rounded-full bg-amber-800"></div>
                                            <div className="w-8 h-8 rounded-full bg-purple-800"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute bottom-16 left-0 px-4 w-full'>
                                <button
                                    onClick={() => {
                                        setOpenModal(true);
                                        setProject(tasteNest)
                                    }}
                                    className="absolute text-xl p-1 rounded-full text-black lg:opacity-0 group-hover:opacity-100 bg-white top-3 right-18 -rotate-135 hover:scale-105 hover:shadow-2xl hover:-rotate-205 cursor-pointer duration-300">
                                    <IoArrowBackOutline />
                                </button>
                                <h2 className='text-xs uppercase tracking-[0.25em]'>Front end</h2>
                                <h2 className='text-2xl font-medium'>Taste Nest</h2>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="cardPolygon w-72 h-89 relative group" style={{ filter: 'drop-shadow(2px 2px 15px #667eea)' }}>
                            <div className='polygon2 transition-all duration-700 w-72 h-89 relative group'>
                                <div className="w-72 h-89 absolute top-0 left-0">
                                    <Image src={PROJECT_VOYAGGI} fill alt="project glasses" className="bg-center" />
                                </div>
                                <div className="h-full lg:h-0 w-full absolute bottom-0 left-0 group-hover:h-89 duration-300 overflow-hidden z-50">
                                    <div className="absolute bottom-0 w-full h-96 bg-black p-4">
                                        <p className="text-md font-light text-white mt-8 ml-8">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        </p>
                                        <div className="flex gap-2 items-center justify-center mt-4 pr-10">
                                            <div className="w-8 h-8 rounded-full bg-red-800"></div>
                                            <div className="w-8 h-8 rounded-full bg-sky-800"></div>
                                            <div className="w-8 h-8 rounded-full bg-amber-800"></div>
                                            <div className="w-8 h-8 rounded-full bg-purple-800"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute bottom-9 left-2 w-full text-right pr-10'>
                                <button
                                    onClick={() => {
                                        setOpenModal(true);
                                        setProject(voyaggi)
                                    }}
                                    className="absolute text-xl p-1 rounded-full text-black lg:opacity-0 group-hover:opacity-100 bg-white top-3 left-12 -rotate-45 hover:scale-105 hover:shadow-2xl hover:rotate-45 cursor-pointer duration-300">
                                    <IoArrowBackOutline />
                                </button>
                                <h2 className='text-xs uppercase tracking-[0.25em]'>Full stack</h2>
                                <h2 className='text-2xl font-medium'>Voyaggi</h2>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="cardPolygon w-72 h-96 relative group" style={{ filter: 'drop-shadow(2px 0.1px 15px #667eea)' }}>
                            <div className='polygon3 transition-all duration-700 w-72 h-96 relative group'>
                                <div className="w-72 h-96 absolute bottom-0 left-0">
                                    <Image src={PROJECT_TASTENEST} fill alt="project glasses" className="bg-center" />
                                </div>
                                <div className="h-full lg:h-0 w-full absolute bottom-0 left-0 group-hover:h-96 duration-300 overflow-hidden z-50">
                                    <div className="absolute bottom-0 w-full h-96 bg-black p-4 px-8">
                                        <p className="text-md font-light text-white">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et assumenda sunt quibusdam, repudiandae quam aut eius odit quasi dolores officiis eos quidem possimus! Quis?
                                        </p>
                                        <div className="flex gap-2 items-center mt-4">
                                            <div className="w-8 h-8 rounded-full bg-red-800"></div>
                                            <div className="w-8 h-8 rounded-full bg-sky-800"></div>
                                            <div className="w-8 h-8 rounded-full bg-amber-800"></div>
                                            <div className="w-8 h-8 rounded-full bg-purple-800"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='absolute bottom-16 right-0 overflow-hidden text-right pr-8 w-full'>
                                <button
                                    onClick={() => {
                                        setOpenModal(true);
                                        setProject(taskFlowApi)
                                    }}
                                    className="absolute text-xl p-1 rounded-full text-black lg:opacity-0 group-hover:opacity-100 bg-white top-3 left-12 -rotate-45 hover:scale-105 hover:shadow-2xl hover:rotate-45 cursor-pointer duration-300">
                                    <IoArrowBackOutline />
                                </button>
                                <h2 className='text-xs uppercase tracking-[0.25em]'>Back end</h2>
                                <h2 className='text-2xl font-medium'>TaskFlow API</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}
