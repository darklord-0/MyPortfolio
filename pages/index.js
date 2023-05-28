import About from '@/components/About'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { projectsData } from '@/projectsData'
import { server } from '@/config'

export default function Home({projects}) {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects projects={projects} />
    </>
  )
}


// export const  getStaticProps = () => {

//   const projects = projectsData;

//   return {
//     props: {
//       projects
//     }
//   };
// }

//USING OUR OWN API
export const getStaticProps = async () => {
  
  const res = await fetch(`${server}/api/projects`)

  const projects = await res.json()

  return {
    props: {
      projects
    }
  };
}

