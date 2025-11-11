import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const GetStarted = () => {
    return (
        <button
            className="group relative p-4 md:p-2 rounded-full backdrop-blur-xl border-2 border-primary bg-linear-to-r from-primary to-secondary shadow-2xl hover:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-primary overflow-hidden"
        >
            <div
                className="absolute inset-0 bg-linear-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
            />

            <div className="relative z-10 flex items-center gap-2">
                <div className="flex-1 text-left">
                    <p
                        className="text-white font-medium text-xl lg:text-lg drop-shadow-sm"
                    >
                        Get Started
                    </p>
                </div>
                <div
                    className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                >
                    <MdOutlineKeyboardArrowRight />
                </div>
            </div>
        </button>
    )
}

export default GetStarted
