import { useState } from 'react'
import { access } from '../service/users'

const Home = () => {
const [userName, setUserName] = useState<string>('')
const [userId, setUserId] = useState<string>('')

  return (
    <div>
      <p>introduce tu nombre</p>
      <input type="text" name="nombre" id="" onChange={e => setUserName(e.target.value)}/>
      <button onClick={ () => {
        access(userName).then(setUserId)
        setUserName('')
      }
      }>Acceder</button>

      <p>{userId}</p>
    </div>
  )
}

export default Home