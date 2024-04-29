import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PersonalData                                                                                                                                                                                     } from "../common/types/personalData"
import { getItemById, updateItem } from "../service/hospital"

const UpdateDelete = () => {
    const { id = "" } = useParams<string>()
    const [user,setUser] = useState<PersonalData>({
        userName: "",
        date: "",
        id: ""
    })

    useEffect(() => {
        getItemById(id).then(setUser)
    },[])

  return (
    <div>
        <input type="text" value={user?.userName} onChange={e => setUser({...user,userName:e.target.value})}/>
        <input type="date" value={user?.date} onChange={e => setUser({...user,date:e.target.value})}/>
        <br />
        <button onClick={() => updateItem(id,user)}>Update</button>
        <button>delete</button>
    </div>
  )
}

export default UpdateDelete