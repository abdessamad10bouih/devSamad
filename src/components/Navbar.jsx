import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShinyButton from "@/components/ui/shiny-button";
import { CircleChevronRight, Menu } from "lucide-react";

function Navbar({activeState}) {
  const [active, setActive] = useState(activeState);
  const [show, setShow] = useState(true);
  return (
    <nav className="w-full h-20 sm:justify-between flex shadow-sm ">
      <div className="w-[30%] h-full flex sm:w-[50%] items-center justify-center p-4">
        <h1 className="text-4xl sm:text-3xl font-bold">
          Dev<span className="text-teal-500">Samad</span>
        </h1>
      </div>
      <ul className="w-[60%] sm:hidden h-full flex items-center justify-between">
            <Tabs path='/' active={() => setActive("Home")}  className={active === "Home" && "border-b-2 rounded-lg border-teal-500"}>Home</Tabs>
            <Tabs path='/border-generator' className={active === "Border-Generator" && "border-b-2 rounded-lg border-teal-500"} >Border-Generator</Tabs>
            <Tabs path='/palette' className={active === "Color-palette" && "border-b-2 rounded-lg border-teal-500"} >Color-palette</Tabs>
            <Tabs path='/tailwind-gradient' className={active === "Tailwind-Gradient" && "border-b-2 rounded-lg border-teal-500"} >Background-Gradient</Tabs>
            <Tabs path='/filter' className={active === "Filter" && "border-b-2 rounded-lg border-teal-500"} >Filter Generator</Tabs>
      </ul>
      <div className="w-[30%] sm:hidden h-full flex items-center justify-center">
            <Link to={'/contact'}><ShinyButton className="bg-teal-500/80 text-white">Contact Me</ShinyButton></Link>
      </div>
      <div className="hidden sm:flex w-[50%] h-full items-center justify-end px-5">
        <Menu className="cursor-pointer" onClick={() => setShow(!show)} />
      </div>
      <ul className={show ? "hidden" : " hidden sm:flex flex-col w-[70%] h-full items-center justify-center space-y-8 bg-white absolute right-0 z-[100]"}>
            <div className="w-full h-20 p-4 flex items-center justify-end absolute top-0">
              <CircleChevronRight className="cursor-pointer" onClick={() => setShow(!show)} />
            </div>
            <Tabs path='/' active={() => setActive("Home")}  className={active === "Home" && "border-b border-teal-500"}>Home</Tabs>
            <Tabs path='/border-generator' className={active === "Border-Generator" && "border-b border-teal-500"} >Border-Generator</Tabs>
            <Tabs path='/palette' className={active === "Color-palette" && "border-b border-teal-500"} >Color-palette</Tabs>
            <Tabs path='/tailwind-gradient' className={active === "Tailwind-Gradient" && "border-b border-teal-500"} >Tailwind-Gradient</Tabs>
      </ul>
    </nav>
  );
}

export default Navbar;

const Tabs = ({path, children, className, active}) => {
    return(
        <Link value={active} className={`font-medium hover:border-b hover:border-teal-500 ${className}`} to={path}>{children}</Link>
    )
}