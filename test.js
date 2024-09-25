const fs = require('fs');

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))

const novoDado = {id: 11, name: "The Last of Us"}


fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync("livros.json")))
