import React, { Component } from "react";
import Image from "../asset/img/wallpaper_login.png";
import { Button, notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import Navbar from "../components/navbar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
      checked: false,
      forgot: false,
      isLogin: false,
    };
  }
  forgot() {
    this.setState({ forgot: true });
  }
  handleClick (e) {
    this.setState({forgot: e});
    console.log(e);
  }
  handleChange(key, value) {
    let input = this.state.input;
    console.log(key, value);

    input[key] = value;
    this.setState({
      input,
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["username"] = "";
      input["password"] = "";
      this.setState({ input: input });

      this.state.checked = true;
    }
    if (this.state.checked === true) {
      const body = this.state.input;
      console.log(body);
      await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(async (response) => {
        if (response.status === 200) {
          const res = await response.json();
          console.log(res);
          if (res.message==="Đăng nhập thành công"){
          notification.open({
            message: "Thông báo",
            description: res.message,
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
          });
          this.state.isLogin=true;
          <Navbar isLogin={this.state.isLogin}/>
          window.location.href =  "/";
        } else {
          notification.open({
            message: "Thông báo",
            description: res.message,
            icon: <FrownOutlined style={{ color: "#108ee9" }} />,
          });
          this.state.isLogin=false;
        }
            
          
        } else {
          notification.open({
            message: "Thất bại",
            description: "Tên người dùng bị trùng",
            icon: <FrownOutlined style={{ color: "#108ee9" }} />,
          });
          this.state.isLogin=false;
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
    console.log(this.state.isLogin);
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
                         {/*  <div className="text-center mt-2">
                            <Button type="link" onClick={this.forgot.bind(this)}>Forgot Your password?</Button>
                          </div> */}
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
export default Login;
class ForgotPassword extends React.Component {
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
