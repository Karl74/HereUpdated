var express = require("express");
var attController = require("../controllers/attControllers");
var path = require("path");

var router = new express.Router();

  // | C | CREATE QUERIES ==========================================
router.post("/admin/addStudent", attController.addStudent);
router.post("/admin/addTeacher", attController.addTeacher);
router.post("/admin/addClass", attController.addClass);
router.post("admin/takeAttendance", attController.takeAttendance);
// | -R | READ QUERIES =============================================
router.get("/admin/students", attController.callroster);
router.get("/admin/teachers", attController.callTeachers);
router.get("/admin/callaclass", attController.callAClass);
router.get("/classesfor/:teacher", attController.callAClass);


// | N | NAVIGATION  +++++==========================================

//////////////For Add A Student Form//////////////////
router.get("/stuform", function(req, res){
  res.sendFile(path.join(__dirname, "../public/addStudent.html"));
});


//////////////////////For Add A Teacher Form/////////////
router.get("/teacherform", function(req, res){
  res.sendFile(path.join(__dirname, "../public/addTeacher.html"));
});


router.get("/formAClass", function(req, res){
  res.sendFile(path.join(__dirname, "../public/formAClass.html"));
});

router.get("/admin/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/adminWelcome.html"));
});

// router.get("/login", function(req, res) {
// res.sendFile(path.join(__dirname, "../public/login.html"));
//   });


router.get("/addStudent", function(req,res) {
  res.sendFile(path.join(__dirname, "../public/addStudent.html"));
});

router.get("/addClass", function(req,res) {
  res.sendFile(path.join(__dirname, "../public/addClass.html"));
});




// | T | TEMPORAL ROUTES MUST BE DESTROYED  +++++==========================================

router.get("/getmyclass", function(req, res) {
res.sendFile(path.join(__dirname, "../public/getMyClass.html"));
  });
module.exports = router;
