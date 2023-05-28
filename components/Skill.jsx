import React from 'react'
import Image from 'next/image'

const Skill = ({skillName}) => {

    const skillimg = skillName.toLowerCase() + ".png";
  
  return (
    <div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in-out duration-300 bg-[#4c879e]'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={`/assets/skills/${skillimg}`} alt={`${skillName.toLowerCase()} icon`} width='70' height='70' />
                </div>

                <div className='flex flex-col text-lg items-center justify-center'>
                    <p>{skillName}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill