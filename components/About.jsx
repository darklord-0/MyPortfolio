import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-1'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5] py-4'>About</p>
                <p className='py-2 text-gray-600'>
                  Fusce condimentum rutrum condimentum. Aliquam tristique rutrum tellus sed venenatis. Pellentesque eget velit sem. Vestibulum rutrum turpis a ex luctus, eget dictum felis placerat. Fusce ac ex a sem interdum tristique. Nulla facilisi. Nunc tempor dapibus est ut feugiat. 
                </p>
                <p className='py-2 text-gray-600 cursor-pointer underline'>Check out my latest projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in-out duration-300'>
              <Image src="/../public/assets/pic2.jpg"  alt='/' width='400' height='100' className='rounded-xl'></Image>
            </div>
        </div>
    </div>
  )
}

export default About