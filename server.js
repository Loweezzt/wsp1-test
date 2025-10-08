import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
import indexRouter from "./routes/index.js"
const app = express()

app.use(express.static("public"))
app.use(morgan("dev"))
app.use("/", indexRouter)

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})
 