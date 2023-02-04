
import { conectar } from "./server.js";
import yargsParser from 'yargs/yargs'


async function main() {

    try {
        const serv = await conectar(8080);
        console.log(`conectado al puerto ${serv.address().port}`);
    } catch (error) {
        console.log('algo falló: ' + error);
    }
}



main()