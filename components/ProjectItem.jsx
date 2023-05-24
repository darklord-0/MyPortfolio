import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title , projimg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] '>
        <Image src={projimg} alt='/' className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute'>
            <h3 className='text-2xl text-white tracking-wider text-center pb-4 pt-2 '>{title}</h3>
            {/* <p className='pb-4 pt-2 text-white text-center'>Python</p> */}
            <Link href={projectUrl}>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                More Info
              </p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem