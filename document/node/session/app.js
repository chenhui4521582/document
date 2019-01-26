let express = require('express');

let session = require('./session.js')

let body_parser = require('body-parser');

let app = express();

session(app);

app.listen(3000,function(){
    console.log('server start for port 3000')
});

app.set('views',__dirname);

app.set('view engine','ejs');

app.use(body_parser.urlencoded({extended:false}));

app.use(body_parser.json());

app.use((req,res,next)=>{
    var _user = req.session.user;
    if(_user){
        app.locals.user = _user;
        next()
    }else{
        let url = req.url.split('/')[1];
        if(url=='login'){
            next()
        }else{
            res.redirect('/login');
        }
    }


});

app.post('/login/sub',(req,res)=>{
    let queryString = req.body;
    let username = queryString.username;
    let password = queryString.password;
    if(username&&password){
        req.session.user = username;
        res.redirect('/index');
    }
});

app.get('/login',(req,res)=>{
    res.render('login')
});

app.get('/index',(req,res)=>{
    res.render('index')
});

app.get('/logout',(req,res)=>{
    delete req.session.user
    res.redirect('/login')
});