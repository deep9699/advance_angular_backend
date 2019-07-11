var employee=require('../models/employee_model');
var express=require('express');
var router=express.Router();

router.get('/:id?',function(req,res,next){
    
    if(req.params.id)
    {
        employee.getEmployeeById(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
    else
    {
    employee.getAllEmployee(function(err,rows){
        if(err)
        {
                res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
    }
});

router.post('/',function(req,res,next){
    employee.insertEmployee(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


router.put('/',function(req,res,next){
    employee.updateEmployee(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;
