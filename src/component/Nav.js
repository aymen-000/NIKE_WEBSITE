import headerlogo from "../assets/images/headerlogo.svg"
import { navLinks } from "../constants"
import { hamburger } from "../assets/icons"
import { useState } from "react"
const Nav = () => {
    const [show0,setShow]= useState(false)
  return (
    <header className="padding-x py-8 abolute z-10 w-full">
        <nav className="flex justify-between items-center max-container  ">
            <a href="/">
                <img src={headerlogo} alt="LOGO" width={130} height={40}/>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item)=>{
                    return <li key={item.label}>
                        <a href={item.href}  className="font-monts errat leading-normal text-lg text-slate-gray">{item.label}</a>
                    </li>
                })}
            </ul>
            <div className="hidden max-lg:block" onClick={()=>{setShow(!show0)}}>
                <img src={hamburger} alt="huburgur" width={25} height={25}/>
            </div>
            <ul className= { show0 ? "hidden max-lg:block nav_bar space-y-2" : "hidden"}>
                {navLinks.map((item)=>{
                    return <li key={item.label}>
                        <a href={item.href}  className="font-monts errat leading-normal text-lg text-slate-gray">{item.label}</a>
                    </li>
                })}
            </ul>
        </nav>
    </header>
  )
}

export default Nav
