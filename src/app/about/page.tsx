'use client'
import React from 'react'
import { FaTools } from 'react-icons/fa'
import { FaCode, FaLaptopCode } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { cardHover, fadeIn, fadeInDown, fadeInUp } from '../utils/animations'

const Aboutpage = () => {
    return (

        <div className='container max-w-7xl mx-auto py-10'>

            <motion.h3
                {...fadeInDown}
                transition={{ delay: 0.3 }}
                className='text-4xl font-bold mb-8 text-center'>
                About Me
            </motion.h3>

            <section className='mb-20'>
                <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.3 }}
                    className='text-lg tracking-tight text-secondary max-w-6xl mx-auto'>
                    I&apos;m currently looking for opportunities as a Junior Frontend Developer. I&apos;m sure that I can learn things easily and work actively. A motivated
                    and detail-oriented JavaScript Frontend Junior with a solid foundation in web development principles, JavaScript, React libraries, Nextjs framework and responsive design.
                    I want a lot of experiences about that, I can do myself or under senior&apos;s guide-line and want to use it in your interests.
                    Passionate about creating user-friendly interfaces and eager to contribute to team success through hard work and continuous learning. I&apos;m wanna and trying to build modern websites,
                    my learning and testing projects are under processing.
                </motion.p>
            </section>

            {/* skills */}
            <section className='mb-20'>
                <motion.h3
                    {...fadeIn}
                    transition={{ delay: 0.5 }}
                    className='section-title'> Skills
                </motion.h3>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>

                    <motion.div
                        {...cardHover}
                        transition={{ duration: 0.3 }}
                        className='dark:bg-dark bg-white p-6 rounded-lg shadow-md'>
                        <FaCode className='h-6 w-6 text-primary mb-4' />
                        <h3 className='text-xl font-semibold mb-2'> Frontend </h3>

                        <ul className='text-secondary space-y-2'>
                            <li> React / Next.js </li>
                            <li> JavaScript </li>
                            <li> TailwindCss </li>
                            <li> HTML / Css </li>
                            <li> Python </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        {...cardHover}
                        transition={{ duration: 0.3 }}
                        className='dark:bg-dark bg-white p-6 rounded-lg shadow-md'>
                        <FaLaptopCode className='h-6 w-6 text-primary mb-4' />
                        <h3 className='text-xl font-semibold mb-2'> Backend </h3>

                        <ul className='text-secondary space-y-2'>
                            <li> supabase </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        {...cardHover}
                        transition={{ duration: 0.3 }}
                        className='dark:bg-dark bg-white p-6 rounded-lg shadow-md'>
                        <FaTools className='h-5 w-5 text-primary mb-4' />
                        <h3 className='text-xl font-semibold mb-2'> Tools </h3>

                        <ul className='text-secondary space-y-2'>
                            <li> GitHub / Git </li>
                        </ul>
                    </motion.div>

                </div>
            </section>

            {/* experience */}
            <section className='mb-20'>
                <h3 className='section-title'> Experiences </h3>

                <motion.div
                    {...cardHover}
                    transition={{ duration: 0.5 }}
                    className='max-w-3xl mx-auto w-fit'>
                    <div className='dark:bg-dark bg-white p-2 rounded-lg shadow-lg '>

                        <ul className='text-secondary list-disc list-inside text-lg md:space-y-2 space-y-3'>
                            <li> IT Associate in International University (2025-Present) </li>
                            <li> Assisted in developing web pages using HTML, CSS, PhP/Laravel project </li>
                            <li> Participated in daily standups and sprint planning </li>
                            <li> Support Engineer for Hotel Management Software (2022-2024) </li>
                        </ul>

                    </div>
                </motion.div>

            </section>

            {/* education */}
            <section className='mb-20'>
                <h3 className='section-title'> Education </h3>

                <motion.div
                    {...cardHover}
                    transition={{ duration: 0.5 }}
                    className='max-w-3xl mx-auto w-fit'>
                    <div className='dark:bg-dark bg-white p-2 rounded-lg shadow-lg '>

                        <ul className='text-secondary list-disc list-inside text-lg space-y-2'>
                            <li> Web Development Foundations </li>
                            <li> Foundations of Python  </li>
                            <li> Comp TIA A+ </li>
                            <li> University of Taungoo (Zoology) </li>
                        </ul>

                    </div>
                </motion.div>

            </section>

        </div>

    )
}

export default Aboutpage
