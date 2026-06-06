const express = require('express')
const {saveModule,getModule,getModuleById, modifyById,changeReview, getByReviewStatus} = require('../controllers/controller')


const router = express.Router();


router.post("/module",saveModule)
router.get("/module",getModule)
router.get("/edit/:moduleId",getModuleById)
router.put("/edit/:moduleId",modifyById)

//optional
router.patch("/update/:moduleId",changeReview);
router.get("/status",getByReviewStatus)
module.exports = router;
