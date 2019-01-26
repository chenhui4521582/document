var mongoose = require('mongoose');

var MoviesSchema = new mongoose.Schema({
    'title':String,
    'doctor':String,
    'country':String,
    'language':String,
    'poster':String,
    'flash':String,
    'summary':String,
    'year':Number,
    'meta':{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
});


MoviesSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else {
        this.meta.updateAt = Date.now()
    }

    next()
});

MoviesSchema.statics = {
    findAll:function(callback){
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(callback)
    },
    findById:function(id,callback){
        return this
            .findOne({_id:id})
            .sort('meta.updateAt')
            .exec(callback)
    }
};

module.exports = MoviesSchema;








