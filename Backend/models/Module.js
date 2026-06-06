const mongoose = require('mongoose')


const moduleSchema = mongoose.Schema({
    moduleId:{
        type:String,
        required:true,
        unique:true
    },
    moduleName:{
        type:String,
        required:true

    },
    programName:{
        type:String,
        required:true
    },
    categoryName:{
        type:String,
        required:true
    },
    tagGroup:{
        type:String,
        required:true
    },
    serviceName:{
        type:String,
        requried:true
    },
    moduleSummary:{
        type:String,
        requried:true
    },
    authorName:{
        type:String,
    },
    status:{
        type:String,
        requried:true
    },
    reviewStatus:{
        type:String,
        require:true,
        default:"Pending"
    },
    tags:{
        type:[String],
        
    },
    createdDate:{
        type:Date,
        default: () => new Date().toISOString().split("T")[0]
    }
},{timestamps:true})

module.exports = mongoose.model("module",moduleSchema);
