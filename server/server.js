const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser");

const routes = require('./routes')

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Get company distributions
app.get("/home/companydistributions", routes.getCompDistribution);



/* Need to change it to your own database */
app.listen(8081, () => {
  console.log("app listening on port 8081")
})

