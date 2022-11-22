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

/* ---- (Get companies distribution) ---- */
function getCompDistribution(req, res) {
    console.log("Called getCompDistribution");
    var query = `
    SELECT state_code as State, COUNT(id) AS Companies
    FROM companies
    WHERE state_code IS NOT NULL
    GROUP BY state_code
    `;
    connection.query(query, function (err, rows, fields) {
      if (err) console.log(err);
      else {
        console.log(rows);
        res.json(rows);
      }
    });
  }

  module.exports = {
    getCompDistribution: getCompDistribution,
  };
  