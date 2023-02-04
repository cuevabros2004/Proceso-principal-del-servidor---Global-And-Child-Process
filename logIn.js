import session from 'express-session'
import MongoStore from 'connect-mongo'
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import jwt from 'jsonwebtoken'
import { User } from './models/user.js'
import { STRING_CONEXION_MONGO, USUARIO_CONEXION_MONGO, PASSWORD_CONEXION_MONGO,  BD_MONGO, SECRET, TTL } from './config.js'

//session
export default function login(servidor) {

    const SALT = 'secreto'

    servidor.use(session({
        /* ----------------------------------------------------- */
        /*           Persistencia por redis database             */
        /* ----------------------------------------------------- */
        store: MongoStore.create({
            //En Atlas connect App :  Make sure to change the node version to 2.2.12:
            mongoUrl: STRING_CONEXION_MONGO + USUARIO_CONEXION_MONGO + ':' + PASSWORD_CONEXION_MONGO + BD_MONGO,
           
        }),
        /* ----------------------------------------------------- */
       
        secret: SECRET,
        ttl: TTL,
        cookie:{
            httpOnly:false,
            secure:false//,
         //   maxAge:600
        },
        rolling:true,
        resave: true,
        saveUninitialized: false
    }))

    passport.use(
        "login",
        new LocalStrategy(
            {
                passReqToCallback: true,
            },
            (req, username, password, done) => {
              User.findOne({ username: username }, (err, user) => {
                   if (err) return done(err);
                    if (!user) {
                        console.log("User Not Found with username " + username);
                        return done(null, false);
                    }
                    console.log('aca ' + validatePassword(user, password))

                    if (!validatePassword(user, password)) {
                        console.log("Invalid Password");
                        return done(null, false);
                    }
                    return done(null, user);
                });
            }
        )
    );

    
	  passport.use(
        "register",
        new LocalStrategy(
            {
                passReqToCallback: true,
            },
            function (req, username, password, done) {
                    User.findOne({ username: username }, function (err, user) {
                        if (err) {
                            console.log("Error en la registración: " + err);
                            return done(err);
                        }
                        if (user) {
                            console.log("El usuario ya existe!");
                            return done(null, false);
                        } else {
                            const usuario = {
                                username: username,
                                password: createHash(password)
                            }
                            User.create(usuario, (err, userWithId) => {
                              if (err) {
                                console.log('Error al grabar el usuario: ' + err);
                                return done(err);
                              }
                              console.log(user)
                              console.log('Registración de usuario exitosa!');
                              return done(null, userWithId);
                            });						 
                        }
                    });
            }
        )
    );
     
	  const validatePassword = (user, password) => {

		const  objetoOriginal = jwt.verify(user.password, SALT)

		   if(password === objetoOriginal.password)
		     return true;
		   else
		     return null;
	  };
	  
	  var createHash = function (password) {
		  const token = jwt.sign({password: password}, SALT);  //, { expiresIn: '24h' });
		  return token;
	  };


	  servidor.use(passport.initialize());
	  
	 //Sesiones
	  servidor.use(passport.session());
	  	  
	  passport.serializeUser((user, done) => {
		  done(null, user._id);
	  });
	  
	  passport.deserializeUser((id, done) => {
		  User.findById(id, function (err, user) {
			  done(err, user);
		  });
	  });
	  //Fin Sesiones
	  
      
}

