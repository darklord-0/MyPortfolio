import { useRouter } from "next/router"
import { projectsData } from "@/projectsData"
import Image from 'next/image'
import React from 'react'
import {RiRadioButtonFill} from 'react-icons/ri'
import {BsArrowLeft} from 'react-icons/bs'
import Link from 'next/link'
import Meta from "@/components/Meta"

const project = ({projects,paramslug}) => {
  // const router = useRouter()
  // const {slug} = router.query
  const maxChars = 100;
  const excerpt = projects.description.substring(0, maxChars) + (projects.description.length > maxChars ? "..." : "");

  const imageStyle = {
    backgroundSize: 'cover',
  };
  
  const techlist = projects.technologies.split(",");

  return (
    <div>

      <Meta title={`Harshit | `+ `${projects.slug}`.toUpperCase()} description={excerpt}/>
        
        <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/75 z-10'>
                <Image src={projects.image} className='absolute z-1 ' fill={true} style={imageStyle} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 text-blue-900 font-bold '>
                    <h2 className='py-2 flex items-center justify-center'> {projects.name} </h2>
                    <h3 className="flex items-center justify-center">{techlist.join(" | ")}</h3>
                </div>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 '>
            <div className='col-span-4'>
                <p className="text-2xl underline p-2">Project Overview</p>
                <p className='p-2 tracking-wider font-serif'>
                {projects.description}
                </p>
                <div className='flex items-center justify-around'>
                    <a href={projects.url} target="_blank" className="hover:scale-95">
                      <button className='px-8 py-2 mt-4 mr-8 font-semibold'>Code</button>
                    </a>
                    <Link href='/#projects'>
                      <div className="flex justify-center p-3 items-center hover:scale-90">
                        <BsArrowLeft size={25}/>
                        <p className='underline ml-2 cursor-pointer text-xl '>Back</p>
                      </div>
                    </Link>

                </div>
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-blue-400 bg-[#69caf2] rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-2  md:grid-cols-1 '>

                      {techlist.map((t) => {
                        return(
                          <>
                          <p className='text-black-600 py-2 flex items-center'>
                              <RiRadioButtonFill key={projects.slug} className='pr-1' />{t}
                          </p>
                          </>

                        )
                      })}
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}


export const getStaticProps = (context) => {
  const paramslug = context.params.slug
  const projects = projectsData.find((project) => project.slug === paramslug );

  return{
    props:{
      projects,
      paramslug
    }
  }
}

export const getStaticPaths = () => {
  const projects = projectsData;

  const slugs = projects.map((project) => project.slug)
  const paths = slugs.map((slug) => ({params:{slug:slug}}) )

  return{
    paths,
    fallback:false 
  }
}

export default project