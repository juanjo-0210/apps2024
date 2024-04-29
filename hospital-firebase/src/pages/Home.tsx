import { useState } from "react"
import { createPersonsTypeS } from "../service/hospital"


const Home = () => {
  const [userName,setUserName] = useState<string>("")
  const [date,setDate] = useState<string>("")

  return (

   <div>
    <h1>Create</h1>
     <form>
      <input type="text" placeholder="Paciente Name" value={userName} onChange={e => setUserName(e.target.value)}/>
      <br />
      <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
      <br />
      <button onClick={ e => {
      e.preventDefault()
      createPersonsTypeS({
          userName: userName,
          date: date
        })} }>Create</button>
    </form>
   </div>
  )
}

export default Home