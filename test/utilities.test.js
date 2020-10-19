const expect = require("expect");
const mongoose = require("mongoose");
const Project = require("../models/project");

const {
    getAllProjects, 
    getProjectById,
    addProject, 
    deleteProject, 
    updateProject
 } = require("../utils/utilities")

const db = "mongodb://localhost/project_tracker";
let projectId = null;

before(done=>connectToDb(done));

const connectToDb = (done)=>{
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
                done()
            } else {
                console.log("connecto to db")
                done()
            }
        }
    )    
}

beforeEach(async function(){
    let post = await setupData();
    projectId = project._id
})

const setupData = ()=>{
    let date = Date.now();
    let testProject = {};
    testProject.title = "Tets";
    testProject.create_date = date;
    testProject.modified_date = date;
    return Project.create(testProject);
}

after(done=>{
    mongoose.disconnect(()=>done());
})