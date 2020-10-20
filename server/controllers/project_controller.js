const {
    getAllProjects,
    getProjectById,
    addProject,
    deleteProject,
    updateProject
} = require("../utils/utilities")
const {timeFormat} = require('../utils/helpers')

const getProjects = function (req, res) {
    getAllProjects(req).exec((err, projects) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.send(projects);
    })
}

const getProject = function (req, res) {
    const id = req.params.id
    getProjectById(id).exec((err, project) => {
        project.approvalDate = timeFormat(project.approvalDate)
        if (err) {
            res.status(404);
            return res.send("not found");
        }
        res.render("pages/display_project", project)
    })
}

const makeProject = function (req, res) {
    console.log(req.body.projectNumber)
    addProject(req).save((err, project) => {
        if (err) {
            res.status(404);
            return res.send("not found");
        }
        res.send(project)
    })
}

const removeProject = function (req, res) {
    deleteProject(req.params.id).exec((err) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.sendStatus(204);
    });
}

const changeProject = function (req, res) {
    updateProject(req).exec((err, project) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.status(200);
        res.send(project);
    });
}

const newProject = function (req, res) {
    res.render("pages/new_project")
}

module.exports = {
    getProjects,
    getProject,
    makeProject,
    removeProject,
    changeProject,
    newProject
}