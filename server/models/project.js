const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema({
    title: {
        type: String, 
        required: true
    },
    create_date: {
        type: Date, 
        required: true
    }, 
    modified_date: {
        type: Date, 
        required: true
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