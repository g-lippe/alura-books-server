const fs = require('fs');

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorID(id) {
  const livros = getTodosLivros()
  return livros.filter(livro => livro.id == id)[0]

}

function insereLivro(livroNovo) {
  const livros = getTodosLivros()

  fs.writeFileSync("livros.json", JSON.stringify([...livros, livroNovo]))
}

function modificaLivro(modificacoes, id) {
  let livros = getTodosLivros()
  const indiceModificado = livros.findIndex(livro => livro.id == id)

  const conteudoMudado = { ...livros[indiceModificado], ...modificacoes }

  livros[indiceModificado] = conteudoMudado
  fs.writeFileSync("livros.json", JSON.stringify(livros))
}

module.exports = {
  getTodosLivros,
  getLivroPorID,
  insereLivro,
  modificaLivro
}