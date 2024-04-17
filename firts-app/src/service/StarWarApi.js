import { iStarWar } from "./api"
import axios from 'axios';

export const getDStarWar = page => iStarWar.get(`/people/?${page}`)
export const getDStarWarPeople = people => iStarWar.get(`/people/${people}/`)
export const getDStarWarFilms = films => iStarWar.get(`/films/${films}`)


export const getPelis = async(urls)=>{
const data = await Promise.all(urls.map(async (url) => {
     const r = await axios.get(url);
     return r.data;
}))
console.log(data)
return data;
}