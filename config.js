import dotenv from 'dotenv'
import path from 'path'
 


dotenv.config({
    path:    
        process.env.NODE_ENV === 'prod'
            ? './variablesEntorno/produccion.env'
            : './variablesEntorno/desarrollo.env'
       
})

export const STRING_CONEXION_MONGO = process.env.STRING_CONEXION_MONGO
export const USUARIO_CONEXION_MONGO = process.env.USUARIO_CONEXION_MONGO
export const PASSWORD_CONEXION_MONGO = process.env.PASSWORD_CONEXION_MONGO
export const BD_MONGO = process.env.BD_MONGO
export const MYSQL_CONEXTION_STRING = process.env.MYSQL_CONEXTION_STRING
export const BD_MYSQL = process.env.BD_MYSQL
export const SECRET=process.env.SECRET
export const TTL=process.env.TTL
export const SERVER=process.env.SERVER

 
 