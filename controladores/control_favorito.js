const { getTodosFavoritos, insereFavorito, excluiFavorito } = require("../servicos/favorito")



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
    const id = req.params.id
    insereFavorito(id)
    res.status(201)
    res.send("Livro inserido com sucesso")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function deleteFavorito(req, res) {
  try {
    const id = req.params.id

    // Validade provided ID
    if (id && Number(id)) {
      excluiFavorito(id)
      res.send("Favorito excluído com sucesso")
    } else {
      res.status(422)
      res.send("ID inválido")
    }
    
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}


module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito
}