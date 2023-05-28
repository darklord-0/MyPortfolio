import React from 'react'
import ProjectItem from './ProjectItem'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Projects = ({projects}) => (
    <div id='projects' className='w-full md:h-screen sm:mt-20'>
        <div className='max-w-[1240px] mx-auto px-2 py-18'>
            <p className='text-2xl tracking-widest uppercase text-[#12085b]  py-4'>
                Projects
            </p>
            <div className='grid md:grid-cols-2 gap-8'>
                {/* {console.log("projects",projects)} */}

                {projects.map((project) => {
                    return (
                        <ProjectItem key={project.slug} project={project} />
                    )
                })}

            </div>
        </div>
        <div className='flex justify-end py-12 px-5 mb-10'>

            <Link href='/'>
                <div className='rounded-full flex z-99 shadow-lg shadow-blue-700 bg-[#4a8ea9] p-6  cursor-pointer hover:scale-110 ease-in duration-300 '>
                    <p className='mr-2'> BACK TO TOP</p>
                    <HiOutlineChevronDoubleUp className='text-[#010103]' size={25} />
                </div>
            </Link>
        </div>
    </div>
)

export default Projects