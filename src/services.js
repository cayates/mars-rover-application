import axios from 'axios';

export function getPictures(imageUrl){
    return axios.get(imageUrl)
}