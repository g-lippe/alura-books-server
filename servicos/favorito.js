const fs = require('fs');


// Turn this into a sigle generic function
function getTodosFavoritos() {
  return JSON.parse(fs.readFileSync("favoritos.json"))
}

function excluiFavorito(id) {
  let livros = getTodosFavoritos()
  const indiceExcluir = livros.findIndex(livro => livro.id == id)
  livros.splice(indiceExcluir, 1) 

  fs.writeFileSync("favoritos.json", JSON.stringify(livros))
}


module.exports = {
  getTodosFavoritos,
  excluiFavorito
}