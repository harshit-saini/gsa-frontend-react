import React from "react";
import Form from "../components/common/form";
import Joi from "joi";
import { getBoard, saveBoard } from "../services/boardServices";
import { updateBoard } from "./../services/boardServices";

class AddBoard extends Form {
  state = {
    data: {
      name: "",
      code: "",
    },
    errors: {},
  };

  // **** joi schema for Board
  schema = Joi.object().keys({
    name: Joi.string().required().label("Board Name"),
    code: Joi.string().length(6).required().label("Board Code"),
  });

  doSubmit = async () => {
    const id = this.props.match.params;
    if (id.id === "new") {
      await saveBoard(this.state.data);
    } else {
      await updateBoard(id.id, this.state.data);
    }
    this.props.history.push("/board");
  };

  async componentDidMount() {
    console.log("new");
    if (this.props.match.params.id === "new") return;

    console.log("no old");

    const { data } = await getBoard(this.props.match.params.id);
    const { result } = data;
    // console.log(result.data);
    const obj = {
      name: result.data.name,
      code: result.data.code,
    };

    this.setState({ data: obj });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 text-left">
            <form noValidate onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Board Name")}
              {this.renderInput("code", "Board Code")}
              {this.renderButton("Submit")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddBoard;
