const express = require ("express")

const app = express()

app.listen(3000, ()=> console.log("online server at port 3000"))


module.exports = app

const itemsControler = require("./mvc/controllers/usuarioContoller")