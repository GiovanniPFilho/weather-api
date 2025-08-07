import express from 'express';
import { getWeatherByCity } from '../services/weatherService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: 'Must have "city" parameter' });
    };

    try {
      const weather = await getWeatherByCity(city);
      res.json(weather);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

export default router;