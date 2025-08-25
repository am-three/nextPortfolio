import React from 'react'
import { projects } from '../contents/projects'
import Image from 'next/image'

const Project = () => {
    return (

        <section className='container py-20 max-w-7xl mx-auto px-4'>

            <h3 className='text-3xl font-bold text-center mb-12'> Featured Projects </h3>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                {
                    projects.map((project) => (
                        <article key={project.title}
                            className='dark:bg-dark/50 bg-white rounded-lg shadow-md p-6'
                        >
                            <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
                                <Image src={project.image} alt={project.title} fill
                                    className='object-cover'
                                    sizes=' (max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw '
                                />
                            </div>

                        </article>
                    ))
                }

            </div>


        </section>
    )
}

export default Project
