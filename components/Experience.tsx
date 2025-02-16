import React from 'react'
import { motion } from "framer-motion"
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'

type Props = {}

function Experience({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}

            className='h-screen flex relative overflow-hidden flex-col text-left 
        md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                experience
            </h3>
            <div className='mt-[150px] w-full flex space-x-4 overflow-x-scroll p-10 snap-x snap-mandatory'>
                <Card />
                <Card2 />
                <Card3 />
            </div>
        </motion.div>
    )
}

export default Experience