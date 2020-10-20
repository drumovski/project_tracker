const express = require("express");
const mongoose = require("mongoose")
const projectRouter = require("./routes/project_routes")
const handlebars = require('express-handlebars');//Sets our app to use the handlebars engine
const port = process.env.port || 6969



const app = express()

app.use(express.urlencoded())

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');//Sets handlebars configurations (we will go through them later on)

app.use(express.static('styles'));



const db = "mongodb://localhost/project_tracker";
mongoose.connect(
    db, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    err=>{
        if (err){
            console.log("You done mucked the db", err)
        } else {
            console.log("connecto to db")
        }
    }
)


app.get("/", (req, res)=>{
    console.log("got rooted")
    res.render("home");
});

app.use("/projects", projectRouter);

app.listen(port, ()=>console.log(`yoooo, smoke ${port} every day`));