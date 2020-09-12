import React from "react";
import Form from "../components/common/form";
import Joi from "joi";
import { getSchool, saveSchool, updateSchool } from "../services/schoolService";
import { getBoards } from "./../services/boardServices";

class AddStudent extends Form {
  state = {
    data: {
      schoolName: "",
      location: "",
      code: "",
      boardId: "",
    },
    allBoards: [],
    errors: {},
  };

  // **** joi schema
  schema = Joi.object().keys({
    schoolName: Joi.string().min(3).max(50).required().label("School Name"),
    location: Joi.string().required().label("Location"),
    code: Joi.string().min(6).max(6).required().label("Code"),
    boardId: Joi.string().required().label("Board"),
  });

  doSubmit = async () => {
    const id = this.props.match.params;
    if (id.id === "new") {
      await saveSchool(this.state.data);
    } else {
      await updateSchool(id.id, this.state.data);
    }
    this.props.history.push("/school");
  };

  async componentDidMount() {
    const { data: allboarddata } = await getBoards();
    const { result: allboardresult } = allboarddata;
    this.setState({ allBoards: allboardresult.data });
    if (this.props.match.params.id === "new") return;

    const { data } = await getSchool(this.props.match.params.id);
    const { result } = data;
    const obj = {
      schoolName: result.data.schoolName,
      location: result.data.location,
      code: result.data.code,
      boardId: result.data.boardId,
    };

    // console.log(allschoolsresult.data);

    this.setState({ data: obj });
  }

  render() {
    const options = this.state.allBoards;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 text-left">
            <form noValidate onSubmit={this.handleSubmit}>
              {this.renderInput("schoolName", "School Name")}
              {this.renderInput("location", "Location")}
              {this.renderInput("code", "Code")}
              {this.renderSelect("boardId", "Board", options)}
              {this.renderButton("Submit")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddStudent;
