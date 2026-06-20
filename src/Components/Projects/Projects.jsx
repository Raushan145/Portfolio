import React from 'react'
import Heading from '../Heading/Heading'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react"
import Grocery from "../../assets/Grocery.jpeg";
import PortfolioImage from "../../assets/portfolioImage.jpeg";
import Career from '../Career/Career';

const Projects = () => {

    const renderprojects = projects.slice(0,3).map((project,idx)=>{
            return  <motion.div 
                initial = {{opacity: 0, y:40}}
                whileInView = {{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.5}}
                viewport={{once: true}}
            
            key={idx} className='mt-10  w-85 rounded-2xl bg-(--surface) shadow-2xl h-auto pb-5'>
                    {/* Image */}
                    <div >
                        <img src={project.logo}  alt={project.title} className='w-full h-40 bg-zinc-700 object-cover' />
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
                    <div className='flex justify-end px-5'>
                        <a href={ project.link ? project.link : "Not Deploy" }  target={project.link ? "_blank" : "_self"}  rel={project.link ? "noopener noreferrer" : undefined}
                        className='text-(--text) px-3 text-sm py-1 cursor-pointer -mt-3 rounded-full bg-blue-400' >view project</a>
                    </div>
                </motion.div> 

//                 <a
//   href={project.link || "#"}
//   target={project.link ? "_blank" : "_self"}
//   rel={project.link ? "noopener noreferrer" : undefined}
//   className="text-(--text) px-3 py-1 cursor-pointer rounded-full bg-blue-400"
// >
//   View Project
// </a>
    })

  return (
    <section id='Projects'>
        <motion.div 
         initial = {{opacity: 0, y:40}}
         whileInView = {{opacity:1, y:0}}
         transition={{duration:0.8, delay:0.5}}
         viewport={{once: true}}

         className='max-w-300 mx-auto px-6  py-7 h-auto' id='Projects'>

            {/* Project Heading */}
            <div className='flex  items-start md:flex-row flex-col md:gap-0 gap-5 justify-between'>
                <div className='flex flex-col items-start'>
                  <Heading text="Featured" heading="Projects" size="text-[1.8rem]"/>
                  <p className='max-w-130 text-(--text) '>A Selection of my recent work involving complex logic,modern UI, and robust backends.</p>
                </div>
                <div className='md:flex items-center gap-5 md:mt-10 md:mr-10 border px-3 mx-auto md:py-1 py-2 rounded-full hidden '>
                    <a href="#Projects">View All Projects</a>
                    <span><FaArrowRightLong /></span>
                </div>
                
            </div>

            {/* Project Card */}
            <div className='flex md:flex-row flex-wrap flex-col justify-around'>
               {renderprojects}            
            </div>


                {/* Mobile ke liye */}
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
            title:"Multipage Grocery Website",
            logo: Grocery,
            para:"Multi-page grocery website for easy online shopping and ordering.",
            tech1:"React",
            tech2:"Tailwind",
            tech3:"Motion"
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
            logo: PortfolioImage,
            para:"A modern, responsive portfolio designed to showcase skills and projects.",
            tech1:"React",
            tech2:"Tailwind",
            tech3:"Motion",
            link:"https://raushan-portfolio-ochre.vercel.app/"
        },
        // {
        //     id:4,
        //     title:"Personal Portfolio",
        //     logo:"",
        //     para:"A modern, responsive  portfolio designed to showcase skills and projects with sleek glassmorphism.",
        //     tech1:"React",
        //     tech2:"Tailwind",
        //     tech3:"Motion"
        // }
    ]
