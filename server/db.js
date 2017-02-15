import mysql from 'mysql';
import env from './env';

export default mysql.createConnection({
  host: env.DB_HOSTNAME,
  port: env.DB_PORT,
  user: env.DB_USERNAME,
  password : env.DB_PASSWORD,
  database : env.DB_NAME
});
