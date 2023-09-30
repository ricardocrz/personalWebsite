import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
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
            className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">about</h3>
            <motion.img src="https://scontent.fyyc7-1.fna.fbcdn.net/v/t39.30808-6/383547542_6067124406721712_5677578484725792747_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=71HaIK11gt4AX-oE-3n&_nc_ht=scontent.fyyc7-1.fna&oh=00_AfB0jX4EPO-09Vx-9p1X1dbZjo5BBqBrUXryL7UhpE2RDQ&oe=651DBC3C" alt=""
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] xl:mt-[100px]"
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Get to know  {" "}
                    <span className="underline decoration-[#F7AB0A]/50">Ricardo</span>
                    {" "} a little better
                </h4>
                <p className='text-base'>
                    I am a skilled computer scientist with a Bachelor of Science in Computer Science from the Univesity of Calgary, holding a remarkable 3.63 GPA and recognized as a Distinction Student and Dean List Student.
                    With experience as a Software Developer Intern at ATB Financial, I have a track record of implementing impactful solutions.
                    <br />
                    <br />
                    I am also adept in web development, having created impressive projects such as a responsive LinkedIn clone, a Spotify Web App with user authentication, and a real-time chat web app.
                    My diverse skill set includes proficiency in languages like JavaScript, Python, and C++, along with expertise in technologies such as Firebase, Docker, and Google Cloud Platform.</p>
            </div>
        </motion.div>
    )
}