const {
    getAllProjects, 
    getProjectById,
    addProject, 
    deleteProject, 
    updateProject
 } = require("../utils/utilities")

const getProjects = function (req, res){
    getAllProjects(req).exec((err, projects)=>{
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.send(projects);
    })
}

const getProject = function (req, res){
    let post = getPostById(req)
    if(post) return res.send(post);
    res.status(400);
    res.send(req.error);
}

const makeProject = function (req, res){
    getProjectById(req).exec((err, project)=>{
        if(err){
            res.status(404);
            return res.send("not found");
        }
        res.send(project)
    })
}

const removeProject = function (req, res){
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

const changeProject = function (req, res){
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


module.exports = {
    getProjects, 
    getProject, 
    makeProject,
    removeProject,
    changeProject
}