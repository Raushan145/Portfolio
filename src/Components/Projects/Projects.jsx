import React from 'react'
import Heading from '../Heading/Heading'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react"

const Projects = () => {

    const renderprojects = projects.slice(0,3).map((project,idx)=>{
            return  <motion.div 
                initial = {{opacity: 0, y:40}}
                whileInView = {{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.5}}
                viewport={{once: true}}
            
            key={idx} className='mt-10  w-90 rounded-2xl bg-(--surface) shadow-2xl overflow-hidden'>
                    {/* Image */}
                    <div >
                        <img src={project.logo}  alt={project.title} className='w-90 h-50 bg-zinc-700 object-cover' />
                    </div>

                    {/* Text para, tech ,Heading */}
                    <motion.div
                        initial = {{opacity: 0, y:30}}
                        whileInView = {{opacity:1, y:0}}
                        transition={{duration:0.8, delay:0.5}}
                        viewport={{once: true}} 
                    
                    className='p-5'>
                        <h3 className='text-xl font-bold'>{project.title}</h3>
                        <p className='text-(--text-secondary) py-3 text-sm'>{project.para}</p>
                        <p className='py-2'>
                            <span className='text-sm ml-2 rounded-xl px-3 py-1 bg-(--surface-secondary)' >{project.tech1}</span>
                            <span className='text-sm ml-2 rounded-xl px-3 py-1 bg-(--surface-secondary)'>{project.tech2}</span>
                            <span className='text-sm ml-2 rounded-xl px-3 py-1 bg-(--surface-secondary)'>{project.tech3}</span>
                        </p>
                    </motion.div>
                </motion.div> 
    })

  return (
    <section id='Projects'>
        <motion.div 
         initial = {{opacity: 0, y:40}}
         whileInView = {{opacity:1, y:0}}
         transition={{duration:0.8, delay:0.5}}
         viewport={{once: true}}

         className='max-w-300 mx-auto px-10  py-7' id='Projects'>

            {/* Project Heading */}
            <div className='flex  items-start md:flex-row flex-col md:gap-0 gap-5 justify-between'>
                <div className='flex flex-col items-start'>
                  <Heading text="Featured" heading="Projects" size="text-[1.8rem]"/>
                  <p className='max-w-130 text-(--text) '>A Selection of my recent work involving complex logic,modern UI, and robust backends.</p>
                </div>
                <div className='md:flex items-center gap-5 md:mt-10 border px-3 md:py-1 py-2 rounded-full hidden '>
                    <a href="#Projects">View All Projects</a>
                    <span><FaArrowRightLong /></span>
                </div>
                
            </div>

            {/* Project Card */}
            <div className='flex md:flex-row flex-col justify-around'>
               {renderprojects}            
            </div>

            <div className='flex justify-end mt-8'>
                 <div className='flex md:hidden items-center gap-5 md:mt-10 md:border border-2 px-3 md:py-1 py-2 rounded-full'>
                    <a href="#Projects">View All Projects</a>
                    <span><FaArrowRightLong /></span>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Projects

    const projects = [
        {
            id:1,
            title:"Poultry Contract Farming",
            logo:"",
            para:"Comprehensive management system for Admin , Farmer , Worker. Real-time tracking and automated repoting.",
            tech1:"Node js",
            tech2:"MySQL",
            tech3:"React"
        },
        {
            id:2,
            title:"AI Chat Application",
            logo:"",
            para:"Real-time conversation AI with secure authentication and persistent chat history.",
            tech1:"Open AI",
            tech2:"Socket.IO",
            tech3:"Node js"
        },
        {
            id:3,
            title:"Personal Portfolio",
            logo:"",
            para:"A modern, responsive portfolio designed to showcase skills and projects with sleek glassmorphism.",
            tech1:"React",
            tech2:"Tailwind",
            tech3:"GSAP"
        },
        {
            id:3,
            title:"Personal Portfolio",
            logo:"",
            para:"A modern, responsive portfolio designed to showcase skills and projects with sleek glassmorphism.",
            tech1:"React",
            tech2:"Tailwind",
            tech3:"GSAP"
        }
    ]
