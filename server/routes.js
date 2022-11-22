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

/* Queries */
async function getCompanyAngelSeedFunding(req, res) {
    const page = 1
    const pagesize = 10
    connection.query(
        `SELECT companies.name as company, category_code, SUM(raised_amount_usd) as funding
        FROM companies
        INNER JOIN funding_rounds ON companies.id = funding_rounds.object_id
        WHERE funding_round_code = 'angel' OR funding_round_code = 'seed'
        GROUP BY company
        ORDER BY  funding DESC, COUNT(category_code) DESC
        LIMIT ${pagesize} OFFSET ${pagesize  * (page - 1)}`, function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                console.log("***** ✅ Query successful! ✅ *****", results)
                res.json({ results: results })
            } else {
                res.json({ results: [] })
            }
        }
    );
}

module.exports = {
    getCompanyAngelSeedFunding: getCompanyAngelSeedFunding
}