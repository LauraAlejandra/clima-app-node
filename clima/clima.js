const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4af3bb479a7a3aab40f1ac8095ad5d0b&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}