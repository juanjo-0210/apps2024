import { useState } from "react"
import { createPersonsTypeS } from "../service/persons"


const Create = () => {
    const [userName,setUserName] = useState<string>()
    
    
  return (
    <div>
        <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
        <button onClick={() => createPersonsTypeS({userName})}>Enviar</button>
    </div>
  )
}

export default Create