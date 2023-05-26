import React from 'react'
import ProjectItem from './ProjectItem'
import proj1Img from '../public/assets/projects/pic2.jpg'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Projects = () => {
  return (
    <div id='projects' className='w-full md:h-screen sm:mt-20'>
        <div className='max-w-[1240px] mx-auto px-2 py-18'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]  py-4'>
                Projects
            </p>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem title='Project1' projimg={proj1Img} projectUrl='/autonbs' />
                <ProjectItem title='Project2' projimg={proj1Img} projectUrl='/grauth' />
                <ProjectItem title='Project3' projimg={proj1Img} projectUrl='/anime' />
                <ProjectItem title='Project4' projimg={proj1Img} projectUrl='/chat' />

            </div>
        </div>
        <div className='flex justify-end py-12 px-5 mb-10'> 
        
            <Link href='/'>
                <div className='rounded-full flex z-99 shadow-lg shadow-gray-400 p-6  cursor-pointer hover:scale-110 ease-in duration-300 '>
                    <p className='mr-2'> BACK TO TOP</p>
                    <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={25} />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Projects