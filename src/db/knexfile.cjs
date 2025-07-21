const dotenv = require('dotenv');
dotenv.config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            user: 'gaspar',
            password: '0405',
            database: 'empreiteira',
            port: Number(process.env.DB_PORT) || 5432,
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
}
