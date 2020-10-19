const express = require("express");
const mongoose = require("mongoose")
const projectRouter = require("./routes/project_routes")

const port = process.env.port || 6969

const app = express()

const db = "mongodb://localhost/project_tracker";
mongoose.connect(
    db, 
    {
        useNewUrlParser: true;
        useUnifiedTopology: true; 
        useFindAndModify: false;
    },
    err=>{
        if (err){
            console.log("You done mucked the db", err)
        } else {
            console.log("connecto to db")
        }
    }
)


app.get("/", (req, res)={
    console.log("got rooted")
    res.json("HOME");
});

app.use("/projects", projectRouter);

app.listen(port, ()=>console.log(`yoooo, smoke ${port} every day`))
