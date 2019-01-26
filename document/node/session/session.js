let session = require('express-session');

let redisStore = require('connect-redis')(session);

var configuration = {
    cookie:{
        'maxAge':30*24*60*60*1000
    },
    redisStore:{
        host:'127.0.0.1',
        port:'6379',
        ttl:30*24*60*60*1000,
        logError:true

    }
}

function fn(app){
    app.use(session({
        name:'sid',
        secret:'this is my session fuck you all',
        cookie:configuration.cookie,
        store: new redisStore (configuration.redisStore),
        resave:false,
        saveUninitialized:false
    }))
}

module.exports = fn;
