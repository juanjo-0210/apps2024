import { useState } from 'react'

const Rectangulo = () => {
    const [alto, setAlto] = useState(0)
    const [ancho, setAncho] = useState(0)
    const [res, setRes] = useState(0)

  return (
    <div>
         <input type="text" onChange={e => setAlto(e.target.value)}/>
       <input type="text" onChange={e => setAncho(e.target.value)}/>
        <button onClick={() => setRes(alto * ancho)}>calcular</button>
       <output>{res}</output>
    </div>
  )
}

export default Rectangulo