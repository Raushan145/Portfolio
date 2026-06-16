import React from 'react'
import { motion } from "motion/react"

const Heading = (props) => {
  return (
   <motion.div
    initial = {{opacity: 0, y:30}}
    whileInView = {{opacity:1, y:0}}
    transition={{duration:0.8, delay:0.4}}
    viewport={{once: true}}
   
   className={`text-center ${props.size} font-bold py-2`}>
        <p className='text-(--text)'> {props.text} <span className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent"> {props.heading} </span> </p>
   </motion.div>
  )
}

export default Heading
