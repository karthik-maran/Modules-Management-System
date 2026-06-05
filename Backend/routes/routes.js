const express = require('express')
const {saveModule,getModule,getModuleById, modifyById} = require('../controllers/controller')


const router = express.Router();


router.post("/module",saveModule)
router.get("/module",getModule)
router.get("/edit/:moduleId",getModuleById)
router.put("/edit/:moduleId",modifyById)
module.exports = router;
