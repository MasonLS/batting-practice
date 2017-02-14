import Sequelize from 'sequelize';
import env from 'env';

export default new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {

});
