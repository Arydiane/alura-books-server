const { Router } = require("express")
const router = Router()

router.get('/', (req, res) => {
    res.send("Olá mundo , alura do brasil!")
})

module.exports = router