import React, { Component } from "react";
import TableHeader from "./../components/tableHeader";
import TableBody from "../components/tableBody";
import { Link } from "react-router-dom";
import http from "../services/httpService";
import { deleteStudent } from "../services/studentServices";

const apiBaseURL = process.env.REACT_APP_API_URL;

class Board extends Component {
  state = {
    allstudents: [],
  };

  columns = [
    {
      path: "name",
      label: "Name",
      content: (student) => (
        <Link to={`/student/${student._id}`}>{student.name}</Link>
      ),
    },
    { path: "email", label: "Email" },
    { path: "schoolName", label: "School" },
    {
      key: "delete",
      content: (student) => (
        <button
          onClick={() => this.handleDelete(student)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  handleDelete = async (student) => {
    const original = this.state.allstudents;
    const allstudents = original.filter((m) => m._id !== student._id);
    this.setState({ allstudents });

    try {
      await deleteStudent(student._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        // toast.error("This movie has already been deleted.");

        this.setState({ allstudents: original });
    }
  };

  async componentDidMount() {
    const { data } = await http.get(`${apiBaseURL}/student`);
    const { result } = data;

    this.setState({ allstudents: result.data });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <table className="table table-striped table-bordered">
              <TableHeader columns={this.columns} />
              <TableBody data={this.state.allstudents} columns={this.columns} />
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
