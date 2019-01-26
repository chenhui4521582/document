/*var pet = {
    word:'....',
    speak:function(){
        console.log(this.word)
    }
};

pet.speak()*/


//var pet ={
//    word:'....',
//    speak:function(say){
//        console.log(say+':'+this.word);
//    }
//};
//
//var Dog = {
//    'word':'wang'
//};
//
//pet.speak.call(Dog,'speak');


var pet = function(s){
    this.word = s;
    this.speak = function(b){
        console.log(b+':'+this.word);
    }
};



var dog = function(){
    pet.call(this,'wang')
};


var Dog = new dog();
var Dog = new dog();
console.log(Dog);
//Dog.speak('speak');

