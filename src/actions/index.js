
import axios from 'axios';

const API_KEY = 'f4c122fd52c8a8df46503f4b39f710d5';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';


export function fetchWeather(city){
    const url= `${ROOT_URL}&q=${city},us`;
    const request =axios.get(url); //promsise
    console.log('Request:'+request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}