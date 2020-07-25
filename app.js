const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
//lugar.getLugarLatLong(argv.direccion).then(console.log).catch((err) => console.log(err));

//clima.getClima(40.42882, -3.64539).then(console.log).catch((err) => console.log(err));

const getInfo = async(direccion) => { //el async y await es lo mismo que las promesas de arriba

    try {
        const resp_lugar = await lugar.getLugarLatLong(direccion);
        const resp_clima = await clima.getClima(resp_lugar.lat, resp_lugar.long);
        return `El clima en ${resp_lugar.dir} tiene temperatura ${resp_clima}.`;
    } catch (err) {
        return `No se pudo determinar el clima en ${resp_lugar.dir}.`;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);