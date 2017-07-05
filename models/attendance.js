var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var attendanceSchema = new Schema({
  Date: {
    type: "date",
    unique: true
  },

  class: [{ type: Schema.Types.ObjectId, ref: "classModel"}],

  Student: [{type: Schema.Types.ObjectId, ref: "Student"}],

  present: Boolean,

  tardy: Boolean
});

var Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
