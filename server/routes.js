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

/* Queries (YAYA)*/
async function getCompanyAngelSeedFunding(req, res) {
    const page = req.query.page ? req.query.page : 1;
    const pagesize = req.query.pagesize ? req.query.pagesize : 10;
    connection.query(
        `SELECT companies.name as company, category_code, SUM(raised_amount_usd) as funding
        FROM companies
        INNER JOIN funding_rounds ON companies.id = funding_rounds.object_id
        WHERE funding_round_code = 'angel' OR funding_round_code = 'seed'
        GROUP BY company
        ORDER BY funding DESC, COUNT(category_code) DESC`, function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                res.json({ results: results })
                // console.log("***** ✅ Query successful! ✅ *****", results)
            } else {
                res.json({ results: [] })
            }
        }
    );
}

/* Queries (Ken)*/
async function get_VC_category(req, res) {
    const investorId = req.query.investorId ? req.query.investorId : 17;
    connection.query(
        `SELECT category_code, count(category_code) AS number_of_investment
        FROM companies JOIN investments ON investments.funded_object_id = companies.id
        WHERE investments.investor_object_id = ${investorId}
        GROUP BY companies.category_code
        ORDER BY count(category_code) DESC
        LIMIT 10`, function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                // console.log("***** ✅ Query successful! ✅ *****", results)
                res.json({ results: results })
            } else {
                res.json({ results: [] })
            }
        }
    );
}


// **************************************************
//              RECOMMENDATION ROUTES
// **************************************************
async function company_category_recommendations(req, res){

    const major = req.query.major;

    connection.query(`WITH people_in_same_major AS(
        SELECT object_id 
        FROM degrees 
        WHERE subject LIKE '%${major}%'
        ), people_in_which_company AS(
        SELECT relationship_object_id
        FROM relationships 
        JOIN people_in_same_major ON people_in_same_major.object_id = relationships.person_object_id
        ), company_categories AS(
        SELECT category_code 
        FROM companies 
        JOIN people_in_which_company ON people_in_which_company.relationship_object_id = companies.id
        )
        SELECT category_code
        FROM company_categories
        GROUP BY category_code
        ORDER BY COUNT(category_code) DESC
        LIMIT 10;`, function(error, results, fields){
            if (error){
                console.log(error)
                res.json({error: error})
            }
            else if (results){
                res.json({results: results})
            }
            else{
                res.json({results: []})
            }
        }
    );
}

async function company_region_recommendations(req, res){

    const major = req.query.major;
    
    connection.query(`WITH people_in_same_major AS(
        SELECT object_id 
        FROM degrees 
        WHERE subject LIKE '%${major}%'
        ), people_in_which_company AS(
        SELECT relationship_object_id
        FROM relationships 
        JOIN people_in_same_major ON people_in_same_major.object_id = relationships.person_object_id
        ), company_regions AS(
        SELECT region
        FROM companies 
        JOIN people_in_which_company ON people_in_which_company.relationship_object_id = companies.id
        )
        SELECT region
        FROM company_regions
        GROUP BY region
        ORDER BY COUNT(region) DESC
        LIMIT 10;`, function(error, results, fields){
            if (error){
                console.log(error)
                res.json({error: error})
            }
            else if (results){
                res.json({results: results})
            }
            else{
                res.json({results: []})
            }
        }
    );
}

module.exports = {
    getCompDistribution,
    get_VC_category,
    getCompanyAngelSeedFunding,
    company_category_recommendations,
    company_region_recommendations
}