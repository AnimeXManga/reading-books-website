import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "../asset/img/wallpaper_login.png";
import { Button, Checkbox, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import Popup from "../components/popup";
import { postRegister } from "../redux/users/users.actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  message: state.users.message,
});

const mapDispatchToProps = {
  postRegister,
};

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      isAgree: false,
      input: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      errors: {},
      checked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  onAgreeChange = (e) => {
    const { isAgree } = this.state;
    if (isAgree !== e.target.checked) {
      this.setState({ isAgree: e.target.checked });
    }
  };

  handleChange(key, value) {
    let input = this.state.input;

    input[key] = value;
    this.setState({
      input,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.validate());
    if (this.validate()) {
      const body = this.state.input;
      this.props.postRegister(body).then((data) => {
        const { message } = this.props;
        if (data) {
          notification.open({
            message: "Thành công",
            description: message,
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
          });
          this.props.history.push("/login");
        } else {
          notification.open({
            message: "Thất bại",
            description: message,
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
          });
        }
      });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (input["password"].length < 6) {
      isValid = false;
      errors["password"] = "Password must be more longer than 6.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (
      typeof input["password"] !== "undefined" &&
      typeof input["confirm_password"] !== "undefined"
    ) {
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    const { isAgree } = this.state;

    return (
      <>
        <div className="login">
          <div className="container">
            <div className=" row justify-content-center">
              <div
                className="card card-login border-info mb-5 mt-5"
                style={{ maxwidth: "18rem" }}
              >
                <img className="card-img" src={Image} alt="Card" />
                <div className="card-img-overlay" style={{ gridGap: "0px" }}>
                  <div className="card-header">
                    <p>Sign Up</p>
                  </div>
                  <div className="card-body text-info">
                    <form
                      className="Sign Up"
                      onSubmit={this.handleSubmit}
                      method="post"
                    >
                      <p className="hint-text">
                        Fill in this form to create your account!
                      </p>
                      <div className="form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          required="required"
                          value={this.state.input.username}
                          onChange={(event) =>
                            this.handleChange("username", event.target.value)
                          }
                          className="form-control"
                          id="username"
                        ></input>
                        <div className="text-danger">
                          {this.state.errors.username}
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          value={this.state.input.email}
                          onChange={(event) =>
                            this.handleChange("email", event.target.value)
                          }
                          className="form-control"
                          placeholder="Enter email"
                          id="email"
                          required
                        ></input>
                        <div className="text-danger">
                          {this.state.errors.email}
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          value={this.state.input.password}
                          onChange={(event) =>
                            this.handleChange("password", event.target.value)
                          }
                          className="form-control"
                          placeholder="Enter password"
                          id="password"
                        />
                        <div className="text-danger">
                          {this.state.errors.password}
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="confirm_password"
                          value={this.state.input.confirm_password}
                          onChange={(event) =>
                            this.handleChange(
                              "confirm_password",
                              event.target.value
                            )
                          }
                          className="form-control"
                          placeholder="Enter confirm password"
                          id="confirm_password"
                        />
                        <div className="text-danger">
                          {this.state.errors.confirm_password}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-check-label">
                          <Checkbox onChange={this.onAgreeChange}>
                            <span className="ml-2">I accept the </span>
                            <Button
                              style={{ padding: 0 }}
                              type="link"
                              data-toggle="modal"
                              data-target="#exampleModalScrollable"
                              onClick={this.togglePopup.bind(this)}
                            >
                              Terms &amp; Conditions
                            </Button>
                          </Checkbox>
                        </label>
                      </div>
                      <input
                        type="submit"
                        className="btn btn-primary btn-block "
                        value="Submit"
                        disabled={!isAgree}
                      />
                      <div className="text-center mt-2">
                        <p href="#">
                          Already have an account?{" "}
                          <Link to="/login">
                            <span>Login</span>
                          </Link>
                        </p>
                      </div>
                      <div className="card-footer text-center mt-3 ">
                        <Button href="/" type="link">
                          BACK
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.showPopup ? (
          <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
