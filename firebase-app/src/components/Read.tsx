import { useEffect, useState } from "react"
import { getTasks } from "../service/persons"
import { Task } from "common/types/task.js"
const Read = () => {
    const [userName,setUserName] = useState<Task[]> ([])

    useEffect(() => {
        getTasks("Persons").then(setUserName)
    },[])
   
  return (
    <div>
        {userName.map((data,index) => <p key={index}>{data.userName}</p>)}
    </div>
  )
}

export default Read