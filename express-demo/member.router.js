const express = require('express')

const router = express.Router()

router.get('/list',(req,res)=>{
    res.json({
        list:[
            {
                "id":"111",
                "name":"abc"
            }
        ]
    })
})

module.exports=router;