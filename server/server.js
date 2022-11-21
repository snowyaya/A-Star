const express = require("express")
const mysql = require('mysql');
const cors = require("cors")

// app.use(cors())

const routes = require('./routes')
const config = require('./config.json')

const app = express()

app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));

// app.get("/", function(req, res) {
//     res.send({"name": "Jane Doe"}) // Should be json format
// })

/* Query 3: This demonstration query to show the company's funding amount in angel and seed round, as well as the company category */
app.get("/company_funding", routes.getCompanyAngelSeedFunding)

/* Need to change it to your own database */
// app.listen(3000, () => {
//   console.log("app listening on port 3000")
// })

app.listen(config.server_port, () => {
  console.log(`Server running at http://${config.server_host}:${config.server_port}/`);
});

module.exports = app;
