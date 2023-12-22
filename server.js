const express = require("express")
const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    res.json([{name: 'char1ey', id: 'char1ey'}, {name: 'char1ey', id: 'char1ey'}, {name: 'char1ey', id: 'char1ey'}, {name: 'char1ey', id: 'char1ey'}])
})

app.use("/", router)

app.listen(3000, () => {
    console.log("server start")
})