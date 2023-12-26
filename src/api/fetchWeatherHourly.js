// import axios from "axios";
// import { fetchWeather } from "./fetchWeather";

// const URL = 'https://pro.openweathermap.org/data/2.5/forecast/hourly';
// const API_KEY = 'f33a484cf794d08d0148764789aaba32';

// export const fetchWeatherHourly = async () => {

//    // console.log(await fetchWeather());

//    // const cityLat = fetchWeather.coord.lat
//    // const cityLon = fetchWeather.coord.lon

//    const { data } = await axios.get(URL, {
//       params: {
//          // lat: cityLat,
//          // lon: cityLon,
//          mode: 'json',
//          APPID: API_KEY,
//       }
//    })

//    // console.log(data);
//    // console.log(data.coord.lat);
//    // console.log(data.coord.lon);
//    return data
// }