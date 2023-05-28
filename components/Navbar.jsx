import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose,AiOutlineMail,AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { useRouter } from 'next/router'
import Popup from './Popup'
import logoimg from "../public/assets/logo/logo.png"

const Navbar = () => {

    const [nav,setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937c')
    const [showPopup, setShowPopup] = useState(false);

    const handleOk = () => {
      setShowPopup(false);
    };
    
    const handleCancel = () => {
        setShowPopup(false);
    };

    
    const router = useRouter()

    useEffect(()=>{
        if(
            router.asPath === '/autonbs' ||
            router.asPath === '/grauth' ||
            router.asPath === '/anime' ||
            router.asPath === '/chat'
        )
        {
            setNavBg['transparent']
            setLinkColor['#ecf0f3']
        }
        else{
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }
    },[router])
    
    const logostyle = {
        borderRadius:'40%',
        width:'4rem',
        height:'50%'
    };

    const handleNav =() =>{
        setNav(!nav)
    }

    const handlePopUp = () => {
        setShowPopup(!showPopup) 
    }

    useEffect(()=>{
        const handleShadow = () => {
           (window.scrollY >= 90) ? setShadow(true) : setShadow(false)
        }

        window.addEventListener('scroll',handleShadow)
    },[])


  return (
    <div style={{backgroundColor:`${navBg}`}} className={ shadow ? 'fixed w-full h-20 shadow-xl z-[100] ' : 'fixed w-full h-20 z-[100] '}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#517ead]'>
            <Link href='/' className='hover:animate-bounce '>
                <Image src={logoimg}  alt='/' width='125' height='50' style={logostyle}></Image>
            </Link>
            
            <div>
                <ul style={{color:`${linkColor}`}} className='hidden md:flex'>
                    <Link href='/' >
                        <li className='ml-10 text-xl uppercase hover:text-2xl'> Home</li>
                    </Link>
                    <Link href='/#about' >
                        <li className='ml-10 text-xl uppercase hover:text-2xl'> About</li>
                    </Link>
                    <Link href='/#skills' >
                        <li className='ml-10 text-xl uppercase hover:text-2xl '> Skills</li>
                    </Link>
                    <Link href='/#projects' >
                        <li className='ml-10 text-xl uppercase hover:text-2xl'> Projects</li>
                    </Link>

                    <a id='downloadresume' onClick={(handlePopUp)}>
                        <li className='ml-10 text-xl uppercase hover:text-2xl'> My Resume</li>
                    </a>
                    { showPopup && (<Popup message="Do you want to download my resume?" onOk={handleOk} onCancel={handleCancel} popupvisible={showPopup} />)}

                </ul>
                <div className='md:hidden hover:cursor-pointer mr-4 hover:scale-110' onClick={handleNav}>
                    <AiOutlineMenu size={35} />
                </div>
            </div>
        </div>

        <div className= {nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav
                ? 'fixed left-0 top-0 w-[65%] sm:w-[55%] md:w[45%] h-screen bg-blue-100 p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }>
                <div>
                    <div className='flex w-full justify-between items-center'>
                        <Link href='/'onClick={() => setNav(false)} className='hover:animate-spin ' >
                            <Image src={logoimg}  alt='/' width='70' height='35' style={logostyle} />
                        </Link>
                        
                            <div className='rounded-full shadow-lg shadow-blue-800 p-4 cursor-pointer  bg-[#4a8ea9] hover:scale-110' onClick={handleNav}>
                            <AiOutlineClose size={20}/>
                        </div>
                    </div>
                    <div className='border-b border-blue-900 my-8'>
                    </div>
                </div>
                <div className='py-2 flex flex-col'> 
                    <ul className='uppercase'>
                        <Link href='/' >
                            <li className='py-4 text-blue-950 text-lg hover:text-2xl' onClick={() => setNav(false)} > Home</li>
                        </Link>
                        <Link href='/#about' >
                            <li className='py-4 text-blue-950 text-lg hover:text-2xl' onClick={() => setNav(false)} > About</li>
                        </Link>
                        <Link href='/#skills' >
                            <li className='py-4 text-blue-950 text-lg hover:text-2xl' onClick={() => setNav(false)} > Skills</li>
                        </Link>
                        <Link href='/#projects' >
                            <li className='py-4 text-blue-950 text-lg hover:text-2xl' onClick={() => setNav(false)} > Projects</li>
                        </Link>
                        
                        <a id='downloadresume' onClick={(handlePopUp)}>
                            <li className='py-4 text-blue-950 text-lg uppercase hover:text-2xl'> My Resume</li>
                        </a>
                        { showPopup && (<Popup message="Do you want to download my resume?" onOk={handleOk} onCancel={handleCancel} popupvisible={showPopup} />)}

                    </ul>

                    <div >
                        <p className='uppercase tracking-widest pt-20 text-[#4b46eb] text-2xl'>
                            Let's Connect !
                        </p>
                        
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <a href="https://www.linkedin.com/in/harshitsingh01010/" target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-blue-700 bg-[#4a8ea9] p-4 cursor-pointer hover:scale-125 ease-in duration-300'>
                                    <FaLinkedin size={25} />
                                </div>
                            </a>
                            <a href="https://github.com/harshit01010/" target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-blue-700 bg-[#4a8ea9] p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                                    <FaGithub size={25} />
                                </div>
                            </a>
                            <a href="mailto:singhharshit01010@gmail.com" target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-blue-700 bg-[#4a8ea9] p-3 cursor-pointer hover:scale-125 ease-in duration-300'>
                                    <AiOutlineMail size={25} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar