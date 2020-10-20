const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema({
    projectNumber: {
        type: String, 
        required: true
    },
    approvalDate: {
        type: String, 
        required: true
    }, 
    startWorkDate: {
        type: Date
    }
    // start_date: {
    //     type: Date, 
    //     required: false
    // }, 
    // finish_date: {
    //     type: Date, 
    //     required: false
    // }, 
    // category: {
    //     type: Date, 
    //     required: true
    // }, 
    // project_worker: {
    //     type: String, 
    //     required: false
    // },     
    // report_required: {
    //     type: Boolean, 
    //     required: false
    // }, 
})

module.exports = mongoose.model("Project", Project)