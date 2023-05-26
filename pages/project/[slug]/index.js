import { useRouter } from "next/router"
import { projectRoutes } from "@/projectRoutes"

const project = ({projects,paramslug}) => {
  // const router = useRouter()
  // const {slug} = router.query

  console.log("par",paramslug)
  return (
    <div>
        {/* <h3>this is project {slug} page </h3> */}
        <h3>this is project {paramslug} page </h3>
        {/* <p>{projects}</p> */}
        {projects.name}
        {projects.description}
        {/* {console.log(projects)} */}
    </div>
  )
}


export const getStaticProps = (context) => {
  const paramslug = context.params.slug
  const projects = projectRoutes.find((project) => project.slug === paramslug );

  return{
    props:{
      projects,
      paramslug
    }
  }
}

export const getStaticPaths = () => {
  const projects = projectRoutes;

  const slugs = projects.map((project) => project.slug)
  const paths = slugs.map((slug) => ({params:{slug:slug}}) )

  return{
    paths,
    fallback:false 
  }
}

export default project