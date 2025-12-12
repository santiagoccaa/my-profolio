"use client"

import { IoClose } from "react-icons/io5"
import { motion, AnimatePresence } from "framer-motion"
import { usePorfolioStore } from "@/store/contextPorpofolio"
import Image from "next/image"
import { LuLink } from "react-icons/lu"

export const Modal = () => {
    const { openModal, setOpenModal, project } = usePorfolioStore()

    if (!project) return

    const { description, image, link, name, tecnologis } = project

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
                    {/* Modal content container */}
                    <motion.div
                        key="modal-content"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.25 }}
                        className="bg-primary rounded-sm relative max-w-4xl h-[90dvh] w-full shadow-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // evitar cerrar al hacer click dentro
                    >
                        <div className="absolute h-full w-full">
                            <div className="h-1/2 w-full bg-primary" />
                            <div className="h-1/2 w-full bg-white" />
                        </div>
                        {/* Close Button */}
                        {/* Modal Content */}
                        <div className="flex h-full relative">
                            <button
                                onClick={() => setOpenModal(false)}
                                className="absolute top-4 right-4 text-3xl cursor-pointer hover:-rotate-180 duration-300 text-black"
                            >
                                <IoClose />
                            </button>

                            <div className="w-full md:w-1/2 h-full flex">
                                <div className="p-6 bg-primary rounded-r-[4rem]">
                                    <Image src={image} width={800} height={800} alt={name} className="h-full" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="rounded-l-[4rem] bg-white h-full flex flex-col gap-y-4 p-6">
                                    <h2 className="text-black text-3xl font-bold">
                                        {project.name}
                                    </h2>
                                    <p className="text-black text-sm font-light text-justify">{description}</p>
                                    <div>
                                        {tecnologis.map((i, index) => (
                                            <span key={index} className="text-black">
                                                {i}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="w-full flex flex-1 justify-end items-end">

                                        <div className="rounded-sm border-2 border-primary w-full h-12 relative overflow-hidden pl-4 flex justify-between items-center">
                                            <div className="w-full h-full bg-primary absolute top-0 left-0 opacity-20" />
                                            <span className="text-primary font-bold text-md">{link}</span>
                                            <a href={link} rel="noopener noreferrer" target="_blank" className="w-14 flex justify-center items-center text-2xl h-full bg-primary cursor-pointer relative">
                                                <LuLink />
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
