import React, { useEffect, useState } from 'react'
import { RiMoonLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { motion } from "motion/react"

const Navbar = () => {

    const [theme, setTheme] = useState(()=>{return localStorage.getItem("theme") || "light"});
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState("Home");
    const [isScroll, setIsScroll] = useState(false);

    // const Links = ["Home" , "About" , "Skill" , "Projects"]


    useEffect(()=>{
        localStorage.setItem("theme", theme);
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
             document.documentElement.classList.remove("dark");
        }
    },[theme])

    useEffect(()=>{
        const handleScroll = () => {
            // setIsScroll(window.screenY >10);
            setIsScroll(window.scrollY > 10);
            setShowMenu(false);   
        }

        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }

    },[])

    // Automatic Nav change hoga scrll pr

    useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

    const toggleMenu = ()=>{
        console.log("clicked")
        setShowMenu(!showMenu);
    }

    const toggleTheme = ()=>{
      setTheme(theme === "light" ? "dark" : "light");

    }

  return (
   <header className='shadow-lg bg-(--bg) fixed top-0 right-0 left-0 z-50'>
        <motion.nav
         initial = {{opacity: 0, y:-100}}
            animate = {{opacity:1, y:0}}
            transition={{duration:0.8,ease:'easeOut'}}
        
        className='flex h-[8vh] flex-row items-center justify-between p-6 '>
            {/* Logo */}
            <div>
                <h2 className='font-bold text-2xl'>RK</h2>
            </div>
            {/* Nav Action */}
            <div>
                <ul className='hidden gap-6 items-center justify-center md:flex'>
                    
                   <li>
                        <a href="#Home" onClick={()=> setActive("Home")} className={` transition-all duration-300 font-semibold ${active == "Home" ? "text-blue-500 text-lg" : "text-(--text) dark:text-white hover:text-blue-500"}`} >Home</a>
                        {/* {({isActive}) => `transition-all duration-300 ${isActive ? "text-blue-600 text-lg " : "text-gray-500 text-base hover:text-blue-500"} */}
                    </li>
                    <li>
                        <a href="#About" onClick={()=> setActive("About")} className={` transition-all duration-300  font-semibold ${active == "About" ? "text-blue-500 text-lg" : "text-(--text) dark:text-white hover:text-blue-500"}`} >About</a>
                    </li>
                    <li>
                        <a href="#Skills" onClick={()=> setActive("Skills")} className={` transition-all duration-300 font-semibold ${active == "Skills" ? "text-blue-500 text-lg" : "text-(--text) dark:text-white hover:text-blue-500"}`} >Skills</a>
                    </li>
                    <li>
                        <a href="#Projects" onClick={()=> setActive("Projects")} className={` transition-all duration-300 font-semibold ${active == "Projects" ? "text-blue-500 text-lg" : "text-(--text) dark:text-white hover:text-blue-500"}`} >Projects</a>
                    </li>
                    <li>
                        <a href="#Experience" onClick={()=> setActive("Experience")} className={` transition-all duration-300 font-semibold ${active == "Experience" ? "text-blue-500 text-lg" : "text-(--text) dark:text-white hover:text-blue-500"}`} >Experience</a>
                    </li>
                    <li>
                        <a href="#Contact" onClick={()=> setActive("Contact")} className={` transition-all duration-300 font-semibold ${active == "Contact" ? "text-blue-500 text-lg" : "text-(--text) dark:text-white hover:text-blue-500"}`} >Contact</a>
                    </li>

                </ul>
            </div>

            {/*  */}
            <div className='flex items-center justify-center gap-5'>
                
                        {/* theme */}

                <button className='text-xl cursor-pointer h-7 w-7 rounded-full outline-black outline-1 flex justify-center items-center' onClick={toggleTheme}> {theme === "light" ? <RiMoonLine /> : <IoIosSunny /> } </button>
                
                {/* Hamburger */}
               {/* <a href="#" className='text-zinc-800 text-3xl lg:hidden md:hidden sm:block' onClick={toggleMenu}>{showMenu ? <TbMenu3 />: <TbMenu2 />}</a> */}
                    <span className='flex md:hidden text-2xl text-[var-(--text)] cursor-pointer ' onClick={toggleMenu}>{showMenu ? <TbMenu3 /> : <TbMenu2 />}</span>

                <div className='md:flex justify-center items-center hidden gap-5 bg-blue-700 text-white rounded-full px-3 py-1 cursor-pointer' id='Contact'>
                        <button>Connect</button>
                        <span className='w-5 h-5 text-lg text-(--text) rounded-full '><FaArrowRightLong /></span>
                </div>
            </div>

            {/*  Mobile Action bar */}

             <ul className={`items-start  absolute top-1 transform flex flex-col gap-6  py-3 pl-4 pb-10 bg-(--surface) transition-all duration-500 ease-in-out justify-center w-52  dark:bg-slate-900 rounded-xl md:hidden ${showMenu ? 'right-1 opacity-100' : '-right-full opacity-0 pointer-events-none'}`}>
                  
                    <button className='self-end text-4xl pr-4 cursor-pointer'  onClick={() =>setShowMenu(false) }><RxCross2 /></button>

                    <li className='w-full'>
                        <a href="#Home" className='hover:bg-zinc-200 hover:text-black font-semibold text-2xl   px-5 py-2 rounded-2xl' >Home</a>
                    </li>
                    <li>
                        <a href="#About" className='hover:bg-zinc-200 hover:text-black font-semibold text-2xl  px-5 py-2 rounded-2xl'>About</a>
                    </li>
                    <li>
                        <a href="#Skills" className='hover:bg-zinc-200 hover:text-black font-semibold text-2xl  px-5 py-2 rounded-2xl'>Skills</a>
                    </li>
                    <li>
                        <a href="#Projects" className='hover:bg-zinc-200 hover:text-black font-semibold text-2xl  px-5 py-2 rounded-2xl'>Projects</a>
                    </li>
                    <li>
                        <a href="#Experience" className='hover:bg-zinc-200 hover:text-black font-semibold text-2xl  px-5 py-2 rounded-2xl'>Experience</a>
                    </li>
                    <li>
                        <a href="#Contact" className='hover:bg-zinc-200 hover:text-black font-semibold text-2xl  px-5 py-2 rounded-2xl'>Contact</a>
                    </li>
            </ul>
        </motion.nav>
   </header>
  )
}

export default Navbar
