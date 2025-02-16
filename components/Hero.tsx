import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Ricardo!", "a dev!", "a recent graduate!", "a huge soccer fan!"],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden'>
            <BackgroundCircles />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://media.licdn.com/dms/image/C4E03AQE3tBYL0HZRVg/profile-displayphoto-shrink_800_800/0/1654298167497?e=1698883200&v=beta&t=fYkZpb8tSQZsZb5NePGNerDODztqYAU_7Taoi6pnyPc" alt="" />
            <div className='z-20'>
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>Hi, I am {text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className="pt-5">
                    <Link href='#about'>
                        <button className="heroButton">About</button></Link>
                    <Link href='#experience'>
                        <button className="heroButton">Experience</button></Link>
                    <Link href='#skills'>
                        <button className="heroButton">Skills</button></Link>
                    <Link href='#projects'>
                        <button className="heroButton">Projects</button></Link>
                </div>
            </div>
        </div >

    )
}

export default Hero