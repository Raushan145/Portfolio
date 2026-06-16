import React from 'react'
import Heading from '../Heading/Heading'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "motion/react"

const Contact = () => {
  return (
   <section id='Contact'>
        <div className='max-w-300 md:gap-0 gap-8  mx-auto px-5 md:px-10 py-10 flex md:flex-row flex-col justify-between' id='Contact'>



                {/* Social Media Connect */}
                <div className='flex items-start flex-col px-6 md:px-0 max-w-100 '>
                    {/* Heading */}
                    <Heading text="Let's" heading="Collaborate" size="text-[1.5rem]"/>

                    {/* Para */}
                    <motion.p
                     initial = {{opacity: 0, y:30}}
                     whileInView = {{opacity:1, y:0}}
                     transition={{duration:0.8, delay:0.2}}
                     viewport={{once: true}}
                     className='text-sm text-(--text-secondary) pb-2'>Have an extiting project in mind or just want to say hi!? My inbox is always open.</motion.p>

                    {/*  EMAIL  */}
                    <motion.div
                     initial = {{opacity: 0, y:30}}
                     whileInView = {{opacity:1, y:0}}
                     transition={{duration:0.8, delay:0.3}}
                     viewport={{once: true}}
                     className='flex justify-center gap-5 items-center py-3 '>
                        {/* Email logo */}
                        <span className='w-10 h-10 rounded-xl flex items-center text-xl justify-center bg-(--surface)'><MdOutlineEmail /></span>
                        <div>
                            <span className='text-[0.68rem] font-semibold'>EMAIL ME</span>
                            <p className='text-[0.82rem] font-bold'>raushankumar78690@gmail.com</p>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                     initial = {{opacity: 0, y:30}}
                     whileInView = {{opacity:1, y:0}}
                     transition={{duration:0.8, delay:0.4}}
                     viewport={{once: true}}
                    className='flex justify-center gap-5 items-center py-3 '>
                        {/* Email logo */}
                        <span className='w-10 h-10 rounded-xl flex items-center text-xl justify-center bg-(--surface)'><MdOutlineEmail /></span>
                        <div>
                            <span className='text-[0.68rem] font-semibold'>BASED IN</span>
                            <p className='text-[0.82rem] font-bold'>BIHAR, INDIA</p>
                        </div>
                    </motion.div>

                    {/* Social Media icon */}

               <div className='flex gap-4 py-3 px-5 pt-4'>
                     {/* Linkedin */}
                    <div>
                        <a href="" target='blank' rel='noopener noreferrer' 
                        className='w-8 h-8 rounded-full bg-(--surfaceicon) text-(--texticon) flex justify-center items-center text-lg hover:bg-[#ffff] hover:text-[#0A66C2] transition duration-300 '><FaLinkedin /></a>
                    </div>

                    {/* GitHub */}
                     <div>
                        <a href="" target='blank' rel='noopener noreferrer' 
                        className='w-8 h-8 rounded-full bg-(--surfaceicon) text-(--texticon) flex justify-center items-center text-lg hover:bg-[#ffff] hover:text-black transition duration-300 '><FaGithub /></a>
                    </div>

                    {/* Twitter */}
                     <div>
                        <a href="" target='blank' rel='noopener noreferrer' 
                        className='w-8 h-8 rounded-full bg-(--surfaceicon) text-(--texticon) flex justify-center items-center text-lg hover:bg-[#ffff] hover:text-[#0A66C2] transition duration-300 '><FaTwitter /></a>
                    </div>
               </div>

                </div>

                {/* Form */}
                <div className=' px-5 pt-5 pb-8 rounded-2xl bg-(--surface)'>
                    <form action="#" >
                        {/* Name & Email */}
                        <div className='flex md:flex-row flex-col  gap-5 py-3'>
                            <motion.div 
                             initial = {{opacity: 0, y:30}}
                             whileInView = {{opacity:1, y:0}}
                             transition={{duration:0.8, delay:0.5}}
                             viewport={{once: true}}
                            >
                            <label className='text-sm text-(--text) pb-2 block '>Full Name</label>
                            <input type="text" placeholder='Enter Your Name..' name='name' id='name'
                            className='w-full rounded-xl bg-(--surface-secondary) px-5  py-1 placeholder:text-(--text-secondary) ' />
                            </motion.div>

                            <motion.div 
                             initial = {{opacity: 0, y:30}}
                             whileInView = {{opacity:1, y:0}}
                             transition={{duration:0.8, delay:0.5}}
                             viewport={{once: true}}
                            >
                             <label className='text-sm text-(--text) pb-2 block'>Email Address</label>
                            <input type="text" placeholder='Enter Your Email' name="Email" id="Email" 
                             className=' w-full rounded-xl bg-(--surface-secondary) px-5  py-1 placeholder:text-(--text-secondary) '/>
                            </motion.div>

                        </div>

                        {/* Subject */}
                        <motion.div 
                            initial = {{opacity: 0, y:30}}
                            whileInView = {{opacity:1, y:0}}
                            transition={{duration:0.8, delay:0.5}}
                            viewport={{once: true}}
                        >
                        <label className='block text-sm text-(--text) pb-2'>Subject</label>
                        <input type="text" placeholder='Project Inquiry' name="Inquiry" id="Inquiry" 
                        className='w-full rounded-xl bg-(--surface-secondary) px-5  py-1 placeholder:text-(--text-secondary) '/>
                        </motion.div>

                        <motion.div 
                            initial = {{opacity: 0, y:30}}
                            whileInView = {{opacity:1, y:0}}
                            transition={{duration:0.8, delay:0.5}}
                            viewport={{once: true}}
                        className='py-4 '>
                        <label className='block text-sm text-(--text) pb-2'>Message</label>
                        <textarea name="Message" id="Message" placeholder='Your Message here...'
                        className='w-full h-25 rounded-xl bg-(--surface-secondary) px-5  py-1 placeholder:text-(--text-secondary) '></textarea>
                        </motion.div>

                        <button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer  py-1 rounded-full font-bold'>Send Message</button>

                    </form>
                </div>
        </div>
   </section>
  )
}

export default Contact
