import React from "react";
import Form from "../components/common/form";
import Joi from "joi";
import {
  getStudent,
  saveStudent,
  updateStudent,
} from "../services/studentServices";
import { getSchools } from "./../services/schoolService";

class AddStudent extends Form {
  state = {
    data: {
      name: "",
      email: "",
      schoolId: "",
    },
    allSchools: [],
    errors: {},
  };

  // **** joi schema
  schema = Joi.object().keys({
    name: Joi.string().required().min(3).max(16).label("Name"),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .label("Email"),
    schoolId: Joi.string().label("School"),
  });

  doSubmit = async () => {
    const id = this.props.match.params;
    console.log(id);
    if (id.id === "new") {
      await saveStudent(this.state.data);
    } else {
      console.log("else");
      await updateStudent(id.id, this.state.data);
    }
    this.props.history.push("/student");
  };

  async componentDidMount() {
    const { data: allschoolsdata } = await getSchools();
    const { result: allschoolsresult } = allschoolsdata;
    this.setState({ allSchools: allschoolsresult.data });
    if (this.props.match.params.id === "new") return;

    const { data } = await getStudent(this.props.match.params.id);
    const { result } = data;
    const obj = {
      name: result.data.name,
      email: result.data.email,
      schoolId: result.data.schoolId,
    };

    // console.log(allschoolsresult.data);

    this.setState({ data: obj });
  }

  render() {
    console.log(this.state);
    const options = this.state.allSchools;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 text-left">
            <form noValidate onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Name")}
              {this.renderInput("email", "Email")}
              {this.renderSelect("schoolId", "School", options)}
              {this.renderButton("Submit")}
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddStudent;
