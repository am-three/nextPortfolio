'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { fadeIn, fadeInDown, fadeInUp, scaleIn } from '../utils/animations'

const Hero = () => {
    return (

        <section className='md:py-20 container max-w-7xl mx-auto px-4 '>

            <div className='max-w-3xl mx-auto text-center'>

                <motion.div
                    {...scaleIn}
                    transition={{ delay: 0.2 }}
                    className='flex flex-col items-center'>

                    <Image src='/profile.png' alt='profile image' width={100} height={100}
                        className='border imgBdr w-32 h-32 object-cover mb-15'
                    />
                </motion.div>

                <motion.h3
                    {...fadeInUp}
                    transition={{ delay: 0.3 }}
                    className='md:text-4xl text-4xl font-bold text-green-800 mb-2'> Khant Thu Aung
                </motion.h3>

                <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className='md:text-2xl text-xl dark:text-gray-300 mb-5'> Front-End Junior
                </motion.p>


                {/* career social */}
                <motion.div
                    {...fadeIn}
                    transition={{ delay: 0.6 }}
                    className='flex justify-center items-center space-x-3 mb-8 gap-3'>
                    <Link href='https://youtu.be/gNPy_CO4zqA?si=7bkWiPw9vOX1zhkR' target='_blank'
                        className='text-2xl hover:text-primary dark:text-gray-400 transaction duration-300'
                    >
                        <FaGithub />
                        {/* https://github.com/am-three */}
                    </Link>

                    {/* <Link href='https://mail.google.com/mail/?view=cm&fs=1&to=mthree9999@gmail.com' target='_blank'
                            className='text-2xl hover:text-primary dark:text-gray-400 transaction duration-300'
                        >
                            <FaEnvelope className='w-6 h-6' />
                        </Link> */}
                </motion.div>

                {/* project & contact */}
                <motion.div
                    {...fadeInDown}
                    transition={{ delay: 0.7 }}
                    className='flex md:flex-row flex-col  justify-center items-center gap-5'>
                    <Link href='/projects'
                        className='bg-primary/80 md:w-fit md:w-auto md:text-lg text-lg text-black inline-block px-5 py-1 hover:bg-primary/50 transaction-colors rounded-md'
                    >
                        View Project
                    </Link>

                    <Link href='/contact'
                        className='bg-gray-400 md:w-fit md:w-auto md:text-lg text-lg text-black inline-block px-5 py-1 hover:bg-primary/70 transaction-colors rounded-md'
                    >
                        Contact Me
                    </Link>
                </motion.div>


            </div>


        </section >
    )
}

export default Hero
