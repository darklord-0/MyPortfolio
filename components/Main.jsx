import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

const Main = () => {
  return (
    <div id='home' className='h-screen w-full text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase tracking-widest text-smt text-gray-600'>Let's Build something together</p>
                
                <h3 className={`py-4 text-gray-700`}>
                <div className='flex'>
                    <div className=' m-auto'>
                        <p className={`${styles.typewriter}` }>
                            Hi, I'm <span className='text-[#5651e5]'>HS</span>
                        </p>
                    </div>
                </div>
                </h3>
                
                <h6 className='py-2 text-gray-700'>
                    A Full-Stack Developer
                </h6>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Fusce condimentum rutrum condimentum. Aliquam tristique rutrum tellus sed venenatis. Pellentesque eget velit sem. Vestibulum rutrum turpis a ex luctus, eget dictum felis placerat. Fusce ac ex a sem interdum tristique. Nulla facilisi. Nunc tempor dapibus est ut feugiat. 
                </p>

                <div className='flex justify-between items-center max-w-[330px] m-auto py-4'>
                    <a href="https://www.linkedin.com/in/harshitsingh01010/" target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedin />
                        </div>
                    </a>
                    <a href="https://github.com/darklord-0/" target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>
                    <a href="mailto:singhharshit01010@gmail.com" target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </a>
                    {/* <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonFill />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main