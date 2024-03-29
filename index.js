const express = require("express")
const app = express()
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Server is up!")
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})