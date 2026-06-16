import React from 'react'
import Heading from '../Heading/Heading'
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { motion } from "motion/react"

const Skills = () => {

    // className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"

    const renderSkill =  skills.map((skill, idx)=>{
            return  <motion.div 
                    initial = {{opacity: 0, y:40}}
                    whileInView = {{opacity:1, y:0}}
                    transition={{duration:0.8, delay:0.5}}
                    viewport={{once: true}}


             key={idx} className='w-80 bg-(--surface-secondary)   rounded-3xl  p-6 shadow-xl'>
                    {/* Logo */}
                    <span className={` ${skill.textcol}  text-2xl`}> {skill.logo} </span>
                    <h3 className='font-bold text-xl mt-5'>{skill.type}</h3>

                    {/* Skill 1 */}
                    <motion.div
                         initial = {{opacity: 0, y:30}}
                         whileInView = {{opacity:1, y:0}}
                         transition={{duration:0.8, delay:0.4}}
                         viewport={{once: true}}

                     className='mb-5'>
                       <div className='flex justify-between text-(--text) font-semibold '>
                           <h5 className='text-sm mt-3'>{skill.skill1}</h5>
                           <span>{skill.skill1Per}%</span>
                       </div>

                        <div className='w-full h-3 rounded-full bg-zinc-300 overflow-hidden'>
                            <div className={`h-full rounded-full ${skill.color} `} style={{ width: `${skill.skill1Per}%` }}></div>
                        </div>
                        
                    </motion.div>
                    {/* Skill 2 */}
                    <motion.div initial = {{opacity: 0, y:30}} whileInView = {{opacity:1, y:0}} transition={{duration:0.8, delay:0.4}} viewport={{once: true}}>
                    <div className='flex justify-between text-(--text) font-semibold '>
                           <span className='text-sm'>{skill.skill2}</span>
                           <span>{skill.skill2Per}%</span>
                       </div>

                        <div className='w-full h-3 rounded-full bg-zinc-300 overflow-hidden'>
                            <div className={`h-full rounded-full ${skill.color} `} style={{ width: `${skill.skill2Per}%` }}></div>
                        </div>
                    </motion.div>
                </motion.div>
        })
    

  return (
    <section id='Skills'>
        <motion.div 
                initial = {{opacity: 0, y:50}}
                whileInView = {{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.2}}
                viewport={{once: true}}

         className='max-w-300 mx-auto px-10 bg-(--surface) rounded-2xl py-12' id='Skills'>

                <Heading text="Technical" heading="Proficiency" size="text-[1.8rem]"/>
                <motion.p
                 initial = {{opacity: 0, y:30}}
                whileInView = {{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.5}}
                viewport={{once: true}} 
                
                className='max-w-140 mx-auto text-center text-(--text-secondary)'>A comprehnesive tookit spanning the full application lifecycle, from sleek interface to scalable backend.</motion.p>

            <div className='flex items-center flex-col md:flex-row justify-between gap-5 mt-10 '>
              {renderSkill}
            </div>
            
        </motion.div>
    </section>
  )
}

export default Skills

 const skills = [
    {
        id: 1,
        logo: <FaLaptopCode />, 
        type: "Frontend",
        skill1:"React.js",
        skill1Per: "90",
        skill2: "Tailwind CSS",
        skill2Per:"95",
        color:"bg-gradient-to-r from-blue-300 to-purple-500"
    },
    {
        id: 2,
        logo: <FaServer size={20} />, 
        type: "Backend",
        skill1:"Node.js",
        skill1Per: "100",
        skill2: "Express js",
        skill2Per:"82",
        color:"bg-gradient-to-r from-amber-200 to-amber-500"
    },
    {
        id: 3,
        logo: <FaDatabase size={20} />, 
        type: "Database",
        skill1:"MySQL",
        skill1Per: "80",
        skill2: "MongoDB",
        skill2Per:"90",
        color:"bg-gradient-to-r from-orange-300 to-orange-500"
    },
    {
        id: 4,
        logo: <FaTools size={20} />, 
        type: "Tools",
        skill1:"Git / GitHub",
        skill1Per: "90",
        skill2: "Postman",
        skill2Per:"80",
        color:"bg-gradient-to-r from-blue-300 to-purple-800"
    }
 ]
