import express from 'express';
import { controladorWebLogin } from '../controllers/controladorLogin.js';
import { controladorLogout } from '../controllers/controladorLogin.js';
import { controladorLoging } from '../controllers/controladorLogin.js';
import { controladorLoginp } from '../controllers/controladorLogin.js';
import { controladorVolveralogin } from '../controllers/controladorLogin.js';
import { controladorIraRegistro } from '../controllers/controladorLogin.js';
import { controladorIraLogin } from '../controllers/controladorLogin.js';
import { controladorFaillogin } from '../controllers/controladorLogin.js';
import { controladorFailregister } from '../controllers/controladorLogin.js';
import passport from "passport";

const routerLogin = express.Router()

routerLogin.get('/', controladorWebLogin)
routerLogin.get('/logout', controladorLogout)
routerLogin.get('/volveralogin', controladorVolveralogin)
routerLogin.get('/formulario/login', controladorLoging)
routerLogin.post('/formulario/login',  passport.authenticate("login", { failureRedirect: "/faillogin"}), controladorLoginp); 
routerLogin.get('/registro', controladorIraRegistro)
routerLogin.get('/login', controladorIraLogin)
routerLogin.post('/formulario/registro', passport.authenticate("register", { successRedirect: "/formulario",  failureRedirect: "/failregister", passReqToCallback: true })); 
routerLogin.get('/faillogin', controladorFaillogin);
routerLogin.get('/failregister', controladorFailregister);



export  default routerLogin 

