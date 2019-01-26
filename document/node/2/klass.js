var student = require('./student');
var teacher = require('./teacher');

module.exports.add = function(teacherName,students){
    teacher.add(teacherName);
    for(var i in students){
        student.add(students[i])
    }
};
