import express from 'express';
import dotenv from 'dotenv';
import nodemon from 'nodemon';
import weatherRoutes from './routes/weatherRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <h2>🌤️ Weather API is running!</h2>
    <p>Send a GET request to <code>/api/weather?city=city_name</code> to get a city weather now.</p>
    <p>Ex.: <code>/api/weather?city=São Paulo</p>
  `);
});

// API base route
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});