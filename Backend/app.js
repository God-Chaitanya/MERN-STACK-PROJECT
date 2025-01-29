const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const port = 4000
app.use(cors())
mongoose.connect('mongodb+srv://admin:admin%401234@moviehub.z3uvn.mongodb.net/movies')
.then(() => {
    console.log("db is connected")
})
const movieSchema = new mongoose.Schema({
id : String,
title : String,
actor: String,
actress: String,
rating : String,
img: String,
height : String,
width : String
})

const Movie = mongoose.model("movieslists",movieSchema)
app.get("/movies", (req,res) => {
    Movie.find()
    .select("-_id")
    .then(movies => {
        res.json(movies);
    })
    })

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
})