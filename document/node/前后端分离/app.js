var express = require('express');

var ejs = require('ejs');

var cookieParser = require('cookie-parser');

var app = express();

app.listen(8080,function(){
    console.log('server start on port 8080');
});

app.set('view engine','ejs');

app.set('views','./views');

app.use(express.static('./static'));

app.use(cookieParser('secret'));

app.get('/',function(req,res){

    if(req.cookies.c_name){
        res.json({'welcome':'欢迎你再次光临'})
    }else{
        res.cookie('c_name','i am is a cookie',{
            maxAge:30*60*60*1000,
            path:'/',
            httpOnly:true,
            signed:true
        })
        res.json({'welcome':'欢迎第一次访问！'})
    }


});




