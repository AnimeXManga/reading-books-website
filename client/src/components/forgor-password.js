import React from "react";


export default class ForgotPassword extends React.Component {
  reset() {
    alert("Password is sent to your email");
  }

  render() {
    return (
      <>
        <h2>Write your email</h2>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required="required"
          />
        </div>
        <button className="btn btn-primary" onClick={this.reset.bind(this)}>
          Reset Password
        </button>
      </>
    );
  }
}
