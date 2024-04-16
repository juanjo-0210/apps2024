import { useState } from "react"

const HijoUno = ({extraerValor}) => {
    const [v1,setV1] = useState(0)
    const [v2,setV2] = useState(0)
  return (
    <div>
        <input type="number" className=" w-40 block" onChange={e => setV1(e.target.value)}/>
        <input type="number"  className=" w-40 block" onChange={e => setV2(e.target.value)}/>
        <button onClick={() => {
            let aux = Number(v1) + Number(v2)
            extraerValor(aux)
        }}>Calcular</button>
    </div>
  )
}

export default HijoUno