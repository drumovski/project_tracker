const fs = require("fs");
const path = require("path");
const Project = require("../models/project");

const getAllProjects = function (req){
//     const proj = Project.find().exec(proj.map((p)=> {
//         return {projectNumber: p.projectNumber,
//         approvalDate: p.approvalDate
//     }
// }));
//     // console.log("here", proj)
    return Project.find();

}

const getProjectById = function (id){
    console.log(id)
    return Project.findById(id);
}

const addProject = function (req){
    // let date = Date.now();
    return new Project(req.body);

}

const deleteProject = function (id){
    return Project.findByIdAndRemove(id)
}

const updateProject = function (req){
    return Project.findByIdAndUpdate(id, req.body, {
        new:true
    });
}

module.exports = {getAllProjects, getProjectById, addProject, deleteProject, updateProject}
