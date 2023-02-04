import  Contenedor  from "../container/containerDb.js";
import { clienteSql } from '../db/clienteSql.js';

const prodTest = new Contenedor(clienteSql, 'productos')

 function controladorWeb(req, res) {

    if(req.session?.user)
      res.render('formulario');
    else
      return res.redirect('/')
   }
 
async function controladorWebListadoProductos(req, res) {
    const productos = await prodTest.getAll();
    res.render('listado', {productos, hayProductos: productos? productos.length : null}) 
}

async function controladorPostWebProductos(req, res) {
    res.status(201);
    const objeto = req.body;
    await prodTest.save(objeto);
    res.render('formulario');
}


export {controladorWeb, 
       controladorPostWebProductos,
       controladorWebListadoProductos };

