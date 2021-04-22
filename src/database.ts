import { createPool } from 'mysql2/promise'

export async function connect() {

    const connection = await createPool({
        host: process.env.DB_HOSTNAME ? process.env.DB_HOSTNAME : 'localhost',
        user: process.env.DB_USERNAME ? process.env.DB_USERNAME : 'root',
        database: process.env.DB_DATABASE ? process.env.DB_DATABASE : 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
}