import { useState } from "react"
import HijoUno from "./HijoUno"
import HijoDos from "./HijoDos"

const Padre = () => {
    const [res, setRes] = useState(0)
    const extraerValor = valor => setRes(valor)
 
  return (
    <div className="m-auto ">
        <HijoUno
            extraerValor={extraerValor}
        />
        <HijoDos 
            res={res}
        />
    </div>
  )
}

export default Padre