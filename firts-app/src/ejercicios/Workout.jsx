import { useState } from "react"
import works from "../assets/data/workouts.js"
import flecha from "../assets/img/flecha.png"
import { Cols, Row, Workbox,Img } from "../app/styles.js"

const Workout = () => {
const [current,setCurrent] = useState(0)
const [currentImg,setCurrentImg] = useState(0)
const [img,setImg] = useState(works[current].exercises[0].img)

   console.log(currentImg)

  return (
    <>
        <Workbox>
            <span onClick={() => current > 0 ? setCurrent(current - 1) : setCurrent(0)}>
                <img src={flecha} style={{width: "30px"}} />
            </span>
                <h1>{works[current].title}</h1>
            <span onClick={() => current < 2 && setCurrent(current + 1)}>
                <img src={flecha} style={{transform: "rotate(180deg)", width: "30px"}} />
            </span>
        </Workbox>

        <Row>
            <img className="img" src={img} alt=""/>

            <Cols  
            >
                {works[current].exercises.map( (exer,index) => {  
                    
                    return (
                        <Img 
                            key={index} 
                            $borde={index === currentImg} 
                            src={exer.img} 
                            onClick={() => {
                                setCurrentImg(index)
                                setImg(exer.img)
                            } }
                        />
                            
                        
                    )

                    })}
                
            </Cols>
        </Row>
    </>
  )
}

export default Workout