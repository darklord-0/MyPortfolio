import React from 'react'
import Skill from './Skill'

const Skills = () => {
  
  const skillslist = ["HTML","CSS","Javascript","React","Tailwind","MongoDB","MySql","Github"]

  return (
    <div id='skills' className='w-full lg:h-screen p-2 sm: mt-20'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]  py-4'>
                Skills
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {
                skillslist.map((skills,index) => {
                  return(
                  <>
                    <Skill key={index} skillName={skills} />
                  </>
                  )
                })
              }

            </div>
        </div>

    </div>
  )
}

export default Skills