import  Contenedor  from "../container/container.js";
import { clienteSql } from '../db/clienteSql.js';

//const chatFile = new Contenedor(clienteSql, 'chat')
const chatFile = new Contenedor( 'chat.txt')

async function controladorPostChat(req, res) {
    res.status(201);
    const objeto = req.body;
    await chatFile.save(objeto);
    console.log(objeto)
    res.json(objeto)
   
}
 
export {controladorPostChat };