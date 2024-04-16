import { useRef, useState } from "react"
import Rectangulo from "./ejercicios/Rectangulo"
import { Box, Popup } from "./app/styles"
import md5 from "js-md5"
import books from "./ejercicios/books.json"
import Films from "./ejercicios/Films"
import Author from "./ejercicios/Author"
import Year from "./ejercicios/Year"
import Padre from "./ejercicios/Padre"
import Aumentar from "./ejercicios/Aumentar"
import images from "./ejercicios/ImgImport"
import "./app/app.css"
import PopUp from "./ejercicios/PopUp"
import {StyledComponent1,StyledComponent2} from './app/ejercicio';
import Teatro from "./ejercicios/Teatro"
import Trivial from "./ejercicios/Trivial"
import Workout from "./ejercicios/Workout"
import Cuento from "./ejercicios/Cuento"
import Router from "./app/Router"


function App() {
  const [valor,setValor] = useState(0)
  const [back,setBack] = useState(true)
  const privateKey = '8edf3a81036e6412cdc33b6ecceb7be851e749b4'
  const publicKey = 'd3117d1f818737034579fbb30c670a98'

  const ts = Date.now()
  const hash = md5(ts + privateKey + publicKey)
  
  //fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=100`).then(res => res.json()).then(res => console.log(res))
  
  performance.now()
  
  return (
     <>
    <Router />
    {/* <Cuento /> */}

     {/* <Workout /> */}

    {/* <Trivial /> */}
    {/* <Teatro /> */}


    {/* <StyledComponent1> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum delectus veniam porro accusamus autem dolores aliquid consectetur sequi voluptatum! Ex, tempore quidem officiis cupiditate labore modi dolor pariatur distinctio accusantium! </StyledComponent1>
    <StyledComponent2 >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia dolores nostrum facere fugit nobis illum odio debitis. Dolorum quam obcaecati temporibus necessitatibus molestias, totam accusamus assumenda iusto labore illum.</StyledComponent2> */}











      {/* <button onClick={() => setBack(!back) }>Pulsar</button>
      <Box 
        $back={back}
      />
        <button onClick={() => setBack(!back) }>show</button>





         <PopUp 
          back={back}
          setBack={setBack}
         />
         */}

        

      {/* {images.map( (imagen) =>
        <div className="box">
          <h1>{imagen.title}</h1>
          <img  src={imagen.img} />
        </div>
      )}

      <div style={{
        width: "350px",
        height : "350px",
        backgroundColor : "blue"
      }} ></div>

    <Aumentar
      valor={valor}
      setValor={setValor}
    />
    <div>
      {valor}
    </div> */}

      
      




      {/* EJERCICIO-------------------------------------------------------- */}
      {/* <Padre />
      <div className="grid grid-cols-4 gap-4 max-w-screen-xl m-auto mt-10">
        
        {books.map( (book,index) => {
          
          return (
            <div key={index} className="py-20 border shadow-lg rounded-xl text-center transition duration-500 cursor-help hover:scale-110">
            <Films 
              book={book}
            />
            <Author 
              book={book}
            />
            <Year 
              book={book}
            />
          </div>
          )
        })}
      </div> */}
      
     </>
   
  )
}



// const HookState = () => {
//   const [moneda,setMoneda] = useState(0)
//   const monedaRef = useRef()
//   const [temp,setTemp] = useState(0)
//   const tempRef = useRef()
 
//   const monedas = () => {
    
//     setMoneda(monedaRef.current.value *2)
//   }

//    const temperatura = () => {
    
//     setTemp(tempRef.current.value * 9/5 + 32)
//   }

//   return(
//     <>
     
      
//       {/* <div>
//         <input type="text" ref={monedaRef}/>
//         <button onClick={monedas}>calcular</button>
//         <output>{moneda}</output>
//       </div>

//       <div>
//         <input type="text" ref={tempRef}/>
//         <button onClick={temperatura}>calcular</button>
//         <output>{temp}</output>
//       </div> */}
//     </>
//   )
// }


// const HookRef = () => {

//   const monedaRef = useRef();
//   const monedaOutRef = useRef()
//   const tempRef = useRef();
//   const tempOutRef = useRef()
//   const altoRef = useRef()
//   const anchoRef = useRef()
//   const rectOutRef = useRef()

//   const moneda = () => {
//     const v = monedaRef.current.value
//     monedaOutRef.current.value = v * 2
//   }

//   const temperatura = () => {
//     const v = tempRef.current.value
//     tempOutRef.current.value = v * (9/5) + 32
//   }
//   const rectangulo = () => {
//     const alto = altoRef.current.value
//     const ancho = anchoRef.current.value
//     rectOutRef.current.value = alto * ancho
//   }

//   return(
//     <>
//     <div>
//       <input type="text" ref={monedaRef}/>
//       <button onClick={moneda}>Calcular</button>
//       <output ref={monedaOutRef}></output>
//     </div>
//     <div>
//       <input type="text" ref={tempRef}/>
//       <button onClick={temperatura}>Calcular</button>
//       <output ref={tempOutRef}></output>
//     </div>
//     <div>
//       <input type="text" ref={altoRef}/>
//       <input type="text" ref={anchoRef}/>
//       <button onClick={rectangulo}>Calcular</button>
//       <output ref={rectOutRef}></output>
//     </div>
//     </>
//   )
// }




export default App
