const express = require('express');
const router = express.Router();
const localStorage= require('local-storage')

router.get('/', (req, res, next)=>{
    res.send(`
    <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" 
    method="POST">
    <h3>Enter your user name</h3>
    <input id ="username" type = "text" name="title">
    <button type="submit">Add User</input>
    </form>`)
})

// router.post('/login', (req,res,next)=>{
//     const name=req.body;
//     // console.log(name);
//     res.redirect('/');
// })

module.exports=router;