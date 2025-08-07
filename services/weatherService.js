import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.OPENWEATHER_API_KEY;

export async function getWeatherByCity(city) {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
            q: city,
            appid:  API_KEY,
            units: 'metric',
            lang: 'pt_br',
        },
      });
      
      const data = response.data;

      return {
        city: data.name,
        temperature: `${data.main.temp} °C`,
        description: data.weather[0].description,
        humidity: `${data.main.humidity}%`,
        wind: `${data.wind.speed} m/s`,
        coordinates: data.coord,
      };
    } catch (error) {
        throw new Error('Error to get data on API weather');
    }
};