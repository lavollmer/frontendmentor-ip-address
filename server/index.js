const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' })

})

app.get('/api/data', async (req, res) => {
    const searchTerm = req.query.query;
    const apiKey = process.env.VITE_REACT_APP_KEY;

    try {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${searchTerm}`)
        res.json(response.data);
    } catch {
        console.error('Error fetching from GeoIP API:', error.message);
        res.status(500).json({ error: 'Failed to fetch location data' });
    }
})

app.listen(PORT, () => {
    console.log(`Server running on 'http://localhost:${PORT}'`)
})