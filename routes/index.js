import express from "express"
import fs, { read } from "fs"

const router = express.Router()


router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Vår första dynamiska sida",
        message: "Med Nunjucks skapar vi magi!"
    })
})

router.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "Om oss",
        message: "Skolarbete av Lowe"
    })
})

router.get("/greeting", (req, res) => {
    console.log(req.query)
    res.render("greeting.njk", {
        title: "Hälsningssida",
        name: req.query.name,
        message: req.query.message
    })
})

router.get("/movies", (req, res) => {
    const { movies } = JSON.parse(fs.readFileSync("./data/movies.json"))
    res.render("movies.njk", {
        title: "Anime-serier",
        movies
    })
})

router.get("/movies/:id", (req, res) => {
    console.log(req.params)
    const movie = movies.find(m => m.id === parseInt(req.params.id))
    if (movie) {
        res.render("movie.njk", {
            title: movie.title,
            movie
        })
    } else {
        res.status(404).render("404.njk", {
            title: "Sidan hittades inte"
        })
    }
})


export default router