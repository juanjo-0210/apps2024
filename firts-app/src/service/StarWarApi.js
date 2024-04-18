import { iStarWar } from "./api"
import axios from 'axios';

export const getDStarWar = page => iStarWar.get(`/people/?${page}`)
export const getDStarWarPeople = people => iStarWar.get(`/people/${people}/`)
export const getDStarWarFilms = films => iStarWar.get(`/films/${films}`)



// esta funcion asincrona recibe un parametro de tipo array con varias urls API que se pasan como parametro y se iteran con el metodo map dentro de un promise all para enviar todas las peticiones al mismo tiempo, esto seria equivalente a escribir Promise.all(axio)... antes de terminar. preguntar a pablo porque en cada linea no se sobreescribe el resultado si se guarda en la misma constante
export const getPelis = async(urls)=>{
const data = await Promise.all(urls.map(async (url) => {
     const r = await axios.get(url);
     return r.data;
}))
return data;
}