import React, { ReactNode } from 'react'
import { PageContainer } from '../PageContainer'
import { IoClose } from 'react-icons/io5'

interface ModalProps {
    children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
    return (
        <div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-[2px] bg-slate-900 bg-opacity-80 transition-opacity duration-300 ease-out animate-fadeIn"
        >
            {/* Modal Container */}
            <div
                className="bg-white h-full lg:h-auto w-full lg:w-auto rounded-lg shadow-lg relative transition-all overflow-hidden z-50"
            >
                <div className="py-2 pr-1 absolute left-0 right-0 top-0 w-full h-10 flex items-center justify-end">
                    {/* Close Button */}
                    <button
                        className='text-4xl'
                    >
                        <IoClose className='text-grey' />
                    </button>
                </div>

                {/* Modal Content */}
                <div className={`h-full lg:h-auto lg:max-h-[80vh] pb-[120px] lg:pb-6 mt-10 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-button]:hidden`}>
                    <PageContainer>
                        {children}
                    </PageContainer>
                </div>
            </div>
        </div>
    )
}
