import { Router } from 'express';
import { Query } from 'mongoose';
import { controladorRandom } from '../controllers/controladorRandom.js';

const routerApiRandom = Router();


routerApiRandom.get('/api/randoms',  controladorRandom)
 
export {routerApiRandom}