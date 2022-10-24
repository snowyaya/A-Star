const config = require('./config.json')
const mysql = require('mysql');
const e = require('express');

const connection = mysql.createConnection({
    host: config.rds_host,
    user: config.rds_user,
    password: config.rds_password,
    port: config.rds_port,
    database: config.rds_db
});
connection.connect();

async function hello(req, res) {
    // a GET request to /hello?name=Steve
    if (req.query.name) {
        res.send(`Hello, ${req.query.name}! Welcome to the FIFA server!`)
    } else {
        res.send(`Hello! Welcome to the FIFA server!`)
    }
}