const express = require("express");
const rotaLivro = require("./rotas/livro");
const cors = require("cors");

const app = express()
app.use(express.json())

// Installed CORS Package, this can be done with 
// res.header("Access-Control-Allow-Origin", "*") without installing anything

//Allow Any Origin through CORS Package
app.use(cors({
  origin: '*'
}))

const port = 8000

app.use('/livros', rotaLivro)


app.listen(port, () => {
    console.log('Listening on port ' + port)
})