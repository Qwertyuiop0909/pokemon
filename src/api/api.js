import axios from "axios";
import { Url } from "../helpers/constants";

export const Api = {
    getCards: () => axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`)
        .catch((err) => {throw new Error(err)}),

    getCurrentCard: (url) => axios.get(url)
        .catch((err) => {throw new Error(err)})

}