var express = require('express');

var mongoose = require('mongoose');

var movie = require('./model/movies');

var path = require('path');

var underscore = require('underscore');

var bodyParser =require('body-parser');


var port = 2000;

var app = express();

app.use(bodyParser.urlencoded());

mongoose.connect('mongodb://localhost/imooc');

app.set('views','./views/pages/');

app.set('views engine','jade');

app.use(express.static(path.join(__dirname,'bower_components')));

app.listen(port);

console.log('server started on port'+port);

app.get('/',function(req,res){
    movie.findAll(function(err,movies){
        if(err){
            console.log(err)
        }
        res.render('index.jade',{
            title:'首页',
            movies:movies
        })
    });
});


app.get('/list',function(req,res){
    res.render('list',{
        title:'列表也'
    })
});

app.get('/movie/:id',function(req,res){
    var id = req.params.id;
    res.render('detail',{
        title:'详情页'
    })
});

app.get('/admin',function(req,res){

    console.log(req.body.movie)
    var _id = req.body.movie._id;
    var movie_obj = req.body.movie;
    var _movie = null;
    if(_id!==undefined){
        movie.findById(_id,function(err,movie){
            _movie = underscore.extend(movie,movie_obj);
            _movie.save(function(err,movie){
                if(err){

                }else {
                    console.log(movie)
                }
                res.redirect('/movie/'+movie._id);
            })
        })
    }else {
        _movie = new movie({
            doctor: movie_obj.doctor,
            title: movie_obj.title,
            country: movie_obj.country,
            language: movie_obj.language,
            year: movie_obj.year,
            poster: movie_obj.poster,
            summary: movie_obj.summary,
            flash: movie_obj.flash
        })
        _movie.save(function(err,movie){
            if(err){

            }else {
                console.log(movie)
            }

            res.redirect('/movie/'+movie._id)
        })
    }
    res.render('admin',{
        title:'后台页面',

    })
});



