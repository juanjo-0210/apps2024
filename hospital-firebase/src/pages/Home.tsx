import { useState } from "react"
import { createPersonsTypeS } from "../service/hospital"


const Home = () => {
  const [userName,setUserName] = useState<string>("")


  return (

   <div>
    <h1>Create</h1>
     <form>
      <input type="text" placeholder="Paciente Name" value={userName} onChange={e => setUserName(e.target.value)}/>
      <br />
      <input type="date" />
      <br />
      <button onClick={ () => createPersonsTypeS({}) }>Create</button>
    </form>
   </div>
  )
}

export default Home