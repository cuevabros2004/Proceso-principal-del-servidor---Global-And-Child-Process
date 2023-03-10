import { Router } from 'express';
import { controladorWeb } from "../controllers/controladorWeb.js";
import { controladorWebListadoProductos } from "../controllers/controladorWeb.js";
import { controladorPostWebProductos } from "../controllers/controladorWeb.js";
import { controladorProcessInfo } from "../controllers/controladorProcessInfo.js"
import { controladorWebInfoProcess } from "../controllers/controladorProcessInfo.js"



const routerWeb = Router();

routerWeb.get('/formulario', controladorWeb);
routerWeb.get('/productos', controladorWebListadoProductos);
routerWeb.post('/productos', controladorPostWebProductos);
routerWeb.get('/info', controladorProcessInfo)
routerWeb.get('/infoList', controladorWebInfoProcess)

 
export default  routerWeb;

