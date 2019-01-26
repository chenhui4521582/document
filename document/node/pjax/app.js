let express = require('express');

let pjax = require('express-pjax');

let route = require('./route/route.js');

let app = express();

app.listen(3000,function(){
    console.log('server start on port 3000')
});

app.use(pjax());

app.use(express.static(__dirname+'/static'));

app.set('views engine','ejs');

app.set('views','./views');


app.get('/',route.index);

app.get('/indexPjax',route.indexPjax);