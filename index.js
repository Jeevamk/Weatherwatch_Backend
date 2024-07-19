const express = require('express')
const app = express();
const port = 5001;


app.get('/', async (req, res) => {
    try {
        const response = await axios.get("https://api.openweathermap.org/data/3.0/onecall", {
            params: {
                lat: 11.0645301,
                lon: 76.0240333,
                appid: 'ae813b7e4adcfad9ea2a1015f4d49ea1'
            }
        });
        console.log(response.data);
        res.status(200).json(response.data);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unable to fetch the data" });
    }
})




app.listen(port, () => {
    console.log(`running on port ${port}`);
})