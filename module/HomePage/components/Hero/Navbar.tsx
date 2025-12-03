import { MotionTransition } from '@/components/Transition'
import { RiMenu4Line } from 'react-icons/ri'

const Navbar = () => {
    return (
        <MotionTransition delay={1} duration={0.8} position="left">
            <div className="w-full md:w-fit md:h-full absolute top-4 md:bottom-0 left-1 md:top-0 flex flex-row-reverse md:flex-col justify-center gap-2 z-30 items-center">
                <button className="w-8 md:w-10 h-8 md:h-10 rounded-full hover:scale-90 duration-300 flex items-center justify-center text-white cursor-pointer">
                    <RiMenu4Line size={30} />
                </button>
                <div className="h-px md:h-16 w-full md:w-px bg-white" />
                <div className="flex flex-row-reverse md:flex-col text-sm uppercase">
                    <span className="md:-rotate-90">E</span>
                    <span className="md:-rotate-90">M</span>
                    <span className="md:-rotate-90">O</span>
                    <span className="md:-rotate-90">H</span>
                </div>
            </div>
        </MotionTransition>
    )
}

export default Navbar
