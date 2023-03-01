function getLivros(req, res) {
    try {
        res.send("Olá mundo , alura do brasil!")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}