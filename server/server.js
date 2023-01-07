const express = require('express');
const app = express();
const db = require('./config/db');

app.set('port', process.env.port || 4000);

app.get('/IndexList', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    
    db.query("select * from IndexList", (err, data) =>{
        if(err){
            throw err;
        }else{
            console.log('IndexList db is :' ,data)
        }
        res.send(data);
    })
})

app.listen(app.get('port'), ()=>{
    console.log(`connection port is : ${app.get('port')}`);
})