import React, { useEffect, useState } from 'react'
import Heading from '../Heading/Heading'
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "motion/react";
import GitImage from '../../assets/GitImage.png'

const Github = () => {

  return (
    <section id='Experience'>
          <motion.div 
            initial = {{opacity: 0, y:30}}
            whileInView = {{opacity:1, y:0}}
            transition={{duration:0.8, delay:0.4}}
            viewport={{once: true}}
          
          className='max-w-300 mx-auto px-3 md:px-10 py-10 flex md:flex-row flex-col gap-8 md:gap-0 justify-around' id='Experience'>

                {/* DSA */}
                <motion.div 
                initial = {{opacity: 0, y:30}}
                whileInView = {{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.4}}
                viewport={{once: true}}
                
                className='  px-10 py-3 rounded-2xl bg-(--surface)'>
                   
                      <Heading text="Data-Diven" heading="Success" size="text-[1.3rem]"/>
                    
                    <div className='flex max-w-70 flex-wrap gap-6 justify-around mt-3'>

                      {/* 1 */}
                       <div>
                          <motion.div
                           initial = {{opacity: 0, y:30}}
                           whileInView = {{opacity:1, y:0}}
                           transition={{duration:0.8, delay:0.4}}
                           viewport={{once: true}}
                           className='flex gap-4 items-center'>
                              <span className='text-md'> <FaLaptopCode /> </span>
                              <span className='text-2xl font-bold'>30</span>
                              <span className='text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-800 bg-clip-text text-transparent'>+</span>
                            </motion.div>
                            <p className='text-[0.7rem] py-1 font-bold text-(--text-secondary)'>DSA Problems Solve</p>
                          </div>

                          {/* 2 */}
                        <div>
                          <motion.div 
                            initial = {{opacity: 0, y:30}}
                            whileInView = {{opacity:1, y:0}}
                            transition={{duration:0.8, delay:0.4}}
                            viewport={{once: true}} className='flex gap-4 items-center'>
                              <span className='text-md'> <FaLaptopCode /> </span>
                              <span className='text-2xl font-bold'>10</span>
                              <span className='text-2xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent'>+</span>
                            </motion.div>
                            <p className='text-[0.7rem] py-1 font-bold text-(--text-secondary)'>Projects</p>
                       </div>

                       {/* 3 */}
                       <div>

                          <motion.div 
                            initial = {{opacity: 0, y:30}}
                            whileInView = {{opacity:1, y:0}}
                            transition={{duration:0.8, delay:0.4}}
                            viewport={{once: true}}
                          className='flex gap-4 items-center'>
                            <span className='text-md'> <FaLaptopCode /> </span>
                            <span className='text-2xl font-bold'>100</span>
                            <span className='text-2xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent'>+</span>
                          </motion.div>
                          <p className='text-[0.7rem] py-1 font-bold text-(--text-secondary)'>Commit on GitHub</p>
                       </div>

                       {/* 4 */}
                       <div>
                          <motion.div 
                          initial = {{opacity: 0, y:30}}
                          whileInView = {{opacity:1, y:0}}
                          transition={{duration:0.8, delay:0.4}}
                          viewport={{once: true}}
                          className='flex gap-4 items-center'>
                            <span className='text-md'> <FaLaptopCode /> </span>
                            <span className='text-2xl font-bold'>100</span>
                            <span className='text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-800 bg-clip-text text-transparent'>+</span>
                          </motion.div>
                          <p className='text-[0.7rem] font-bold py-1 text-(--text-secondary)'>Industry Certification</p>
                       </div>
                    </div>
                    
                </motion.div>

                {/* GITHUB */}
                <motion.div 
                initial = {{opacity: 0, y:30}}
                whileInView = {{opacity:1, y:0}}
                transition={{duration:0.8, delay:0.4}}
                viewport={{once: true}}

                className=' px-8 py-3  rounded-2xl bg-(--surface)'>
                    <Heading text="GitHub" heading="Contributions" size="text-[1.3rem]"/>
                    <img src={GitImage} alt="GitHub Image" className='w-110  h-30 object-contain'/>
                    <motion.p 
                     initial = {{opacity: 0, y:30}}
                     whileInView = {{opacity:1, y:0}}
                     transition={{duration:0.8, delay:0.5}}
                     viewport={{once: true}}
                     className='max-w-90 mx-auto text-[0.8rem] text-(--text-secondary) pt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit?

                    </motion.p>
                </motion.div>


          </motion.div>
    </section>
  )
}

export default Github

