var mysql=require('mysql');
	var connection=mysql.createPool({
 
	host:'localhost',
 	user:'root',
 	password:'',
 	database:'employee_db'
 
	});
	module.exports=connection;