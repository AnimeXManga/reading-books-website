import React, { Component } from "react";
import Image from "../asset/img/wallpaper_login.png";
import { Button, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import ForgotPassword from "../components/forgor-password";
import { postLogin, getUserDetail } from "../redux/users/users.actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  message: state.users.message,
  isLogin: state.users.isLogin,
});

const mapDispatchToProps = {
  postLogin,
  getUserDetail,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
      checked: false,
      forgot: false,
    };
  }

  forgot() {
    this.setState({ forgot: true });
  }

  handleClick(e) {
    this.setState({ forgot: e });
    console.log(e);
  }

  handleChange(key, value) {
    let input = this.state.input;

    input[key] = value;
    this.setState({
      input,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.validate()) {
      const body = this.state.input;
      this.props.postLogin(body).then((data) => {
        const { message } = this.props;
        if (data.isLogin) {
          localStorage.setItem('isLogin', data.isLogin);
          localStorage.setItem('userId', data.res.id);
          notification.open({
            message: "Thông báo",
            description: message,
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
          });
          this.props.getUserDetail(data.res.id);
          this.props.history.push(`/`);
        } else {
          notification.open({
            message: "Thông báo",
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

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }
  render() {
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
                <div className="card-img-overlay">
                  <div className="card-header">
                    <p>Login</p>
                  </div>
                  <div className="card-body text-info">
                    {this.state.forgot === false && (
                      <form
                        className="Login"
                        onSubmit={this.handleSubmit}
                        method="post"
                      >
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
                          <input
                            type="submit"
                            className="btn btn-primary btn-block mt-4"
                            value="Login"
                          />
                           <div className="text-center mt-2">
                            <Button type="link" onClick={this.forgot.bind(this)}>Forgot Your password?</Button>
                          </div>
                          <div className="text-center mt-2">
                            <Button href="/signup" type="link">
                              Have an account yet?
                            </Button>
                          </div>
                          <div className="card-footer text-center mt-2">
                            <Button href="/" type="link">
                              BACK
                            </Button>
                          </div>
                        </div>
                      </form>
                    )}
                    {this.state.forgot === true && <ForgotPassword />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
