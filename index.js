// import json-server library in index.js
const jsonserver = require('json-server')

//create server using json-server library

const empServer = jsonserver.create()

//create path to db.json file

const router = jsonserver.router('db.json')

//middlewares to convert js to json 

const middleware = jsonserver.defaults()

//connect /user middleware and router in server
 empServer.use(middleware)
 empServer.use(router)

 //setup port for the server 

 const port = 5000 || process.env.PORT

 //to listen server for resolving request
 empServer.listen(port,()=>{
    console.log(`empServer started at ${port} and ready fetch request`);
 })
