'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { GithubIcon, LinkedInIcon, GmailIcon } from './icons';
import { motion } from "framer-motion"
import { Transition } from "@headlessui/react";
import Logo from './Logo';

const CustomLink = ({ href, title, className = "" }) => {

    return (
        <Link href={href} className={`${className} relative group lg:text-2xl text-lg lg:px-2`}>
            {title}
            <span className='h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300'>
                &nbsp;
            </span>
        </Link>
    )
}

function Navbar1() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div >
            <nav>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-2 lg:py-4 ">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                                <Logo />
                            </div>
                            <div className="hidden md:block" >
                                <div className="ml-10 flex items-baseline lg:space-x-3 space-x-3 ">
                                    <CustomLink href="/" title="Home" className='mr-2' />
                                    <CustomLink href="/About" title="About" className='mx-4' />
                                    <CustomLink href="/Projects" title="Projects" className='mx-4' />
                                    {/* <CustomLink href="/Articles" title="Experience" className='ml-4' /> */}
                                </div>

                            </div>
                            
                        </div>
                        <div className=' hidden md:block'>
                                <nav className='flex items-center lg:justify-end justify-between pr-8'>
                                    <motion.a href="https://github.com/jsanskar07" target={"_blank"} className="lg:w-8 w-6 mr-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                                        <GithubIcon />
                                    </motion.a>

                                    <motion.a href="https://www.linkedin.com/in/sanskar-jain-developer/" target={"_blank"} className="lg:w-8 w-6 mx-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                                        <LinkedInIcon />
                                    </motion.a>
                                    <motion.a href="https://www.gmail.com" target={"_blank"} className="lg:w-8 w-6 ml-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                                        <GmailIcon />
                                    </motion.a>
                                </nav>

                            </div>
                        <div className="mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 my-4 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    href="/"
                                    className="hover:bg-dark bg-light text-dark hover:text-light block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/About"
                                    className="hover:bg-dark bg-light text-dark hover:text-light block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </Link>

                                <Link
                                    href="/Projects"
                                    className="hover:bg-dark bg-light text-dark hover:text-light block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                                </Link>

                                {/* <Link
                                    href="/Articles"
                                    className="hover:bg-dark bg-light text-dark hover:text-light block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Experience
                                </Link> */}
                                
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>


        </div>
    );
}

export default Navbar1;
