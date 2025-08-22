import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const Hero = () => {
    return (

        <section className='py-20 container max-w-7xl mx-auto px-4'>

            <div className='max-w-3xl mx-auto text-center'>

                <div className='flex flex-col items-center mb-4'>
                    <Image src='/profile.png' alt='profile image' width={100} height={100}
                        className='rounded-full ring-2 ring-primary w-32 h-32 object-cover mb-20'
                    />

                    <h3 className='md:text-4xl text-4xl font-bold text-primary/70 mb-2'> Khant Thu Aung </h3>

                    <p className='md:text-2xl text-xl dark:text-gray-300 mb-5'> Front-End Junior </p>


                    {/* career social */}
                    <div className='flex justify-center items-center space-x-3'>
                        <Link href='https://github.com/am-three' target='_blank'
                            className='text-2xl hover:text-primary dark:text-gray-400 transaction duration-300'
                        >
                            <FaGithub />
                        </Link>

                        {/* <Link href='/' target='_blank'
                            className='text-2xl hover:text-primary dark:text-gray-400 transaction duration-300'
                        >
                            <FaLinkedin />
                        </Link> */}
                    </div>

                </div>

            </div>


        </section>
    )
}

export default Hero
