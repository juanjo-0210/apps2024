import { Scene,Door } from "../app/styles.js";
import scene from "../assets/data/scenes.js"
import { useState,useEffect } from "react"; 



const Cuento = () => {
     const getSceneByName = scenaTitle => {
        Scene.find(obj => obj.title === scenaTitle)
    }

    const [width,setWidth] = useState(0)
    const [height,setHeight] = useState(0)
    const [currentScene, setCurrentScene] = useState(getSceneByName("espacio"));
    const [back,setBack] = useState(scene[0].back)

   


    const calculateSceneDimensions = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const a = 16;
        const b = 9;
        const proportion = a / b;
        const proportion2 = w / h;
        if (proportion > proportion2) {
        setWidth(w);
        setHeight(w * b / a);
        } else {
        setHeight(h);
        setWidth(h * a / b);
        }
  }
  
  useEffect(()=> {
    calculateSceneDimensions()
  },[])

    console.log(width)
    console.log(height)
  return (
    <>

        <Scene
            $back={currentScene.back}
            $width={width}
            $height={height}
            
        >
            {currentScene.txt}
            {currentScene.doors.map((obj,index) => 
                <Door key={index} data={obj} onClick={()=> setCurrentScene(getSceneByName("espacio")) }/>
            )} 
           
        </Scene> 
        
    </>
  )
}

export default Cuento