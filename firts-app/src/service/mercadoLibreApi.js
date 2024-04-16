import axios from "axios"

export const libreData = async () => {
    const data = axios.get("https://api.mercadolibre.com/sites/MLA/search?q=hogar")
    return data
}