'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion'
const HeroSection = () => {
    return (
        <>
            <section className="lg:py-12 lg:px-12 py-10 px-4">
                <div className='grid grid-cols-1 sm:grid-cols-12'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                        <h1 className='text-dark mb-4 text-4xl lg:text-7xl lg:leading-normal font-extrabold '>
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-300 inline-block text-transparent text-5xl lg:text-8xl bg-clip-text">
                                Hello, I&apos;m{" "}
                            </span>
                            <br />
                            <TypeAnimation
                                sequence={[
                                    "Sanskar Jain",
                                    1000,
                                    "Full Stack Developer",
                                    1000,
                                    "React Developer",
                                    1000,
                                    "Python Developer",
                                    1000,
                                    "Java Developer",
                                    1000,
                                ]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className='text-dark text-base sm:text-lg mb-6 lg:text-xl md:pr-8'>
                            As a skilled full-stack developer, I'm dedicated to turning ideas into innovative web applications.
                            Explore my latest projects showing my expertise in web app.  
                        </p>                        
                        <div>
                            <Link href="mailto:jsanskar007@gmail.com"  className='px-6 p-3 inline-block text-lg font-medium w-full sm:w-fit rounded-full mr-4 bg-dark hover:bg-light text-light hover:text-dark hover:border hover:border-dark' target={'_blank'}>Hire me</Link>
                            <Link href="https://drive.google.com/file/d/10NJ_l15ptob3hlQ3FkjU5aOTmWzaZHut/view?usp=drive_link" className='px-6 p-3 inline-block text-lg font-medium sm:w-fit rounded-full w-full bg-gradient-to-r hover:from-pink-500 hover:to-indigo-300 from-indigo-500 via-purple-500 to-pink-300 text-light mt-2' target={'_blank'} >Resume</Link>
                        </div>                        
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='col-span-4 place-self-center mt-4 lg:mt-0'>
                        <div className='rounded-full bg-light w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                            <Image src="/static/img/HeroImage.png" alt='hero-image' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full' width={400} height={400} />
                        </div>
                    </motion.div>
                </div>
            </section>
           
        </>
    )
}

export default HeroSection;
