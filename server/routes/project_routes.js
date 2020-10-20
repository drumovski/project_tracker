const express = require("express");
const router = express.Router();
const {
    getProjects,
    getProject,
    makeProject, 
    removeProject, 
    changeProject,
    newProject
 } = require("../controllers/project_controller")
const hello = ()=> console.log("hello")
router.get("/", getProjects);

router.get("/new", newProject)

router.post("/:id", getProject);
router.get("/?:id", hello, getProject);

router.post("/", makeProject);

router.delete("/:id", removeProject);

router.put("/:id", changeProject);

// router.get("/*", getProjects);


module.exports = router;
