import  Router  from "./app/Router"
import IdProvider from "./app/provider/Idprovider"


function App() {
  

  return (
    <>
      <IdProvider>
        <Router/>
      </IdProvider>
    </>
  )
}

export default App
