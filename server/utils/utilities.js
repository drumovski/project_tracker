const fs = require("fs");
const path = require("path");
const Project = require("../models/project");

const getAllProjects = function (req){
    return Project.find();
}

const getProjectById = function (req){
    return Project.findById(req.params.id);
}

const addProject = function (req){
    let date = Date.now();
    req.body.create_date = date;
    req.body.modified_date = date;
    return new Project(req.body);

}

const deleteProject = function (id){
    return Post.findByIdAndRemove(id)
}

const updateProject = function (req){
    req.body.modified_date = Date.now();
    return Project.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    });
}

module.exports = {getAllProjects, getProjectById, addProject, deleteProject, updateProject}
