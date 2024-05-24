import { useState } from "react"
import { createPersons } from "../service/persons"


const Create = () => {
    const [userName,setUserName] = useState<string>()
    const [email,setEmail] = useState<string>()
    
    
  return (
    <div>
        {/* <input type="text" value={userName} onChange={e => setUserName(e.target.value)} /> */}
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={() => createPersons({email})}>Enviar</button>
    </div>
  )
}

export default Create