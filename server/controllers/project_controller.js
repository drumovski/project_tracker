const {
    getAllProjects, 
    getProjectById,
    addProject, 
    deleteProject, 
    updateProject
 } = require("../utils/utilities")

const getProjects = (req, res)=>{
    res.send(getAllProjects(req))
}

const getProject = (req, res)=>{
    let post = getPostById(req)
    if(post) return res.send(post);
    res.status(400);
    res.send(req.error);
}

const makeProject = (req, res)=>{
    
}

const removeProject = (req, res)=>{
    
}

const changeProject = (req, res)=>{
    
}


module.exports = {
    getProjects, 
    getProject, 
    makeProject,
    removeProject,
    changeProject
}