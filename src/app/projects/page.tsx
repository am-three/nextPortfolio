import Image from "next/image"
import Link from "next/link"
import { projects } from '../contents/projects'
import { FaExternalLinkAlt } from "react-icons/fa"

const Projectpage = () => {

    return (

        <div className="container py-15 max-w-7xl mx-auto px-4">

            <h3 className="text-4xl font-bold mb-8 text-center"> My Projects </h3>
            <p className="text-center text-lg text-secondary mb-5">
                My learning & testing modern webs are here .You can click on 'Demo' to view live demo.
            </p>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                {
                    projects.map((project) => (
                        <article key={project.title}
                            className='dark:bg-dark/50 bg-white rounded-md shadow-lg p-3 '
                        >
                            <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
                                <Image src={project.image} alt={project.title} fill
                                    className='object-cover'
                                    sizes=' (max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw '
                                />
                            </div>
                            <hr />

                            <h3 className='text-xl font-bold mb-5'>
                                {project.title}
                            </h3>

                            <p className='dark:text-gray-300 mb-6'>
                                {project.description}
                            </p>

                            <div className='flex flex-wrap gap-3 mb-4'>
                                {
                                    project.technologies.map((tech) => (
                                        <span key={tech} className='px-3 py-2  dark:bg-primary/20 dark:text-primary bg-primary rounded-md'>
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>

                            <div className='w-fit flex gap-3 items-center justify-center'>
                                {/* <Link href={project.githubLink} target='_blank' className='flex gap-2 items-center hover:text-primary dark:text-gray-300 transaction duration-300' >
            
                                                <FaGithub className='w-4 h-4' />
                                                <span> Code </span>
            
                                            </Link> */}

                                <Link href={project.demoLink} target='_blank' className='flex gap-2 items-center hover:text-primary dark:text-gray-300 transaction duration-300' >

                                    <FaExternalLinkAlt className='w-3 h-3' />
                                    <span> Demo </span>

                                </Link>

                            </div>

                        </article>
                    ))
                }

            </div>
        </div>

    )
}

export default Projectpage



