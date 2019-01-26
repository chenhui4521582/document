const express = require('express');
const cookie = require('cookie-parser');
const body_parser = require('body-parser');
const session = require('express-session');
const path = require('path');

class ExportConfig {
    session_cookie(App){
        App.use(cookie());
        App.use(session({
            name:'v3_username',
            secret:'this is my cookie and session,fuck you all',
            cookie:{maxAge:30*24*60*60*1000,path:'/', httpOnly: false, secure: false },
            resave:true,
            saveUninitialized:true
        }))
    }
    body_json(App){
        App.use(body_parser.urlencoded({extended:false}));
        App.use(body_parser.json());  //配置 读取res.Body 为json 对象;
    }
    static(App){
        App.use('/static',express.static('static'));
        App.use('/dist',express.static('static'));
    }
    engine(App){
        App.set('views', path.join(__dirname,'../views'));
        App.set('view engine','ejs');
    }
    init(App){
        this.session_cookie(App);
        this.body_json(App);
        this.engine(App);
        this.static(App);
    }
}


module.exports = new ExportConfig();


