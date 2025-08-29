'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { fadeInUp, pageTransition, slideInLeft, slideInRight } from '../utils/animations'

interface formDate {
    name: string;
    email: string;
    message: string;
}

type formStatus = 'idle' | 'loading' | 'success' | 'error';

const Contactpage = () => {

    const [formDate, setFormData] = useState<formDate>({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState<formStatus>('idle');

    // changes on input
    const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    // for form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDate)
            })

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                message: ''
            })

        } catch (error) {
            setStatus('error');
        }

    }

    return (

        <motion.div
            {...pageTransition}
            transition={{ delay: 0.5 }}
            className='container max-w-7xl mx-auto py-10'>

            <motion.h3
                {...slideInLeft}
                transition={{ delay: 0.3 }}
                className='text-4xl font-bold mb-18 text-center'>
                Contact Me
            </motion.h3>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-12 '>

                {/* info */}
                <div className='space-y-8'>
                    <motion.h3
                        {...slideInLeft}
                        transition={{ delay: 0.5 }}
                        className='text-2xl font-semibold mb-4'>
                        Link Up
                    </motion.h3>

                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.5 }}
                    >
                        I&apos;m currently looking for opportunities as a Junior Frontend Developer. If you&apos;d like to collaborate, hire me or just say hello - feel free to get in touch.
                        As a Junior Frontend Developer, I&apos;m eager to grow and contribute to exciting projects. If you think I&apos;d be a good fit for your team, let&apos;s talk!
                    </motion.p>

                    <div className='space-y-4'>
                        <motion.div
                            {...slideInLeft}
                            transition={{ delay: 0.5 }}
                            className='flex items-center gap-3'>
                            <FaEnvelope className='w-6 h-6 text-primary ' />
                            <div>
                                <h3 className='font-bold'> Email </h3>
                                <Link href='mailto:mthree9999@gmail.com'
                                    className='text-secondary hover:text-primary'
                                >
                                    mthree9999@gmail.com
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            {...slideInLeft}
                            transition={{ delay: 0.6 }}
                            className='flex items-center gap-3'>
                            <FaPhone className='w-6 h-6 text-primary ' />
                            <div>
                                <h3 className='font-bold'> Phone </h3>
                                <Link href='tel:+959955817361'
                                    className='text-secondary hover:text-primary'
                                >
                                    +95 9 955 817361
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            {...slideInLeft}
                            transition={{ delay: 0.7 }}
                            className='flex items-center gap-3'>
                            <FaMapMarkerAlt className='w-6 h-6 text-primary ' />
                            <div>
                                <h3 className='font-bold'> Location </h3>
                                <p className='text-secondary hover:text-primary'> Yangon, MM</p>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* form`` */}
                <div className='dark:bg-dark p-6 rounded-lg shadow-lg'>
                    <motion.form
                        {...slideInRight}
                        transition={{ delay: 0.5 }}
                        onSubmit={handleSubmit} className='space-y-6'>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.6 }}
                            className='mb-5'>
                            <label htmlFor='name' className='block mb-2 text-sm'> Name </label>
                            <input required type='text' id='name' name='name' placeholder='Enter Your Name'
                                value={formDate.name}
                                onChange={handleChanges}
                                className=' border-b dark:border-gray-400 border-gray-600 rounded-t-sm w-full py-2 px-5 dark:bg-dark bg-white focus:ring-1 focus:ring-primary focus:border-none outline-none'
                            />
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.7 }}
                            className='mb-5'>
                            <label htmlFor='email' className='block mb-2 text-sm'> Email </label>
                            <input required type='text' id='email' name='email' placeholder='Enter Your Email'
                                value={formDate.email}
                                onChange={handleChanges}
                                className=' border-b dark:border-gray-400 border-gray-600 rounded-t-sm w-full py-2 px-5 dark:bg-dark bg-white focus:ring-1 focus:ring-primary focus:border-none outline-none'
                            />
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.8 }}
                            className='mb-5'>
                            <label htmlFor='message' className='block mb-2 text-sm'> Message </label>
                            <textarea required rows={4} id='message' name='message' placeholder='Your Message'
                                value={formDate.message}
                                onChange={handleChanges}
                                className=' border dark:border-gray-400 border-gray-600 rounded-t-sm w-full py-2 px-5 dark:bg-dark bg-white focus:ring-1 focus:ring-primary focus:border-none outline-none'
                            />
                        </motion.div>


                        <button type='submit' className='w-full btn btn-primary font-bold text-dark cursor-pointer'>
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>

                        {
                            status === 'success' && (
                                <p className='text-green-500 text-center' > Message sent successfully! </p>
                            )
                        }

                        {
                            status === 'error' && (
                                <p className='text-red-500 text-center' > There was a problem while sending message. Please try again! </p>
                            )
                        }


                    </motion.form>
                </div>

            </div>

        </motion.div>
    )
}

export default Contactpage
