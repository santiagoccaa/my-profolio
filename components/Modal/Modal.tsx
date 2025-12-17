"use client"

import { IoClose, IoLinkSharp } from "react-icons/io5"
import { motion, AnimatePresence } from "framer-motion"
import { usePorfolioStore } from "@/store/contextPorpofolio"
import Image from "next/image"
import { useBlockScroll } from "@/hooks"


export const Modal = () => {
    const { openModal, setOpenModal, project } = usePorfolioStore()

    useBlockScroll(openModal);
    if (!project) return

    const { description, description2, image, link, name, tecnologis } = project

    return (
        <AnimatePresence>
            {openModal && (
                <motion.div
                    key="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50"
                    onClick={() => setOpenModal(false)}
                >
                    <div className="absolute left-8 inset-0 pointer-events-none">
                        {/* IZQUIERDA */}
                        <div className="absolute left-0 top-0 h-full w-32">
                            <div className="border-2 border-primary w-5 h-5 rounded-full absolute top-[58%] left-6" />
                            <div className="border-2 border-primary w-2 h-2 absolute top-[75%] left-14" />
                            <div className="bg-primary w-4 h-4 absolute rotate-45 top-[88%] left-10" />
                        </div>
                        {/* DERECHA */}
                        <div className="absolute right-8 top-0 h-full w-32">
                            <div className="border-2 border-primary w-4 h-4 absolute top-[12%] right-10" />
                            <div className="bg-primary w-3 h-3 rounded-full absolute top-[42%] right-14" />
                            <div className="border-2 border-primary w-2 h-2 rotate-45 absolute top-[28%] right-8" />
                        </div>
                    </div>
                    {/* Modal content container */}
                    <motion.div
                        key="modal-content"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white rounded-sm relative max-w-4xl h-[90dvh] 2xl:h-[80dvh] w-full shadow-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // evitar cerrar al hacer click dentro
                    >
                        {/* Modal Content */}
                        <div className="flex flex-col md:flex-row h-full relative gap-8">
                            {/* Close Button */}
                            <button
                                aria-label="close"
                                onClick={() => setOpenModal(false)}
                                className="absolute top-4 right-4 text-3xl cursor-pointer hover:rotate-180 duration-300 text-black rounded-full"
                            >
                                <IoClose />
                            </button>

                            <div className="w-2/6 h-full hidden md:flex">
                                <div className="p-6 w-full bg-primary shadow-lg shadow-black-light rounded-r-[4rem] drop-shadow-2xl" >
                                    {/* Image */}
                                    <div className="h-full max-h-[450px] relative">
                                        <Image src={image} fill alt={name} className="-rotate-6 object-cover" style={{ filter: 'drop-shadow(1px 10px 10px #1C1C1C)' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-4/6 h-full">
                                <div className="h-full flex flex-col gap-y-4 p-6">
                                    <h2 className="text-black text-4xl font-extrabold">
                                        {project.name}
                                        <div className="w-20 h-1 bg-primary block mt-2" />
                                    </h2>
                                    {/* Description */}
                                    <div>
                                        <p className="text-black-secondary font-extralight text-lg md:text-sm mt-8">{description}</p>
                                        <p className="text-black-secondary font-extralight text-lg md:text-sm mt-2">{description2}</p>
                                    </div>
                                    <div className="mt-8">
                                        {/* Tecnologies */}
                                        <h2 className="text-sm font-medium uppercase text-black-light">Developed with</h2>
                                        <div className="flex gap-4 mt-4">
                                            {tecnologis.map((i, index) => (
                                                <div key={index} className="w-10 h-10 relative">
                                                    <Image src={i} fill alt="logo" className="object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full flex flex-1 justify-end items-end">
                                        <div className="rounded-sm w-full p-2 h-14 relative overflow-hidden flex justify-between items-center">
                                            {/* Button redirect */}
                                            <div className="w-full h-full bg-primary absolute top-0 left-0 opacity-10" />
                                            <span className="text-primary font-bold text-md">{link}</span>
                                            <a href={link} rel="noopener noreferrer" target="_blank" className="w-10 h-10 flex justify-center items-center text-2xl rounded-sm bg-primary cursor-pointer relative ml-8 shadow hover:scale-110 duration-300 font-extralight">
                                                <IoLinkSharp />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
