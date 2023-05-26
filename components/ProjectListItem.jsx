import Link from "next/link"

const ProjectListItem = ({project}) => {
  return (
    <div>
        <Link href="/project/[slug]" as={`/project/${project.slug}`}>

            {project.name} &rarr; {project.id} 
            {/* {console.log(project)} */}

        </Link>
    </div>
  )
}

export default ProjectListItem