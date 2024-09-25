const { getTodosLivros, getLivroPorID, insereLivro, modificaLivro, excluiLivro } = require('../servicos/livro');

function getLivros(req, res) {
  try {
    const livros = getTodosLivros()
    res.send(livros)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}



function getLivro(req, res) {
  try {
    const id = req.params.id

    // Validade provided ID
    if (id && Number(id)) {
      const livro = getLivroPorID(id)
      res.send(livro)
    } else {
      res.status(422)
      res.send("ID inválido")
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}


function postLivro(req, res) {
  try {
    const livroNovo = req.body
    insereLivro(livroNovo)
    res.status(201)
    res.send("Livro inserido com sucesso")
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}


function patchLivro(req, res) {
  try {
    const id = req.params.id

    // Validade provided ID
    if (id && Number(id)) {
      const modificacoes = req.body
      modificaLivro(modificacoes, id)
      res.send("Livro alterado com sucesso")
    } else {
      res.status(422)
      res.send("ID inválido")
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}


function deleteLivro(req, res) {
  try {
    const id = req.params.id

    // Validade provided ID
    if (id && Number(id)) {
      excluiLivro(id)
      res.send("Livro excluído com sucesso")
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
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro
}