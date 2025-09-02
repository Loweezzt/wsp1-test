import express from "express"
import nunjucks from "nunjucks"
const app = express()

app.use(express.static("public"))

nunjucks.configure("veiws", {
    autoescape: true,
    express: app
})

app.get("/about", (req, res) => {
    console.log(req)
    res.send("<h1>Hello te23 välkomna!<h1>")
    })


app.get("/", (req, res) => {
    res.render("index.njk", { title: "Vår första dynamiska sida", message: "Med Nunjucks skapar vi magi!" })
})



app.listen(3000,() => {
    console.log("server is running on http://localhost:3000")
})