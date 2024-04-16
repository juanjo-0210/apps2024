import { useEffect, useState } from "react"
import { Cols4, Img } from "../app/styles.js"


const Apifetch = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        const url = "https://api.mercadolibre.com/sites/MLA/search?q=hogar"
        fetch(url).then(res => res.json()).then(res => setData(res.results))
        //setData(d)
        console.log(data)
    },[])
  return (
    <>
        <Cols4>
            
        {console.log(data)}
            {data.map((obj,index) => 
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

export default Apifetch