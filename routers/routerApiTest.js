import { Router } from 'express';
const routerApiTest = Router();

import { controladorGetProductosTest } 
from "../controllers/controladorProductos.js"; 

routerApiTest.get('/', controladorGetProductosTest);

export    {routerApiTest};
