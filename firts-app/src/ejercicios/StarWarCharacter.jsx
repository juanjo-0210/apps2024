import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDStarWarPeople, getDStarWarFilms, getPelis } from "../service/StarWarApi"


const StarWarCharacter = () => {
    const { api } = useParams()
    const [data,setData] = useState([])
    const [dataFilms,setDataFilms] = useState([])
    const [films,setFilms] = useState()

    useEffect(() => {
      getDStarWarPeople(api).then(res => {
        setData(res.data)
        getPelis(res.data.films).then(res => setDataFilms(res))
    })


      
    }, [])
   console.log('888888888888',dataFilms)
  return (
    <div>
       
       
        <h1>{data.name}</h1>
        <p>Height: {data.height}</p>
        <p>Gender: {data.gender}</p>
        <p>Hair color: {data.hair_color}</p>
        <p>Skin color: {data.skin_color}</p>
        <h2>Films</h2>
        <ul>
            {/* {dataFilms.map((url,index) => {
                //getDStarWarFilms(aux[aux.length - 2]).then(res => res.data)
                //fetch(url).then(res => res.json()).then(res => console.log(res.title) )
                return(
                    <li key={index}>{url}</li>
                )
            }                
            )} */}
        </ul>
    </div>
  )
}

export default StarWarCharacter