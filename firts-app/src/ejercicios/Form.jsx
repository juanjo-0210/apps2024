import { useState,useEffect } from "react"
import { createPersons, getItems, deleteItem} from "../firebase/persons.js"


const Form = () => {
    const [name,setName] = useState("")
    const [id,setId] = useState("")
    const [res,setRes] = useState([])

    const consult = async () => {
      //getItems().then(setRes)
      const r = await getItems()
      setRes(r)
    }

    const deleteName = async docu => {
      await deleteItem(docu)
    }
    useEffect(() => {
      
      consult()
    },[])
    
    
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={ async () => {
          await createPersons({name})
          setName("")
          consult()
        }}>
        Enviar</button>

        <button onClick={() => {
          deleteName(id)
          setId("")
          consult()
        }}>Borrar</button>

        <button onClick={consult}>Consultar</button>

        {res.map((obj,index) => (
          <div key={index}>
            <p>{obj.id} -------- {obj.name}</p>
            
          </div>
        ))}
    </div>
  )
}

export default Form