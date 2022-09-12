import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: {
      userName: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // backend services
    console.log("Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("userName", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("login")}
      </form>
    );
  }
}

export default LoginForm;
