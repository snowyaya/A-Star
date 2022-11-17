const express = require("express")
const app = express()
const cors = require("cors")

const routes = require('./routes')
const config = require('./config.json')

app.use(cors())

// app.get("/", function(req, res) {
//     res.send({"name": "Jane Doe"}) // Should be json format
// })

// test
console.log("Enter server.js 1");
app.get("/", routes.getCompDistribution);

/* ---- (Geographical distribution of the companies) ---- */
console.log("Enter server.js 2");
app.get("/home/distribution", routes.getCompDistribution);


/* Need to change it to your own database */
app.listen(3000, () => {
  console.log("app listening on port 3000")
})

