import React from 'react'
import { FaTools } from 'react-icons/fa'
import { FaCode, FaLaptopCode } from 'react-icons/fa6'

const Aboutpage = () => {
    return (

        <div className='container max-w-7xl mx-auto py-15'>

            <h3 className='text-4xl font-bold mb-8 text-center'>
                About Me
            </h3>

            <section className='mb-20'>
                <p className='text-lg tracking-tight text-secondary max-w-6xl mx-auto'>
                    I’m motivated young person who is looking for full-time job. As I’m youth, I’m sure that I can learn things easily and work actively. A motivated
                    and detail-oriented JavaScript Frontend Junior with a solid foundation in web development principles, JavaScript, React, and responsive design.
                    I'm trying to enter web development environment. I want a lot of experiences about that, I can do myself or under senior's guide line and want to use it in your interests.
                    Passionate about creating user-friendly interfaces and eager to contribute to team success through hard work and continuous learning. I'm wanna and trying to build modern websites,
                    my learning and testing projects are under processing.
                </p>
            </section>

            {/* skills */}
            <section className='mb-20'>
                <h3 className='section-title'> Skills </h3>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>

                    <div className='dark:bg-dark bg-white p-6 rounded-lg shadow-md'>
                        <FaCode className='h-6 w-6 text-primary mb-4' />
                        <h3 className='text-xl font-semibold mb-2'> Frontend </h3>

                        <ul className='text-secondary space-y-2'>
                            <li> React / Next.js </li>
                            <li> JavaScript </li>
                            <li> TailwindCss </li>
                            <li> HTML / Css </li>
                            <li> Python </li>
                        </ul>
                    </div>

                    <div className='dark:bg-dark bg-white p-6 rounded-lg shadow-md'>
                        <FaLaptopCode className='h-6 w-6 text-primary mb-4' />
                        <h3 className='text-xl font-semibold mb-2'> Backend </h3>

                        <ul className='text-secondary space-y-2'>
                            <li> supabase </li>
                        </ul>
                    </div>

                    <div className='dark:bg-dark bg-white p-6 rounded-lg shadow-md'>
                        <FaTools className='h-5 w-5 text-primary mb-4' />
                        <h3 className='text-xl font-semibold mb-2'> Tools </h3>

                        <ul className='text-secondary space-y-2'>
                            <li> GitHub / Git </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* experience */}
            <section className='mb-20'>
                <h3 className='section-title'> Experiences </h3>

                <div className='max-w-3xl mx-auto w-fit'>
                    <div className='dark:bg-dark bg-white p-2 rounded-lg shadow-lg '>

                        <ul className='text-secondary list-disc list-inside text-lg space-y-2'>
                            <li> IT Associate in International University (2025-Present) </li>
                            <li> Assisted in developing responsive web pages using HTML, CSS </li>
                            <li> Participated in daily standups and sprint planning </li>
                            <li> Support Engineer for Hotel Management Software (2022-2024) </li>
                        </ul>

                    </div>
                </div>

            </section>

            {/* education */}
            <section className='mb-20'>
                <h3 className='section-title'> Education </h3>

                <div className='max-w-3xl mx-auto w-fit'>
                    <div className='dark:bg-dark bg-white p-2 rounded-lg shadow-lg '>

                        <ul className='text-secondary list-disc list-inside text-lg space-y-2'>
                            <li> Web Development Foundations </li>
                            <li> Foundations of Python  </li>
                            <li> Comp TIA A+ </li>
                            <li> University of Taungoo (Zoology) </li>
                        </ul>

                    </div>
                </div>

            </section>

        </div>
    )
}

export default Aboutpage
