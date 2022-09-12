import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
class MovieForm extends Form {
  columns = [
    { title: "Title", path: "Title" },
    { title: "Genre", path: "Genre" },
    { title: "Stock", path: "Stock" },
    { title: "Rate", path: "Rate" },
  ];
  state = {
    data: {
      Title: "",
      Genre: "",
      Stock: "",
      Rate: "",
    },
    errors: {},
  };

  schema = {
    Title: Joi.string().required(),
    Genre: Joi.string(),
    Stock: Joi.number().integer().min(1).max(100).required(),
    Rate: Joi.number().integer().min(0).max(10).required(),
  };

  doSubmit() {
    console.log(this.state.data);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput(this.columns[0].title, "Title")}
        <div className='m-3'>
          <label htmlFor={"Genre"} className='form-label'>
            {"Genre"}
          </label>
          <select
            name='Genre'
            label='Genre'
            className='form-select'
            aria-label='Default select example'
            onChange={this.handleChange}>
            <option selected>Open this select menu</option>
            <option value='areeb'>One</option>
            <option value='hassan'>Two</option>
            <option value='hunain'>Three</option>
          </select>
        </div>
        {this.renderInput(this.columns[2].title, "Stock")}
        {this.renderInput(this.columns[3].title, "Rate")}
        {this.renderButton("Add movie")}
      </form>
    );
  }
}

export default MovieForm;
