const { getTodosFavoritos, insereFavorito } = require("../servicos/favorito")



function getFavoritos(req, res) {
  // Allow Cors
  // res.header("Access-Control-Allow-Origin", "*");
  try {
    const livros = getTodosFavoritos()
    res.send(livros)

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}


function postFavorito(req, res) {
  try {
    insereFavorito(livroNovo)
    res.status(201)
    res.send("Livro inserido com sucesso")
  } 

  catch (error) {
  res.status(500)
  res.send(error.message)
}
}


module.exports = {
  getFavoritos
}