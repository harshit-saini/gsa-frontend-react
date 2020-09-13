import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ height: "200px" }}>
          <div className="col-12 col-md-8 offset-md-2 text-center">
            <h1>Welcome to Global Student Association</h1>
            <p>Please Navigate using nav bar</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 d-flex justify-content-between flex-wrap">
            <Link
              to="/student/new"
              className="btn btn-primary flex-grow-1 flex-md-fill m-1"
            >
              Add Student
            </Link>
            <Link
              to="/school/new"
              className="btn btn-primary flex-grow-1 flex-md-fill m-1"
            >
              Add School
            </Link>
            <Link
              to="/board/new"
              className="btn btn-primary flex-grow-1 flex-md-fill m-1"
            >
              Add Board
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
