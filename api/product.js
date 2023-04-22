const express = require('express')
const router = express.Router();


router.get("/",async(req,res)=>{
    try {
        res.json({
            message:"Get"
        })
    } catch (error) {
        return res.status(500).send('errpr')
    }
})

module.exports = router