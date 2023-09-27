const app = require('../../startup.js')
const UsuarioModel = require("../models/usuarioModel.js")
const path = require("path")

app.get("/getUsuario", (req, res)=>{
    const usuario = new UsuarioModel ("Marilda", "marilda@jj", "82738390", "69")

    const retorno = {
        "nome": usuario.nome,
        "email": usuario.email
        }

    res.json( retorno )
})

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("mvc/views/itemsView.html"))
})