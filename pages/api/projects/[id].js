import { projectsData } from "@/projectsData";

export default function handler(req,res){
    const myid = req.query.id

    const filtered = projectsData.filter((p) =>
        p.id === Number(myid)
    ) 

    if(filtered.length > 0)
        res.status(200).json(filtered[0])
    else
        res.status(404).json({message: `project with id ${myid} not found`})
}