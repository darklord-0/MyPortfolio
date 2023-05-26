import ProjectListItem from "./ProjectListItem"

const ProjectList = ({projects}) => {
  return (
    <div>
        
    {
    projects.map((p)=>{
      return (
          <ProjectListItem project={p} />
          )
    })
    }
        
    {console.log("first",projects)}
    </div>
  )
}

export default ProjectList