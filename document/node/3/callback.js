/*
function  a (b){
    console.log(b)
}

function c (d){
    a(d)
}

c('5');*/

var a = 1;
function b (){
    console.log(a)
}

function  d(callback){
    a = 10;
    setTimeout(function(){
        a++;
        callback()
    },1000)

}

d(b);

//事件驱动  I/0


