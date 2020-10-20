const fs = require("fs");
const path = require("path");
const Project = require("../models/project");

const getAllProjects = function (req){
    return Project.find();
}

const getProjectById = function (id){
    console.log(id)
    return Project.findById(id);
}

const addProject = function (req){
    let date = Date.now();
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
