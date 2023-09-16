import mysql from 'mysql'

// const connection = mysql.createConnection({
//     host: process.env["DB_HOST"],
//     user: process.env["DB_USER"],
//     password: process.env["DB_PASSWORD"],
//     database: process.env["DB_DATABASE"]
// });
//
// module.exports = connection;

import knex from 'knex';

let db = knex({
    client: 'mysql',
    connection: {
    host: process.env["DB_HOST"],
    user: process.env["DB_USER"],
    password: process.env["DB_PASSWORD"],
    database: process.env["DB_DATABASE"]
        },

});

export default function DB() {
    return db
}
