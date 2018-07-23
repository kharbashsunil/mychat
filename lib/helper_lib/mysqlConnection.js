const path = require('path');
const mysql = require('mysql');
const config = require(path.resolve('./config/mysqlConfig')).mysqlConfig
const connection = mysql.createConnection(config);

connection.connect((err)=>{
    console.log(config);
    if(err) throw err;
    console.log('mysql connection is created');
})


module.exports ={
    connection: connection
}