import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("username"),
    password: Joi.string().required().min(3).label("password"),
    name: Joi.string().required().label("name"),
  };

  doSubmit() {
    //backend service
    console.log("registered");
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username", "email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default Register;
