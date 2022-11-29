const express = require("express")
const mysql = require('mysql');
const cors = require("cors")

const routes = require('./routes')
const config = require('./config.json')

const app = express()

app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));

/* Query 3: This demonstration query to show the company's funding amount in angel and seed round, as well as the company category */
app.get("/funding", routes.getCompanyAngelSeedFunding)


/* Query 4(Ken): This demonstration query to show the Top VC's targeted industries */
// app.get("/VC_funding/:investorId", routes.get_VC_category)
app.get("/VC_funding", routes.get_VC_category)

// Query 4: This recommendation query to recommend the categories of the startup companies
app.get("/recommendation/company-category", routes.company_category_recommendations)

// Query 5: This recommendation query to recommend the location of the startup companies
app.get("/recommendation/company-region", routes.company_region_recommendations)

app.listen(config.server_port, () => {
  console.log(`Server running at http://${config.server_host}:${config.server_port}/`);
});

module.exports = app;
