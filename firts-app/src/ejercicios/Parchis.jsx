import { useState, useEffect } from "react";
import data from "../assets/data/blue.json"
import dataRed from "../assets/data/red.json"
import { Parchis as Parchi, Box, Azul, Rojo} from "../css/parchisStyle.js"

const Parchis = () => {
    const [width,setWidth] = useState(0)
    const [height,setHeight] = useState(0)
    const [azul,setAzul] = useState({})
    const [rojo,setRojo] = useState({})
    const [moveR,setMoveR] = useState(0)
    const [moveB,setMoveB] = useState(0)
    const [turno, setTurno] = useState(true)
   

    const calculateSceneDimensions = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        if (w > h) {
            setWidth(h * 0.9);
            setHeight(h * 0.9);
        } else {
            setHeight(w * 0.9);
            setWidth(w * 0.9);
        }
    }
    console.log(moveR)
    useEffect(() => {
        window.addEventListener('resize', calculateSceneDimensions);
        calculateSceneDimensions();
    }, [])

    const whoWon = (count,player) => {
        if(count > 70) {
            alert(`Ha ganado el jugador ${player}`)
            
        }
    }

    const startGame = () => {
        
        
        if (turno) {
            
            setMoveB(moveB + Math.floor(Math.random() * 5 + 1))
            setAzul({
                "top": data[moveB].y,
                "left" : data[moveB].x
            })
            whoWon(Number(data[moveB].n),"azul")
            setTurno(!turno)
            return
        }
        setMoveR(moveR + Math.floor(Math.random() * 5 + 1))
        setRojo({
            "top": dataRed[moveR].y,
            "left" : dataRed[moveR].x
        })
        whoWon(moveR,"Red")
        setTurno(!turno)
    }
    
  return (
    <>
        <Parchi
            width={width}
            height={height}
        >
            <button onClick={startGame}>Roll te dice</button>
            
            {data.map(d => (
                <Box
                key={d.n}
                    width={d.width}
                    height={d.height}
                    x={d.x}
                    y={d.y}
                >
                    
                </Box>
            ))}
            <Azul
                azul={azul}
                
            />
            <Rojo
                rojo={rojo}
                
            />
            
        </Parchi>
        
    </>
  )
}

export default Parchis