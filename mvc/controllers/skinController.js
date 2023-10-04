const skinModels = require("../models/skinModels.js")

module.exports = (app) => {

app.get("/getskin", (req, res)=>{
    const skin = new skinModels("liviao", "liviao da qebrada", "super rara")
    skin.getAllskins()
    res.send("nome:"+skin.nome)
})

}