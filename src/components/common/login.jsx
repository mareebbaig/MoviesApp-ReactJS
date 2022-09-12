import React from "react";

const Login = ({ name, label, error, ...rest }) => {
  return (
    <div className='m-3'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <input {...rest} name={name} id={name} className='form-control' />
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}
    </div>
  );
};

export default Login;
