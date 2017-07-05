import React from "react";
import API from "../API";

export default class Teacher extends React.Component {
  constructor(){
    super();
    this.state = {
      roster:[],
      attendance:[]
    }
    this.getStudents = this.getStudents.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    // this.setAttendance = this.setAttendance.bind(this);


  }

  componentDidMount(){
    this.getStudents()
  } //end of componentDidMount

  getStudeslnts(){
    let _this = this;
    API.getStudents().then((res) => {
      const students = res.data;
      this.setState({roster:students});
      console.log("this is roster");
      console.log(this.state.roster);
      _this.setAttendance()
    });
  }

  showStudents(){
    return this.state.roster.map((student, index) => {
      return (
        <tr  key={student._id}>
          <td> {student._id} </td>
          <td> {student.firstName}</td>
          <td><button id={index} onClick={this.handleButtonClick} > ABSENT </button> </td>
          <td><button> late </button> </td>
        </tr>
      )
  })
  }

  setAttendance = () => {
      var defaultAttendace = [];
      let new_attendance = this.state.roster.map(student =>{
        defaultAttendace.push({
          firstName: student.firstName,
          _id: student._id,
          present: true,
          tardy: false
        })
      });  //  end of map

      this.setState({attendance: defaultAttendace},function(){
        console.log(this.state.attendance);
      });
      console.log("======================");
      console.log(this.state.attendance);
  }   // end of set attendance

    handleButtonClick(event){
        event.preventDefault();
        let index = event.target.id
        console.log(index);
        var absent = this.state.attendance[index];
        absent.present = false;
        console.log(this.state.attendance[index]);
        console.log(this.state.attendance);
        // this.setState({ attendance.present: absent});
        // console.log(this.state.attendance[1].present);

      }

  render(){
    return(
      <div>

        <h1>Attendance</h1>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
                <tr>
                  <th>#</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Present</th>
                  <th>Absent</th>
                  <th>Late</th>
                  <th> Days Absent </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                  <td>12</td>
                  <td>Anna</td>
                  <td>Pitt</td>
                  <td>
                    <div><input type="checkbox"/></div>
                  </td>
                  <td>
                    <div><input type="checkbox"/></div>
                  </td>
                  <td>
                    <div><input type="checkbox"/></div>
                  </td>
                  <td>5</td>
                </tr>


                  {this.showStudents()}


            </tbody>
          </table>
      </div>



      </div>
    )
  }
}
