import React from 'react'
import Heading from '../Heading/Heading'
import { motion, percent } from "motion/react"



const Career = () => {

    
    const renderCareer = careers.slice(0,3).map((career,idx)=>{
        return    <motion.div 
                initial = {{opacity: 0, y:40}}
                whileInView = {{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.5}}
                viewport={{once: true}}
        
              key={idx} className='max-w-90  px-7 py-5 rounded-2xl bg-(--surface)'>
                    {/* Year of degree */}
                   <div className='flex justify-between items-center '> 

                        <motion.h3
                     initial = {{opacity: 0, y:30}}
                     whileInView = {{opacity:1, y:0}}
                     transition={{duration:0.8, delay:0.5}}
                     viewport={{once: true}}
                     className={`text-lg font-bold ${career.color} bg-clip-text text-transparent`}>{career.year}</motion.h3>

                    {/* Status */}
                    <div className='bg-(--surface-secondary)  px-4 py-0.5 rounded-full'>
                      <motion.h3
                     initial = {{opacity: 0, y:30}}
                     whileInView = {{opacity:1, y:0}}
                     transition={{duration:0.8, delay:0.5}}
                     viewport={{once: true}}
                     className={`text-[0.7rem] tracking-wider ${career.stcolor} bg-clip-text text-transparent`}>{career.status}</motion.h3>
                    </div>
                   </div>

                    {/* Name Of Degree */}
                    <motion.h2
                     initial = {{opacity: 0, y:30}}
                     whileInView = {{opacity:1, y:0}}
                     transition={{duration:0.8, delay:0.6}}
                     viewport={{once: true}}
                     className='text-lg py-2 font-bold'>{career.Degree}</motion.h2>

                    {/* Collage name */}
                    <motion.h4
                     initial = {{opacity: 0, y:30}}
                     whileInView = {{opacity:1, y:0}}
                     transition={{duration:0.8, delay:0.7}}
                     viewport={{once: true}}
                    className='text-sm'>{career.collage}</motion.h4>

                

                     {/* Percentage/ CGPA */}
                    <motion.h4
                     initial = {{opacity: 0, y:30}}
                     whileInView = {{opacity:1, y:0}}
                     transition={{duration:0.8, delay:0.8}}
                     viewport={{once: true}}
                     className='text-[0.9rem] py-2 font-bold text-(--text-secondary)'>{career.CGPA ? `CGPA: ${career.CGPA}` : career.percentage ? `Percentage: ${career.percentage}` : null}
                     </motion.h4>

                    {/* dessc */}
                    <motion.p
                     initial = {{opacity: 0, y:30}}
                     whileInView = {{opacity:1, y:0}}
                     transition={{duration:0.8, delay:0.8}}
                     viewport={{once: true}}
                     className='text-[0.7rem]'> {career.Desc && (
                        <p className='font-semibold'>{career.Desc}</p>
                
                     )} </motion.p>
                </motion.div>
    })

  return (
   <section id='Experience'>
         <motion.div
            initial = {{opacity: 0, y:30}}
            whileInView = {{opacity:1, y:0}}
            transition={{duration:0.8, delay:0.3}}
            viewport={{once: true}}
         
         className='max-w-300 mx-auto px-10 pb-10 bg-(--surface-secondary) rounded-2xl' id='Experience'>
                <Heading text="Career" heading="Journey" size="text-[1.8rem]"/>

            <div className='flex md:flex-row flex-col md:gap-0 gap-7 justify-around items-center pt-6 md:pt-10'>
               
               {renderCareer}
            </div>
         </motion.div>
   </section>
  )
}

export default Career

 const careers = [
    {
        id:1,
        year:"2023-2027",
        Degree:"Bachelor of Computer Science",
        collage:"Technocrats Institute of Technology, Bhopal",
        CGPA:"6.9",
        Desc:"Focus on Software Development, Data Structure, and Database Manaagement.",
        color:"bg-gradient-to-r from-blue-300 to-purple-800",
        status:"PURSUING",
        stcolor:"bg-blue-300"
    },
    {
        id:2,
        year:"2023",
        Degree:"Higher Secondary Education (12th)",
        collage:"Technocrats Institute of Technology,Bhopal",
        percentage: "58 %",
        Desc:"Completed Higher secondary education with a focus on Mathematics, Physics, Chemistry.",
        color:"bg-gradient-to-r from-amber-200 to-amber-500",
        status:"COMPLETED",
        stcolor:"bg-green-500"
    },
    {
        id:3,
        year:"2021",
        Degree:"Secondary Education (10th)",
        collage:"Indian Public School, Hajipur, Bihar",
        percentage: "54 %",
        Desc:"Completed Secondary education with a strong education foundation in Mathematics, Science, English, and Computer Fundamentals.",
        color:"bg-gradient-to-r from-orange-300 to-orange-500",
        status:"COMPLETED",
        stcolor:"bg-green-500"
    }
 ]
