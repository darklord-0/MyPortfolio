import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({project}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
        <Image src={project.image} alt={`${project.slug} project image`} className='rounded-xl group-hover:opacity-10' width='400' height='100' />
        <div className='hidden group-hover:block absolute'>
            <h3 className='text-2xl text-gray-900 tracking-wider font-serif text-center pb-4 pt-2 '>{project.name}</h3>
             <Link href="/project/[slug]" as={`/project/${project.slug}`}>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-90'>
                More Info
              </p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem