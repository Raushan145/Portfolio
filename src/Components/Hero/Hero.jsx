import React, { useEffect, useState } from 'react'
import resume from '../../assets/Resume/raushanResume.pdf'
import { motion } from "motion/react"

const Hero = () => {

    const roles = ["MERN Stack","Full Stack", "UI/UX Design",];

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

   useEffect(() => {
  const current = roles[roleIndex];

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1));

      if (text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      setText(current.substring(0, text.length - 1));

      if (text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, isDeleting ? 80 : 120);

  return () => clearTimeout(timeout);
}, [text, isDeleting, roleIndex]);

  return (
   <section id='Home'>
        <motion.div
        //  initial = {{opacity: 0, y: 100}}
        //  animate = {{opacity: 1, y: 0}}
        //  transition={{duration:0.6, ease: 'easeOut'}}

         className='max-w-300 mx-auto md:px-25 flex flex-col md:flex-row md:gap-[16rem] gap-10 pt-15 mt-5 md:mt-0 items-center md:h-screen' id='Home'>
            {/* Hero Text */}
            <motion.div 
           initial = {{opacity: 0, x:-100}}
            whileInView = {{opacity:1, x:0}}
            transition={{duration:0.9, delay:0.6}}
            viewport={{once: true}}

            className='text-center md:text-start'>
                {/* Text */}
                <p className='text-4xl font-bold text-(--text) md:leading-14 leading-11'>Building <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Modern <br /> Web <br /> Application</span> & <br /> Digital <br /> Experiences</p>
                {/* <p className='text-2xl font-bold text-(--text) leading-14'>Building <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Modern <br /> Web <br /> Application</span> & <br /> Digital <br /> Experiences</p> */}

                {/* rotational role */}
                 <h2 className="md:text-2xl text-3xl font-bold py-3">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        {text}
                    </span>
                    <span className="animate-pulse">|</span>
                    </h2>

                {/* Button */}
                <motion.div
                  initial = {{opacity: 0, y:50}}
                  whileInView = {{opacity:1, y:0}}
                  transition={{duration:1.2, delay:0.8}}
                  viewport={{once: true}}

                className='py-3 flex flex-col md:flex-row gap-9 justify-center items-center text-center'>
                   <a href="#Projects" className='md:px-4 px-7 py-4 md:py-2 text-white bg-gradient-to-r from-blue-600 to-blue-700 cursor-pointer rounded-full'> View project </a>
                   <a href={resume}  download="Raushan_Kumar_Resume.pdf" rel="noopener noreferrer" className='md:px-5 md:py-2 text-md px-8 py-3 text-(--text-secondary) md:border-0 bg-(--surface) hover:text-(--text) border-2 ml-5 rounded-full cursor-pointer'>Download Resume</a>
        
                </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
            initial = {{opacity: 0, x:100}}
            whileInView = {{opacity:1, x:0}}
            transition={{duration:1.2, delay:0.6}}
            viewport={{once: true}}

             className='pb-10 md:pb-0'>
                <img src="https://tse1.mm.bing.net/th/id/OIP.cW0wzJYojHH-xxW35Wj7dQHaHa?pid=Api&h=220&P=0" alt="image" className='h-70 w-70 rounded-full' />
            </motion.div>
        </motion.div>
   </section>
  )
}

export default Hero
