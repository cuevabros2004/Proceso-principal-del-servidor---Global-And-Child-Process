import { Router } from 'express';
import { controladorRandomTotal } from '../controllers/controladorRandomTotal.js';

const routerApiRandomTotal = Router();

routerApiRandomTotal.get('/randoms/totales', controladorRandomTotal)
 
export {routerApiRandomTotal}
