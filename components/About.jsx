import React from 'react'     
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-1'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in-out duration-300'>
              <Image src="/assets/about/about.jpg"  alt='about image' width='400' height='100' className='rounded-xl'></Image>
            </div>
            <div className='col-span-2'>
                <p className='uppercase text-2xl tracking-widest text-[#12085b] py-4'>About</p>
                <p className='py-2 text-gray-900 text-lg'>
                  Hello there! &#128075;, I'm Harshit, an aspiring Full-Stack Web Developer with experience in MERN stack. I am also well-versed in programming languages like CPP, JavaScript, Python, Java.
                  I have worked on projects, both as individual and as part of a team. I am passionate about building beautiful and creative websites. 
                  I am confident to apply my skills effectively and contribute to the success of any project i am involved in. 
                </p>
                <a href='/#projects'> 
                  <p className='py-2 text-blue-900 cursor-pointer underline'>Check out my latest projects</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default About