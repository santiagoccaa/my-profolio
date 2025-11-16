import { IoMdMore } from "react-icons/io"

export const CardProject = () => {
    return (
        <div className="w-full sm:w-80 h-96 bg-slate-900 p-6 rounded-xl relative shadow-sm shadow-slate-900 flex flex-col">
            <div className="w-full h-44 rounded-xl bg-secondary">
                
            </div>
            <div className="mt-2">
                <h2 className="text-xs uppercase">Backend</h2>
                <h2 className="text-md font-medium">Project Name</h2>

                <div className="flex gap-4 items-center mt-4">
                    <div className="h-8 w-8 rounded-full bg-red-400"></div>
                    <div className="h-8 w-8 rounded-full bg-sky-400"></div>
                    <div className="h-8 w-8 rounded-full bg-purple-400"></div>
                    <div className="h-8 w-8 rounded-full bg-green-400"></div>
                </div>
            </div>

            <div className="flex-1 flex items-end">
                <button className="text-2xl cursor-pointer rounded-full "><IoMdMore /></button>
            </div>

            <div className="absolute -bottom-1 -right-1 w-1/2 bg-black h-14 rounded-tl-2xl flex justify-center items-center">
                <button className="px-4 py-2 rounded-full bg-primary text-sm shadow-sm shadow-primary hover:shadow-md hover:scale-105 cursor-pointer duration-300">View Project</button>
            </div>
        </div>
    )
}

