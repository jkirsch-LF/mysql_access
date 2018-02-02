const express = require('express');
const ws = express();
const path = require('path');

const mysqlCredentials = require('./mysqlCredentials.js');
const mysql = require('mysql');
const db = mysql.createConnection(mysqlCredentials);

const PORT = 3000;


ws.use(express.static(path.join(__dirname, 'html')));

ws.get('/users', (req, res)=>{
    db.connect(function(){
        db.query('SELECT * FROM students', function(err, rows, fields){
            const output = {
                success: true,
                data: rows
            } 
            const json_output = JSON.stringify( output );
            res.send(json_output);
        })
    })
});


ws.post('/users', function(){

});

ws.delete('/users', function(){

});

ws.put('/users', function(){

});

ws.listen(PORT, function(){
    console.log('SERVER STARTED');
});