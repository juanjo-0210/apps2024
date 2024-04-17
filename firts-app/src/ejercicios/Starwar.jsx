import { useEffect, useState } from "react"
import { Cols4, Img, Pages } from "../app/styles"

import { getDStarWar } from "../service/StarWarApi.js"
import { Link } from "react-router-dom"
import { split } from "postcss/lib/list"

const Starwar = () => {
    const [data,setData] = useState([])
    const pages = [1,2,3,4,5,6,7,8]

useEffect(() => {
  
    getDStarWar().then(res => setData(res.data.results))

  
}, [])


  return (
    <>
        <Cols4>
            {data.map((obj,index) => {
                const id = obj.url.split("/")
                console.log(id[id.length - 2])
                return (
                <div key={"person" + index}>
                    <Link
                     to={"starwarWarCharacter/" + id[ id.length - 2]}
                    >
                        <Img src={`https://starwars-visualguide.com/assets/img/characters/${id[ id.length - 2]}.jpg`}/>
                        <p >{obj.name}</p>
                        <p>{obj.url}</p>
                    </Link>
                </div>
                
            )})}
        </Cols4>
        
        <Pages>
            {pages.map((page,index) => (

                <span key={"page" + index} onClick={() => getDStarWar(`page=${page}`).then(res => setData(res.data.results))}>
                    {page}
                </span>
            ))}
        </Pages>
        
    </>

  )
}

export default Starwar