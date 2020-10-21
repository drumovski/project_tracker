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
    arrivalDate: {
        type: String, 
        required: false
    }, 
    startWorkDate: {
        type: String,
        required: false
    },
    finishDate: {
        type: String, 
        required: false
    },
    category: [{
        a: {
            type: Boolean,
            default: false
        },
        b: {
            type: Boolean,
            default: false
        },
        c: {
            type: Boolean,
            default: false
        },
        d: {
            type: Boolean,
            default: false
        },
        e: {
            type: Boolean,
            default: false
        },
        f: {
            type: Boolean,
            default: false
        },
        g: {
            type: Boolean,
            default: false
        },
    }]
     
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