import React, { Component } from "react";
import TableHeader from "./../components/tableHeader";
import TableBody from "../components/tableBody";
import { Link } from "react-router-dom";
import http from "../services/httpService";
import { deleteSchool } from "../services/schoolService";

const apiBaseURL = process.env.REACT_APP_API_URL;

class Board extends Component {
  state = {
    allSchools: [],
  };

  columns = [
    {
      path: "schoolName",
      label: "School Name",
      content: (school) => (
        <Link to={`/school/${school._id}`}>{school.schoolName}</Link>
      ),
    },
    { path: "location", label: "Location" },
    { path: "code", label: "Code" },
    { path: "board", label: "Board" },
    {
      key: "delete",
      content: (school) => (
        <button
          onClick={() => this.handleDelete(school)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  handleDelete = async (school) => {
    const original = this.state.allSchools;
    const allSchools = original.filter((m) => m._id !== school._id);
    this.setState({ allSchools });

    try {
      await deleteSchool(school._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        // toast.error("This movie has already been deleted.");

        this.setState({ allSchools: original });
    }
  };
  async componentDidMount() {
    const { data } = await http.get(`${apiBaseURL}/school`);
    const { result } = data;

    this.setState({ allSchools: result.data });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <table className="table table-striped table-bordered">
              <TableHeader columns={this.columns} />
              <TableBody data={this.state.allSchools} columns={this.columns} />
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
