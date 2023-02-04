import  Contenedor  from "../container/containerDb.js";
import  ContenedorFaker  from "../container/containerFaker.js";
import { clienteSql } from '../db/clienteSql.js';

const products = new Contenedor(clienteSql, 'productos')
const productsFaker = new ContenedorFaker(clienteSql, 'productos')


async function controladorPostProductos(req, res) {
    res.status(201);
    const objeto = req.body;
    await products.save(objeto);
    res.json(objeto)
}

async function controladorGetProductos(req, res) {
    const productos = await products.getAll();
    res.json(productos);
}

async function controladorGetProductosTest(req, res) {
    const productos = await productsFaker.getProductosTest();
    res.json(productos);
}

async function controladorGetProductosSegunId({ params: { id } }, res) {
    const productos = await products.getById(id);
    
    if (!productos) {
        res.status(404);
        res.json({ mensaje: `no se encontró producto con ese id (${id})` });
    } else {
        res.json(productos);
    }
}

async function controladorPutProductosSegunId({ body, params: { id } }, res) {
    const objeto = await products.getById(id)

    if (!objeto) {
        res.status(404);
        res.json({ mensaje: `no se encontró producto con ese id (${id})` });
    } else {
        body.id = id  
        await products.update(body);
        res.json(body);
    }
}


async function controladorDeleteProductosSegunId({ body, params: { id } }, res) {
    const existe = await products.getById(id)

    if (!existe) {
        res.status(403);
        res.json({ mensaje: `no se encontró producto con ese id (${id})` });
    } else {
        await products.deleteById(id);
        res.json(body);
    }
}


function controladorproductosRandom(req, res){
    res.send(products.getById(randomUUID()))
}




export {controladorGetProductos, 
        controladorPostProductos, 
        controladorGetProductosSegunId,
        controladorPutProductosSegunId,
        controladorDeleteProductosSegunId,
        controladorproductosRandom,
        controladorGetProductosTest };