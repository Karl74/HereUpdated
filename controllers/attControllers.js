var Attendance = require("../models/attendance");
var ClassModel = require("../models/classmodel");
var Student = require("../models/student");
var Teacher = require("../models/teacherModel");


module.exports ={
  // | C | CREATE QUERIES ==========================================

  addStudent: function (req, res) {
    Student.create(req.body).then(function(doc){
      res.json(doc);}).catch(function(err){
        res.json(err);
      });
    },

    addTeacher: function (req, res){
      Teacher.create(req.body).then(function(doc){
        res.json(doc);}).catch(function(err){
          res.json(err);
        });
    },

  addClass: function(req, res) {
    ClassModel.create(req.body).then(function(doc){
      res.json(doc);}).catch(function(err){
        res.json(err);
      });
    },

  takeAttendance: function(req, res){
    Attendance.create(req.body).then(function(doc){
      res.json(doc);}).catch(function(err){
        res.json(err);
      });
    },


// | -R | READ QUERIES ==========================================
 callroster:function (req, res){
   Student.find({}, function(err, students){
     if(err){
       res.status(500).send(err)
     } else {
       res.send(students);
     }
   });
 },

callTeachers: function (req, res){
  Teacher.find({}, function(err, teachers){
    if(err){
      res.status(500).send(err)
    } else {
      res.send(teachers);
    }
  });
},


callAClass: function(req, res){
  var teacher = req.params.teacher;
  console.log(teacher);
  ClassModel.find({teacher:teacher}).
  populate("Teacher", "teachername").
  populate("Student", "firstName").
  exec(function(err, classModels){
    if(err) {
      res.status(500).send(err)
    }else {
      res.send(classModels);
    }
  });
}
    } //end of module exports
