const express = require('express');

const app = express();
const memberRouter = require('./member.router.js')
app.get('/name/:age',(req,res)=>{
    const {age}=req.params;
    res.json({
        name:'tom',
        age
    })
})
app.use(memberRouter);
app.post('/name',(req,res)=>{
    res.send('tom post')
})
app.listen(3000,()=>{
    console.log('服务启动成功')
})