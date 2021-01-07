import axios from 'axios';
import { apiKey } from './api-key';


const searchGiphy = (searchParam) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchParam}&limit=30`;
    return axios.get(url);
}

export default searchGiphy;