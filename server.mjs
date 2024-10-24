import express from "express"

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/batata', (req, res) => {
    res.send("Aoba")
})

app.listen(3000, () => {
    console.log("Server na porta 127.0.0.1:3000")
})