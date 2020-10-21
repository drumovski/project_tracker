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
        const newProjects = projects.map((p)=> {
                    return {
                    projectNumber: p.projectNumber,
                    approvalDate: timeFormat(p.approvalDate)
                }
            });
        res.render("pages/display_all_projects", {newProjects});
    })
}

const getProject = function (req, res) {
    console.log("in get project----------------------------")
    const id = req.params.id
    console.log("in get project----------------------------", id)
    getProjectById(id).exec((err, project) => {
        
        if (err) {
            res.status(404);
            return res.send("not found");
        }
        console.log(project)
        // console.log("approvalDate:",project.approvalDate)
        project.approvalDate = timeFormat(project.approvalDate)
        project.arrivalDate = timeFormat(project.arrivalDate)
        project.startWorkDate = timeFormat(project.startWorkDate)
        project.finishDate = timeFormat(project.finishDate)
        // console.log("approvalDate in function: ",timeFormat(project.approvalDate))
        // console.log("approvalDate now:",project.approvalDate)
        res.render("pages/display_project", project)
    })
}

const grabProject = function (req, res) {
    let id = req.query.id;
    res.redirect(`/projects/${id}`);
}

const makeProject = function (req, res) {
    console.log("a",req.body.a)
    console.log("b",req.body.b)
    req.body.category = [{a:false}, {b:false}]
    req.body.category[0].a = req.body.a == undefined ? false : true;
    req.body.category[1].b = req.body.b == undefined ? false : true;
    console.log("category",req.body.category)
    // console.log("b",req.body.b)
    addProject(req).save((err, project) => {
        if (err) {
            return res.json({
                error: err.message
            });
        }
        console.log(project)
        res.render("pages/display_project", project)
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
    grabProject,
    makeProject,
    removeProject,
    changeProject,
    newProject
}