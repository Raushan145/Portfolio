import React from 'react'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
            <div className='md:h-30 bg-(--surface-secondary) md:py-0 py-8 mt-5 pb-5 gap-8 md:gap-0  mx-auto md:px-20 px-10  flex md:flex-row flex-col justify-between  md:items-center'>

                <div>
                    <h4 className='bg-gradient-to-r from-blue-300 to-purple-800 bg-clip-text text-transparent text-2xl font-bold'>Raushan Kumar</h4>
                    <p className='text-sm text-(--text-secondary) mt-3'>Building with precision. Driven by innovation</p>
                </div>

                <div>
                      <ul className={`items-start  grid grid-cols-3 gap-x-8 gap-y-3 max-w-120 text-sm  }`}>
                                      
                    
                                        <li>
                                            <a href="#Home" className=' hover:text-blue-500  font-semibold  ' >Home</a>
                                        </li>
                                        <li>
                                            <a href="#About" className=' hover:text-blue-500 font-semibold '>About</a>
                                        </li>
                                        <li>
                                            <a href="#Skills" className=' hover:text-blue-500 font-semibold  '>Skills</a>
                                        </li>
                                        <li>
                                            <a href="#Projects" className=' hover:text-blue-500  font-semibold '>Projects</a>
                                        </li>
                                        <li>
                                            <a href="#Exprience" className=' hover:text-blue-500  font-semibold '>Experience</a>
                                        </li>
                                        <li>
                                            <a href="#Contact" className=' hover:text-blue-500  font-semibold   '>Contact</a>
                                        </li>
                                </ul>

                </div>

                <div className='pb-1'>

                    <div className='flex gap-5 pb-2 justify-center items-center '>
                                    {/* Linkedin */}
                                <div>
                                    <a href="https://www.linkedin.com/in/raushan-kumar-b0704b270?utm_source=share_via&utm_content=profile&utm_medium=member_android" target='blank' rel='noopener noreferrer' 
                                    className='w-8 h-8 rounded-full bg-(--surfaceicon) text-(--texticon) flex justify-center items-center text-lg hover:bg-[#ffff] hover:text-[#0A66C2] transition duration-300 '><FaLinkedin /></a>
                                </div>
            
                                {/* GitHub */}
                                    <div>
                                    <a href="https://github.com/Raushan145" target='blank' rel='noopener noreferrer' 
                                    className='w-8 h-8 rounded-full bg-(--surfaceicon) text-(--texticon) flex justify-center items-center text-lg hover:bg-[#ffff] hover:text-black transition duration-300 '><FaGithub /></a>
                                </div>
            
                                {/* Twitter */}
                                    <div>
                                    <a href="https://x.com/RaushanKum4295" target='blank' rel='noopener noreferrer' 
                                    className='w-8 h-8 rounded-full bg-(--surfaceicon) text-(--texticon) flex justify-center items-center text-lg hover:bg-[#ffff] hover:text-[#0A66C2] transition duration-300 '><FaTwitter /></a>
                                </div>

                                    {/* Gamil */}
                                <div>
                                    <a href="mailto:raushankumar89780@gmail.com" target='blank' rel='noopener noreferrer' 
                                    className='w-8 h-8 rounded-full bg-(--surfaceicon) text-(--texticon) flex justify-center items-center text-lg hover:bg-[#ffff] hover:text-[#EA4335] transition duration-300 '><MdOutlineEmail /></a>
                                </div>

                            </div>

                    <div className='md:flex md:gap-2 md:justify-center md:items-center'>
                        <div className='flex justify-center items-center gap-2 md: py-0 py-2'>
                            <span className='block md:inline-block text-center'>&copy; 2026</span>
                            <span className='text-sm text-(--text-secondary) '> Raushan Kumar</span>
                        </div>
                            <span className='text-sm text-(--text-secondary) '> Building with precision. Driven by innovation</span>
                    </div>
                </div>

            </div>
    </footer>
  )
}

export default Footer
