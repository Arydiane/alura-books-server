const { getTodosFavoritos} = require("../servicos/favorito")

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos
}