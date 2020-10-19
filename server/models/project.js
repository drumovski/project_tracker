const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema({
    project_no: {
        type: String, 
        required: true
    },
    approval_date: {
        type: Date, 
        required: true
    }, 
    arrival_date: {
        type: Date, 
        required: false
    }, 
    start_date: {
        type: Date, 
        required: false
    }, 
    finish_date: {
        type: Date, 
        required: false
    }, 
    category: {
        type: Date, 
        required: true
    }, 
    project_worker: {
        type: String, 
        required: false
    },     
    report_required: {
        type: Boolean, 
        required: false
    }, 
})

module.export = mongoose.model("Project", Project)