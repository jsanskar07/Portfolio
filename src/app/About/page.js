'use client'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TabButton from '../Components/TabButton'

const TAB_DATA = [
   
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <ul className="list-disc">
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>OOPs</li>
                        <li>Redux</li>
                    </ul>
                </div>
                <div>
                    <ul className="list-disc">
                        <li>Spring-Boot</li>
                        <li>Hibernate</li>
                        <li>MongoDb</li>
                        <li>MySQL</li>
                        <li>Google Cloud</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>

        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Nitte Meenakshi Institute of technology</li>
                <li>S.L.Memorial Hr Sec School</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">                
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const Page = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <>
            <main className='lg:my-0 mt-6 mb-0'>
                <div className='bg-dark'>
                    <h1 className='text-light text-3xl text-center lg:text-5xl lg:pt-2 py-2 lg:leading-normal font-extrabold'>
                        About Me
                    </h1>
                </div>
                <section className='lg:pt-8 lg:mb-0 lg:mb-0 lg:px-32 md:px-8 px-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='col-span-5 place-self-center mt-4 lg:mt-0 '>
                            <div className='rounded-full bg-light w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative'>
                                <Image src="/Images/profile.png" alt='profile-image' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  rounded-full' width={350} height={350} />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className='col-span-7 place-self-center text-center sm:text-left py-6 lg:py-2 lg:ml-16 lg:mr-16 sm:px-8 '>
                            <h3 className='text-dark text-base text-justify sm:text-lg pb-2 lg:text-2xl font-bold '>About</h3>
                            <p className='text-dark text-justify'>
                                I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with React, Next, Redux, Java, Spring-Boot, Express, SQL, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
                            </p>
                            <div className='flex flex-row mt-2'>
                                
                                <TabButton selectTab={() => handleTabChange("skills")} active={tab == "skills"}>Skills</TabButton>
                                <TabButton selectTab={() => handleTabChange("education")} active={tab == "education"}>Education</TabButton>
                                <TabButton selectTab={() => handleTabChange("certifications")} active={tab == "certifications"}>Certifications</TabButton>
                            </div>
                            <div className="mt-2 ml-4 pl-2 mb-0" style={{ height: '150px' }}>
                                {TAB_DATA.find((t) => t.id === tab).content}
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Page;
