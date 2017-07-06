var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var attendanceSchema = new Schema({
  Date: {
    type: Date,
    default: Date.now
  },

  classId: { type: Schema.Types.ObjectId, ref: "classModel"},

  group: [{Student: {type: Schema.Types.ObjectId, ref: "Student"}, present: Boolean, tardy: Boolean}],

});

var Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
