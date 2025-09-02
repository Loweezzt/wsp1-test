import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello gais ")
})

app.get("/about", (req, res) => {
    console.log(req)
    res.send("<h1>Hello te23 välkomna!<h1>")
    })
app.listen(3000,() => {
    console.log("server is running on http://localhost:3000")
})