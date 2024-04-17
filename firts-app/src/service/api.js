import axios from "axios"

export const instance = await axios.create({baseURL : "https://api.mercadolibre.com/sites/MLA"})
export const iStarWar = await axios.create({baseURL :"https://swapi.dev/api"})
