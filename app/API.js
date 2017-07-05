import axios from "axios";

const API = {
  getStudents: function() {
    return axios.get("/api/admin/students");
  }
};

export default API;
