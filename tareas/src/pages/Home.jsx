import { useState } from 'react'
import { access } from '../service/task'
import { useIdContext } from "../app/provider/Idprovider"

const Home = () => {
    const [userName, setUserName] = useState('')
    const [id,setId] = useIdContext()
 
  return (
    <div>
        <p>Introduce tu numbre si no existe se creara</p>
        <input type="text" onChange={e => setUserName(e.target.value)}/>
        <button onClick={() => access(userName).then(setId)}>Enviar</button>
        <br />{id}
    </div>
  )
}

export default Home