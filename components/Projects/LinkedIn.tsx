import React from 'react'

type Props = {}

function LinkedIn({ }: Props) {
    return (
        <div className=' relative w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center'>
            <img className='relative pt-11 h-[300px]' src="https://content.linkedin.com/content/dam/blog/en-us/corporate/blog/2020/september/frame@3x.png" alt="" />
            <h4 className='text-4xl'><span className='underline decoration-[#F7AB0A]'>Project 1</span>: LinkedIn Clone (JavaScript)</h4>
            <ul className="relative list-disc space-y-4 ml-5 max-h-[300px]">
                <li>Created a responsive front-end design for LinkedIn using Material UI.</li>
                <li>Integrated a Firebase back-end functionality API to develop user profiles.</li>
                <li>Enhanced security through email and password authentication for the landing page via Firebase Console.</li>
                <li>Implemented real time post threads using React Hooks for refreshing website snapshots.</li>
                <li>Resolved prop drilling issues by introducing Redux for seamless data payload flow management.</li>
                <li>Established connection to Firebase Hosting enabling concurrent usage by multiple users.</li>
            </ul>
        </div>
    )
}

export default LinkedIn