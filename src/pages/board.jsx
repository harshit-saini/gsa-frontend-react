import React, { Component } from "react";
import TableHeader from "./../components/tableHeader";
import TableBody from "../components/tableBody";
import { Link } from "react-router-dom";
import { getBoards, deleteBoard } from "../services/boardServices";

class Board extends Component {
  state = {
    allBoards: [],
  };

  columns = [
    {
      path: "name",
      label: "Name",
      content: (board) => <Link to={`/board/${board._id}`}>{board.name}</Link>,
    },
    { path: "code", label: "Code" },
    {
      key: "delete",
      content: (board) => (
        <button
          onClick={() => this.handleDelete(board)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  handleDelete = async (board) => {
    const original = this.state.allBoards;
    const allBoards = original.filter((m) => m._id !== board._id);
    this.setState({ allBoards });

    try {
      await deleteBoard(board._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        // toast.error("This movie has already been deleted.");

        this.setState({ movies: original });
    }
  };

  async componentDidMount() {
    const { data } = await getBoards();
    const { result } = data;

    this.setState({ allBoards: result.data });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <table className="table table-striped table-bordered">
              <TableHeader columns={this.columns} />
              <TableBody data={this.state.allBoards} columns={this.columns} />
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Board;
