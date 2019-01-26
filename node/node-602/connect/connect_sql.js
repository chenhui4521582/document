let mysql = require('mysql');
let db = {};
let pool = mysql.createConnection({
    'host':'127.0.0.1',
    'user':'root',
    'password':'k4521582',
    'database':'m602',
    'port':3306
});

db.query = (sql,param)=>{
    return new Promise((resolve,reject)=>{
        if(!sql){
            console.log('sql语法错误');
            return false;
        }
        else if(sql&&param){

            pool.query(sql,param,(err,data)=>{
                if(err){
                    reject({error:err})
                }else{
                    resolve({data : data,err :err});
                }
            });

        }else{
            pool.query(sql,(err,data)=>{
                if(err){
                    reject({error:err})
                }else{
                    resolve({data : data,err :err});
                }
            });
        }

    })
};

module.exports = db;

