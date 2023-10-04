const Db = require("../../repository/database.js")

class Skin {
    nome
    descricao
    raridade
    

    constructor(nome, descricao , raridade){
        this.nome = nome
        this.descricao = descricao
        this.raridade = raridade
    }

    getAllskins(){
        const db = new Db()
        db.getConnection().query("SELECT * FROM SKINS", (err, results, fields) => {
            console.log(results)
        })
    }
    
    
}


module.exports = Skin;