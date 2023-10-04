const express = require ("express")
const consign = require("consign")

const app = express()

consign().include("mvc/controllers").into(app)

app.listen(3000, ()=> console.log("online server at port 3000"))


module.exports = app

