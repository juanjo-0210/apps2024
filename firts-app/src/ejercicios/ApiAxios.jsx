import  { useEffect, useState } from 'react'
import { libreData} from "../service/mercadoLibreApi.js"
import {Cols4, Img} from '../app/styles.js';

const ApiAxios = () => {
    const [d,setD] = useState([])

    useEffect(() => {
        libreData().then(obj => setD(obj.data.results))
        console.log(d)
    },[])

  return (
    <>
         <Cols4>
            
            {console.log(d)}
                {d.map((obj,index) => 
                <div key={index}>
                    <h1>{obj.title}</h1>
                    <Img src={obj.thumbnail}/>
                </div>
            )
                }
        </Cols4>
    </>
  )
}

export default ApiAxios