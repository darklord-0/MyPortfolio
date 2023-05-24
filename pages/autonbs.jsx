import Image from 'next/image'
import React from 'react'
import projet1Img from '../public/assets/projects/pic2.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
const autonbs = () => {

    const imageStyle = {
        objectFit: 'cover',
    };
 
      
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/75 z-10'>
                <Image src='' className='absolute z-1' fill={true} style={imageStyle} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-white '>
                    <h2 className='py-2'> autonbs </h2>
                    <h3>python | NLP</h3>
                </div>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                Fusce condimentum rutrum condimentum. Aliquam tristique rutrum tellus sed venenatis. Pellentesque eget velit sem. Vestibulum rutrum turpis a ex luctus, eget dictum felis placerat. Fusce ac ex a sem interdum tristique. Nulla facilisi. Nunc tempor dapibus est ut feugiat. 
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1 '>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Python
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />NLP
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />Pyqt5
                        </p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default autonbs