import ProjectListItem from "./ProjectListItem"

const ProjectList = ({projects}) => {
  return (
    <div>
        
    { projects.map((p)=>{
      return (
          <ProjectListItem key={p.slug} project={p} />
          )
    })}
        
    {console.log("first",projects)}
    </div>
  )
}

export default ProjectList