class Usuario{
    nome
    email
    telefone
    idade
    
}
constructor(nome, email, telefone, idade);{
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.idade = idade
}

cadastrarUsuario();{
    console.log("cadastro feito")
}
trocarSenha();{
    console.log("trocar senha")
}

module.exports= Usuario