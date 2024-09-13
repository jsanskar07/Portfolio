'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CgWebsite } from "react-icons/cg";
import { projectsData } from '../../../data';

const page = () => {
  return (
    <main className='lg:my-0 my-6'>
      <div className='bg-dark '>
        <h1 className='text-light text-3xl text-center lg:text-5xl lg:pt-2 py-2 lg:leading-normal font-extrabold'>
          Projects
        </h1>
      </div>
      <div>
        <div className="container my-12 mx-auto px-4 md:px-12 overflow-auto" style={{ height: '450px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap -mx-1 lg:-mx-4">
            {
              projectsData.map((value, index) => {
                return (
                  <div key={index}className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                    <article className="overflow-hidden rounded-lg shadow-lg">
                      <a href={value.link}>
                        <Image alt="Portfolio" className="block h-auto w-full" src={value.imageUrl} width={500} height={500} />
                      </a>

                      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                          <a className="no-underline hover:underline text-black" href="#">
                            {value.title}
                          </a>
                        </h1>
                        <p className="text-grey-darker text-sm">
                          {value.skills}
                        </p>
                      </header>

                      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                          <CgWebsite size={30} />
                          <p className="ml-2 text-sm">
                            {value.desc}
                          </p>
                        </a>
                        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span className="hidden">Like</span>
                          <i className="fa fa-heart"></i>
                        </a>
                      </footer>

                    </article>


                  </div>
                )
              })
            }
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default page;
