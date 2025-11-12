"use client"

import { PageContainer } from "../PageContainer"
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import GetStarted from "./GetStarted";
import { LuX } from "react-icons/lu";

const navbarHome = [
  {
    name: "About"
  },
  {
    name: "Projects"
  },
  {
    name: "Contact"
  }
]

export const NavBar = () => {

  const [opennav, setOpenNav] = useState(false)

  return (
    <nav className="py-3 absolute top-0 left-0 right-0 w-full z-20">
      <div className="absolute -top-40 -left-40 w-80 aspect-square bg-red">

      </div>
      <PageContainer>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary" />
            <h2 className="text-2xl font-bold">Santiago <span className="text-primary">.</span></h2>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-12">
              {
                navbarHome.map((item, index) =>
                  <li key={index} className="text-lg font-medium relative group hover:text-primary transition-all duration-300 cursor-pointer">
                    {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-[1.5px] group-hover:w-full bg-primary transition-all duration-300" />
                  </li>
                )
              }
              <li>
                <GetStarted />
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setOpenNav(!opennav)}>
              <RiMenu4Fill color="white" size={30} />
            </button>
          </div>

          <div className={`absolute h-screen  bg-linear-to-b from-black to-secondary top-0 
          ${opennav ? 'w-80' : 'w-0'} right-0 overflow-hidden  transition-all duration-300`}>
            <div className="absolute h-full w-80 border-l-2 border-secondary">
              <button onClick={() => setOpenNav(!opennav)} className="absolute right-4 top-4 text-4xl">
                <LuX />
              </button>
              <ul className="flex flex-col items-center gap-12 mt-20">
                {
                  navbarHome.map((item, index) =>
                    <li key={index} className="text-xl font-medium relative group hover:text-primary transition-all duration-300">
                      {item.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-[1.5px] group-hover:w-full bg-primary transition-all duration-300" />
                    </li>
                  )
                }
                <li className="mt-8">
                  <GetStarted />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </nav>
  )
}
