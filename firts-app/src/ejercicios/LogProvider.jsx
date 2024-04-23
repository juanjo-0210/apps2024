import { useUserContext } from "./UserProvider"

const LogProvider = () => {
    const [,setUser] = useUserContext()

    const name = () => {
        setUser("Pedro")
    }
  return (
    <>
        <button onClick={name}>Consultar</button>
        
    </>
  )
}

export default LogProvider