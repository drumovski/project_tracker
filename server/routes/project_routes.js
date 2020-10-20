const express = require("express");
const router = express.Router();
const {
    getProjects,
    getProject,
    grabProject,
    makeProject, 
    removeProject, 
    changeProject,
    newProject
 } = require("../controllers/project_controller")
const hello = ()=> console.log("hello")
router.get("/", getProjects);

router.get("/new", newProject)

router.get("/id", grabProject);

// router.post("/:id", getProject);
router.get("/?:id", getProject);

router.post("/", makeProject);

router.delete("/:id", removeProject);

router.put("/:id", changeProject);

// router.get("/*", getProjects);


module.exports = router;
