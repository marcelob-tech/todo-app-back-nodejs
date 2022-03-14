
const express = require('express');


// router.get('/' , (req , res)=>{
//     // router code here
// })


// router.get('/another-route' , (req , res)=>{
//     // router code here
// })

module.exports  = function(server) {

    // API Routes
    const router = express.Router();
    server.use('/api',router);


    //TODO Routes
    const todoService = require('../../api/todo/todoService');
    todoService.register(router, '/todos');

}