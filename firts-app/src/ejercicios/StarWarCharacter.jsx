import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDStarWarPeople, getDStarWarFilms, getPelis } from "../service/StarWarApi"
import { Cols, Img, Row } from "../app/styles"


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
  
  return (
    <>
       
       
        <Row>
          <div>
            <h1>{data.name}</h1>
            <p>Height: {data.height}</p>
            <p>Gender: {data.gender}</p>
            <p>Hair color: {data.hair_color}</p>
            <p>Skin color: {data.skin_color}</p>
            <h2>Films</h2>
            <ul>
                {dataFilms.map((url) => (
                    <li >{url.title}</li>
                  )              
                )} 
            </ul>
          </div>
          <div>
          <Img src={`https://starwars-visualguide.com/assets/img/characters/${api}.jpg`}/>
          </div>
        </Row>
    </>
  )
}

export default StarWarCharacter