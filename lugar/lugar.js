const axios = require('axios').default;

const getLugarLatLong = async(direccion) => {
    //const encodedUlr = encodeURI(direccion);
    const respuesta = await axios.get(`https://geocode.xyz/${direccion}?json=1`);
    if (respuesta.data.alt.loc.length === 0) {
        throw new Error(`No hay resultado para ${direccion}`);
    }

    const data = respuesta.data.alt.loc;
    const dir = data.countryname + ', ' + data.city;
    const lat = data.latt;
    const long = data.longt;
    return {
        dir,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLong
}