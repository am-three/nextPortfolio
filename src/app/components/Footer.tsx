'use client'
import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaGithub, FaInstagram } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Footer = () => {
    return (

        <footer className='dark:bg-dark bg-white border-t  dark:border-gray-400 border-gray-600'>

            <div className='container max-w-7xl mx-auto px-4 py-5'>
                <div className='flex flex-col md: flex-row justify-between items-center'>

                    <div className='mb-4 md:mb-0'>
                        <Link href='/' className='font-bold text-primary text-xl'> amthreeix&trade; </Link>
                        {/* <p className='text-sm text-secondary mt-2'>
                            &copy; {new Date().getFullYear()} amthreeix All rights reserved.
                        </p> */}
                        <motion.p
                            className="text-sm text-secondary mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 3, delay: 5, repeat: Infinity, repeatType: "reverse" }}
                        >
                            &copy; {new Date().getFullYear()} amthreeix. All rights reserved.
                        </motion.p>
                    </div>

                    <div className='flex space-x-3'>
                        <Link href='https://github.com/am-three' target='_blank'
                            className='text-2xl hover:text-primary dark:text-gray-400 transaction duration-300'
                        >
                            <FaGithub />
                        </Link>

                        <Link href='https://www.instagram.com/amthreeix/' target='_blank'
                            className='text-2xl hover:text-primary dark:text-gray-400 transaction duration-300'
                        >
                            <FaInstagram />
                        </Link>

                        <Link href='mailto:mthree9999@gmail.com' target='_blank'
                            className='text-2xl hover:text-primary dark:text-gray-400 transaction duration-300'
                        >
                            <FaEnvelope className='w-6 h-6' />
                        </Link>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer
