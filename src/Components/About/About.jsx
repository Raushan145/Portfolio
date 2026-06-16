import React from 'react'
import Heading from '../Heading/Heading'
import { motion } from "motion/react"

const About = () => {
  return (
   <section id='About'>
        <div className='md:max-w-300 md:mx-auto md:px-10 flex md:flex-row flex-col justify-between md:gap-10 gap-5 pb-5 py-10' id='About'>
            
            {/* Left About */}

            <motion.div
             initial = {{opacity: 0, y:50}}
             whileInView = {{opacity:1, y:0}}
             transition={{duration:0.4, delay:0.3}}
             viewport={{once: true}}

             className='flex-1 bg-(--surface-secondary) rounded-xl p-5'>
                <motion.h3
                initial = {{opacity: 0, y:30}}
                whileInView = {{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.5}}
                viewport={{once: true}}
                
                
                className='bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-3xl font-bold pb-4'>About Me</motion.h3>
                {/* <Heading text="About" heading="Me" size="text-[1.8rem]"/> */}
                <motion.p 

                 initial = {{opacity: 0, y:30}}
                 whileInView = {{opacity:1, y:0}}
                 transition={{duration:0.8, delay:0.5}}
                 viewport={{once: true}}
                
                className='text-(--text-secondary) pb-2'>Hi, I'm Raushan Kumar, a passionate MERN Stack Developer dedicated to building modern website, responsive, and high-performance web applications. I enjoy creating clean, maintainable code, solving real-world problems, and crafting seamless user experiences. I'm always eager to learn new technologies, improve my skills, and grow as a Full Stack Developer.</motion.p>
                <div className='flex justify-around items-center py-5'>
                    <div className='text-center p-3 bg-(--surface) rounded-xl'>
                        <span className={` text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-800 bg-clip-text text-transparent`}>1</span>
                        <p className='text-[0.8rem] font-sembold'>YEAR EXP.</p>
                    </div>
                    <div className='text-center p-3  rounded-xl bg-(--surface)'>
                        <span className={` text-2xl font-bold bg-gradient-to-l from-amber-200 to-amber-500 bg-clip-text text-transparent`}>10</span>
                        <p className='text-[0.8rem] font-sembold'>PROJECTS</p>
                    </div>
                    <div className='text-center p-3 bg-(--surface) rounded-xl'>
                        <span className={` text-2xl font-bold bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent`}>15</span>
                        <p className='text-[0.8rem] font-sembold'>TECH STACK</p>
                    </div>
                </div>
            </motion.div>

            {/* Right About */}
            <motion.div
             initial = {{opacity: 0, y:50}}
             whileInView = {{opacity:1, y:0}}
             transition={{duration:0.4, delay:0.3}}
             viewport={{once: true}}
            
            className='flex-1 bg-(--surface) md:m-5 rounded-xl py-3 px-5 h-fit mt-5 mb-5 md:mb-0 md:mt-0'>
                <motion.h3
                 initial = {{opacity: 0, y:30}}
                 whileInView = {{opacity:1, y:0}}
                 transition={{duration:0.8, delay:0.5}}
                 viewport={{once: true}}
                
                className='bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-3xl font-bold py-3'>Core Philosophy</motion.h3>
                <motion.p
                 initial = {{opacity: 0, y:30}}
                 whileInView = {{opacity:1, y:0}}
                 transition={{duration:0.8, delay:0.5}}
                 viewport={{once: true}}
                
                className='text-(--text-secondary) pb-2'>Building clean, scalable, and user-focused applications with modern technologies, continuous learning, and a commitment to quality and innovation.</motion.p>
                
            </motion.div>
        </div>
   </section>
  )
}

export default About
