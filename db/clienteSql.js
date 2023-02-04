import mysqlConfig from './config.js'
import crearKnex from 'knex'
import crearTablas from '../db/crearTablas.js'

export const clienteSql = crearKnex(mysqlConfig)

crearTablas()

 