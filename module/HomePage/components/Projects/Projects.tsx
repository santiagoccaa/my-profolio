import { PageContainer } from "@/components"
import { PROJECT_GLASSES } from "@/constants/images/images"
import Image from "next/image"
import { FaXmark } from "react-icons/fa6"

export const Projects = () => {
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
                    <div className='flex gap-2'>

                        {/* Card1 */}
                        <div className="cardPolygon w-72 h-96 relative" style={{ filter: 'drop-shadow(5px 0.1px 20px #667eea)' }}>
                            <div className='polygon1 transition-all duration-700 bg-slate-900 w-72 h-96 transform-r relative'>
                                <div className="bg-linear-to-t from-primary via-slate-900 to-slate-900 absolute bottom-0 left-0 h-28 w-full" />
                            </div>
                            <div className='absolute bottom-16 left-0 px-4 w-full'>
                                <h2 className='text-xs uppercase tracking-[0.25em]'>Front end</h2>
                                <h2 className='text-2xl font-medium'>Taste Nest</h2>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="cardPolygon w-72 h-89 relative" style={{ filter: 'drop-shadow(5px 0.1px 20px #667eea)' }}>
                            <Image src={PROJECT_GLASSES} width={400} height={400} alt="project glasses" className="w-72 h-96 absolute top-0 left-0" />
                            <div className='polygon2 bg-linear-to-t transition-all duration-700 bg-transparent w-72 h-89 relative'>
                            </div>

                            <div className='absolute bottom-8 left-2 w-full text-center'>
                                <h2 className='text-xs uppercase tracking-[0.25em]'>Full stack</h2>
                                <h2 className='text-2xl font-medium'>Voyaggi</h2>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="cardPolygon w-72 h-96 relative" style={{ filter: 'drop-shadow(5px 0.1px 20px #667eea)' }}>
                            <div className='polygon3 transition-all duration-700  flex flex-col justify-end items-center py-15 bg-slate-900 w-72 h-96 relative'>
                                <div className="bg-linear-to-t from-primary via-slate-900 to-slate-900 absolute bottom-0 left-0 h-28 w-full" />
                            </div>
                            <div className='absolute bottom-16 right-0 text-right pr-8 w-full'>
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
