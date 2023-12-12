'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Foodie from '../../../public/Images/Foodie.png'
import News from '../../../public/Images/CitizenTimes.png'
import Portfolio from '../../../public/Images/Portfolio.png'
import Employee from '../../../public/Images/Employee.jpg'
import { CgWebsite } from "react-icons/cg";
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

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <Image alt="Foodie" className="block h-auto w-full" src={Portfolio} width={500} height={500} />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      PORTFOLIO
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    10/12/23
                  </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <CgWebsite size={30} />
                    <p className="ml-2 text-sm">
                      Web app to display skills
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>

              </article>


            </div>



            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">


              <article className="overflow-hidden rounded-lg shadow-lg">

                <a href="https://foodie-order-site-next.vercel.app/">
                  <Image alt="Foodie" className="block h-auto w-full" src={Foodie} width={500} height={500} />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      FOODIE
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    10/08/23
                  </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <CgWebsite size={30} />
                    <p className="ml-2 text-sm">
                      Web app for food ordering
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>

              </article>


            </div>



            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">


              <article className="overflow-hidden rounded-lg shadow-lg">

                <a href="https://github.com/jsanskar07/Employee_Management_SPA">
                  <Image alt="Placeholder" className="block h-auto w-full" src={Employee} height={400} width={400}/>
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      EMPLOYEE MANAGEMENT
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    11/10/23
                  </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <CgWebsite size={30} />
                    <p className="ml-2 text-sm">
                      Rest api for employee management
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>

              </article>


            </div>



            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">


              <article className="overflow-hidden rounded-lg shadow-lg">

                <a href="https://citizentimes.onrender.com/">
                  <Image alt="Placeholder" className="block h-auto w-full" src={News} />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      NEWS APP
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                    23/09/22
                  </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <CgWebsite size={30} />
                    <p className="ml-2 text-sm">
                      Web app to read news
                    </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>

              </article>

            </div>

            {/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article className="overflow-hidden rounded-lg shadow-lg">

              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  11/1/19
                </p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Author Name
                  </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>

            </article>
            

          </div>
          

          
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article className="overflow-hidden rounded-lg shadow-lg">

              <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  11/1/19
                </p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Author Name
                  </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>

            </article>
            

          </div> */}


          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default page;
