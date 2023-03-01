const fs = require("fs")

//le o arquivo json
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novaDado = {id: '3', nome: 'Código Limpo'}

// escreve no arquivo json
fs.writeFileSync("livros.json", JSON.stringify([ ...dadosAtuais, novaDado ]))

console.log(JSON.parse(fs.readFileSync("livros.json")))