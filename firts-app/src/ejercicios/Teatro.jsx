
import { useState } from "react"
import { StyleTeatro } from "../app/styleTeatro.js"

const Teatro = () => {
const [count,setCount] = useState(0)

   const lineas = [
  "Hola Romeo.",
  "Hola Julieta.",
  "Te amo, Romeo.",
  "Y yo a tí Julieta.",
  "Fuguémonos a Mexico.",
  "Mejor no, no le caes bien a mi familia y si seguimos adelante con nuestro amor, esta historia acabará mal.",
  "Poz vaya."
]
console.log("hola")

if (count > lineas.length -1     ) {
    setCount(0)
    console.log("first")
}else if (count < 0) {
    setCount(lineas.length)
    return
}

  return (
    <>
        <button onClick={() => setCount(count - 1)}>Anterior</button>
         <button onClick={() => setCount(count + 1)}>Siguiente</button>
        {console.log(count)}
        {lineas.map((linea,index) => {
            let aux = count === index ? true : false
            return(
                <StyleTeatro key={index} $select={aux}>
                    <p >{linea}</p>
                </StyleTeatro>
            )
        })}

    </>
  )
}

export default Teatro