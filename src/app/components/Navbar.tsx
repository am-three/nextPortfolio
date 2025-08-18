'use client'

import React, { useState } from 'react'
// import Image from 'next/image';
// import logo from '../../../public/amthreeLogo.png'
import Link from 'next/link';

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const toggleDrawerOpen = () => {
        setDrawerOpen(!drawerOpen);
    }

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/contact', label: 'Contact' },
    ]

    return (

        <nav className='fixed w-full z-50 backdrop-blur-md bg-gray-600/80 dark:bg-dark/80'>

            <div className='container max-w-7xl mx-auto px-4 '>

                {/* v.desktop menu */}

                <div className='h-16 flex justify-between items-center '>

                    <Link href='/' className='text-primary text-xl font-bold'> amthreecmty&trade; </Link>

                    <div className='hidden md:flex items-center space-x-10'>
                        {
                            menuItems.map((item) => (

                                <Link key={item.href} href={item.href} className='hover:text-primary transaction-colors'>
                                    {item.label}
                                </Link>

                            ))
                        }
                    </div>

                </div>

            </div>

        </nav>

    )
}

export default Navbar
