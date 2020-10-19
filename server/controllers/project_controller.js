const getAllProjects = require("../utils/utilities")

const getProjects = (res, req)=>{
    res.send(getAllProjects(req))
}


module.exports = {
    getProjects
}