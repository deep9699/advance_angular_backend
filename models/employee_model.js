var db=require('../dbconnection');
var employee={
    getAllEmployee(callback){
        return db.query("select * from employee_tbl",callback);
    },
    getEmployeeById(id,callback){
        return db.query("select * from employee_tbl where emp_email=?",[id],callback);
    },
    insertEmployee(item,callback){
        return db.query("insert into employee_tbl values(?,?,?,?,?,?)",[item.emp_email,item.emp_name,item.cnfrmPassword.emp_password,item.emp_phone,item.emp_city,item.emp_gender],callback);
    },
    updateEmployee(item,callback){
        return db.query("update employee_tbl set emp_name=?,emp_phone=?,emp_city=?,emp_gender=? where emp_email=?",[item.emp_name,item.emp_phone,item.emp_city,item.emp_gender,item.emp_email],callback);
    }

}
module.exports=employee;