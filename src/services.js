import axios from 'axios';

export function getPictures(){
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=csniFJkbj1lhu7HRHLz6E0ZaojKXPAnCSXTghLAC`)
}