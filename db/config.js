import {MYSQL_CONEXTION_STRING, BD_MYSQL} from '../config.js'

const mysqlConfig = {
    client: 'mysql2',
    connection: MYSQL_CONEXTION_STRING + BD_MYSQL
}


export default mysqlConfig
