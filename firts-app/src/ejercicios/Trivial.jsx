import { useState } from "react"
import Questions from "../assets/data/questions.js"
import PopUp from "./PopUp.jsx"
import { Trivibox,Question,Questionbox } from "../app/styles.js"



    const  shuffleArray = (array) => {
        let counter = array.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter)
            counter--;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
    shuffleArray(Questions)
   

const Trivial = () => {
    const [increment,setIncrement] = useState(0)
    
    const [winner,setWinner] = useState(false)
    const [back,setBack] = useState(true)

    
    if (increment===3) {
        setWinner(true)
        setIncrement(4)
    }

    if (increment<2) {
        
        shuffleArray(Questions[increment].answers)
    }
  return (
    <>
       
        {increment<3 && 
            
            <div>                
                <h1>{Questions[increment].question}</h1>
                <Trivibox >
                    <Questionbox>
                        {Questions[increment].answers.map((ans,index) => (
                            <Question key={index}>
                                <button onClick={() => 
                                    ans.isRight ?  setIncrement(increment + 1) 
                                    : increment === 0 ?setIncrement(0) : setIncrement(increment - 1) }>x
                                </button>{ans.txt}
                                
                            </Question>
                        ))}
                    </Questionbox>
                    <img style={{width: "350px", height: "350px"}} src={Questions[increment].img} alt="" />
                </Trivibox>
            </div>
        }
        {
            winner && 
                <PopUp
                back={back}
                setBack={setBack}
                setIncrement={setIncrement}
                >
                    Has ganado
                </PopUp>
        }
    </>
  )
}

export default Trivial