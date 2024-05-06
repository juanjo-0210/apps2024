import { useEffect, useState } from "react"
import { useIdContext } from "../app/provider/Idprovider"
import { createTaskById, deleteItem, getTasksByUserId } from "../service/task"

const Task = () => {
  const [ id ] = useIdContext()
  const [data,setdata] = useState([{}])
  const [task,setTask] = useState('')
  console.log(id)
    useEffect(() => {
      getTasksByUserId(id).then(setdata)
    },[])
  return (
    <div>
      <h1>Task</h1>
      
      {data.map((d,index) => (
        <div key={index}>
          <p>{d.tarea}</p>
          <button onClick={() => {
            console.log("123213131",d.id)
            deleteItem(id,d.id)
            getTasksByUserId(id).then(setdata)
          }}>Borrar</button>
          <button>Actualizar</button>
        </div>
      ) 
      )}
      <textarea name="" id="" value={task} onChange={e => setTask(e.target.value)}></textarea>
      <button onClick={() => {
        createTaskById(id,{tarea: task, userId: id})
        getTasksByUserId(id).then(setdata)
        setTask("")
      }
        }>Crear Tarea</button>
    </div>
  )
}

export default Task