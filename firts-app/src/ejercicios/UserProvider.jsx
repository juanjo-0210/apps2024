import { createContext, useState, useContext } from "react"

const AppContext = createContext();
export const useUserContext = () => useContext(AppContext);

console.log(AppContext)
console.log(useContext)



const UserProvider = ({children}) => {
    const [user, setUser] = useState()

  return (
    <AppContext.Provider value={[user,setUser]}>
        {children}
    </AppContext.Provider>
  )
}

export default UserProvider