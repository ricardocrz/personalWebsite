import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
type Props = {}

function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
        xl:items-center p-5'>
            <motion.div initial={{
                x: -500,
                opacity: 0,
                scale: .5,
            }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}

                className='flex flex-row items-center'>
                <SocialIcon
                    url='https://www.linkedin.com/in/ricardo-cruz-a89191203/'
                    fgColor='grey'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://github.com/ricardocrzz'
                    fgColor='grey'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div initial={{
                x: 500,
                opacity: 0,
                scale: .5
            }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer ">
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='grey'
                    bgColor='transparent'
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">get in touch</p>
            </motion.div>
        </header>
    )
}

export default Header