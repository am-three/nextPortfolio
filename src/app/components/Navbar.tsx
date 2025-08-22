'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import icon from '../../../public/myicon3.png'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BoltIcon, MoonIcon, XCircleIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';


const Navbar = () => {

    const { theme, toggleTheme } = useTheme();
    // const theme = 'dark';
    const pathname = usePathname();  //for active nav page

    // -----------------------------------------------------------------------
    // menu setup for desktop/mobile device
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const toggleDrawerOpen = () => {
        setDrawerOpen(!drawerOpen);
    }

    // ---------------------------------------------------------------------
    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        // { href: '/blogs', label: 'Blogs' },
        { href: '/contact', label: 'Contact' },
    ]

    return (

        <nav className='fixed w-full z-50  bg-white/40 dark:bg-green-400/70 border-b border-gray-300 shadow-md'>

            <div className='container max-w-7xl mx-auto px-4 '>

                <div className='h-16 flex justify-between items-center '>

                    {/* <Link href='/' className='text-primary text-xl font-bold'> amthreecmty&trade; </Link> */}
                    <Link href='/'>
                        <Image src={icon} alt='icon' className='w-16 h-16' />
                    </Link>

                    {/* for desktop.v menu */}
                    <div className='hidden md:flex items-center space-x-10'>
                        {
                            menuItems.map((item, index) => {

                                const isActive = pathname === item.href;
                                return (
                                    <Link key={index}
                                        href={item.href}
                                        className={`hover:text-primary transaction-colors
                                          ${isActive ? 'font-semibold text-primary' : ' '} `} >

                                        {item.label}
                                    </Link>
                                )

                            })
                        }

                        {/* light/dark theme */}
                        <button className='rounded cursor-pointer text-primary hover:scale-90 duration-300 transaction-colors'
                            onClick={toggleTheme}>
                            {
                                theme === 'dark' ? (
                                    <BoltIcon className='w-5 h-5' />
                                ) : (
                                    <MoonIcon className='w-5 h-5' />
                                )
                            }
                        </button>
                    </div>


                    {/* button for mobile.v menu */}
                    <button onClick={toggleDrawerOpen}
                        className='md:hidden hover:scale-90 duration-300 dark:text-primary cursor-pointer transaction-colors'>

                        {drawerOpen ? (<XCircleIcon className='w-6 h-6' />) : (<Bars3CenterLeftIcon className='w-6 h-6' />)}

                    </button>

                </div>

                {/* mobile menu */}
                {
                    drawerOpen && (
                        <div className='md:hidden'>
                            <div className='py-4 space-y-4'>
                                {
                                    menuItems.map((item, index) => (
                                        <div key={index} onClick={toggleDrawerOpen}>
                                            <Link href={item.href}
                                                className='block py-2 hover:text-primary transaction-colors'>
                                                {item.label}
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>

                            <div>
                                <button onClick={toggleTheme}
                                    className='flex items-center py-2 rounded cursor-pointer text-primary hover:scale-90 duration-300 transaction-colors'>
                                    {
                                        // theme === 'dark' ? (
                                        //     <><BoltIcon className='w-5 h-5 mr-2' /> Light Mode </>
                                        // ) : (
                                        //     <><MoonIcon className='w-5 h-5 mr-2' /> Dark Mode </>
                                        // )
                                        theme === 'dark' ? (
                                            <><BoltIcon className='w-5 h-5 mr-2' />  </>
                                        ) : (
                                            <><MoonIcon className='w-5 h-5 mr-2' />  </>
                                        )
                                    }
                                </button>
                            </div>

                        </div>
                    )
                }

            </div>

        </nav >

    )
}

export default Navbar
