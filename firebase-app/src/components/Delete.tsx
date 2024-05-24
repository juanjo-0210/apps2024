import { getTasks } from "../service/persons.ts"
import { useEffect, useState } from "react"
import { getItems, deleteItem } from "../service/persons.ts"

const Delete = () => {
    const [userData,setUserData] = useState<string> ()
    const [userList,setUserList] = useState<string[]> ([])

    useEffect(() => {
        consult()
    },[])

    const consult = () => {
        getItems().then(setUserList)
    }
  return (
    <div>
        <input type="text" value={userData} onChange={(e) => setUserData(e.target.value)}/>
        <button onClick={() => {
            deleteItem(userData)
            consult()
        }}>Borrar</button>
        <div>
            {/* {userList.map(obj => (
                <p>{obj.userName} -- {obj.id}</p>
            ))} */}
        </div>
    </div>
  )
}

export default Delete