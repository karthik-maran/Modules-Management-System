const moduleModel = require('../models/Module');


exports.saveModule = async (req,res)=>{
    try {
        const{moduleName,programName,categoryName,tagGroup,serviceName,moduleSummary,status,tags} = req.body;
        const freshModule = await moduleModel.create({moduleId:"MOD"+Math.floor(1000+ Math.random()*9000),
            moduleName,
            programName,
            categoryName,
            tagGroup,
            serviceName,
            moduleSummary,
            authorName:"Saranya Loganathan",
            status,
            tags
        });

        res.status(201).json({message:"module data saved succesfully",freshModule});
    } catch (error) {
        console.error(error.message);
        return res.status(400).json({message:"failed to store the model data"});
    }
}

exports.getModule = async (req,res)=>{
    try {
        const allModule = await moduleModel.find();
        res.status(200).json({message:"all data are showing",allModule})
    } catch (error) {
        console.error(error.message);
        res.status(404).json({message:"data not found"});
        
    }
}

exports.getModuleById = async (req,res)=>{
    try {
        const fetchModule = await moduleModel.findOne({
            moduleId:req.params.moduleId
        })
        if(!fetchModule){
            res.status(404).json({message:"object not found"})
        }
        res.status(200).json({message:"get the object successfully",fetchModule})
    } catch (error) {
        res.status(401).json({message:"something went wrong on getMouduleById"})
        
    }
}

exports.modifyById = async (req, res) => {
    try {
        const updatedModule = await moduleModel.findOneAndUpdate(
            { moduleId: req.params.moduleId },
            {
                moduleName: req.body.moduleName,
                programName: req.body.programName,
                categoryName: req.body.categoryName,
                tagGroup: req.body.tagGroup,
                serviceName: req.body.serviceName,
                moduleSummary: req.body.moduleSummary,
                status: req.body.status,
                tags: req.body.tags
            },
            {
                new: true
            }
        );

        if (!updatedModule) {
            return res.status(404).json({message: "Module doesn't exist"});
        }

        res.status(200).json({message: "Module updated successfully", updatedModule});

    } catch (error) {
        console.error(error);

        res.status(500).json({ message: "Something went wrong"});
    }
};