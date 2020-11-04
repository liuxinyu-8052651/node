const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('hello world!!!!!')
})

// nodemon 热启动
// 热启动npm install nodemon -D
server.listen(3000,'localhost',()=>{
    console.log('服务器启动成功！')
})