import React, { Component } from "react";
import axios from "axios";
export default class contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      sent: false,
    };
  }
  //handle input
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handlePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  //end handleinput
  /* send contact */
  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message,
    };
    axios
      .post("/api/forma", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("Message not sent!");
      });
  };
  /* for reset this contact */
  resetForm = () => {
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <>
        <section
          className="page-section"
          id="contact"
          fragment="contact"
          onSubmit={this.formSubmit}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center content">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form
                  id="contactForm"
                  name="sentMessage"
                  noValidate="novalidate"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Your Name *"
                          required="required"
                          data-validation-required-message="Please enter your name."
                          value={this.state.name}
                          onChange={this.handleName}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder="Your Email *"
                          required="required"
                          data-validation-required-message="Please enter your email address."
                          value={this.state.email}
                          onChange={this.handleEmail}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="phone"
                          type="tel"
                          placeholder="Your Phone *"
                          required="required"
                          data-validation-required-message="Please enter your phone number."
                          value={this.state.phone}
                          onChange={this.handlePhone}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Your Message *"
                          required="required"
                          data-validation-required-message="Please enter a message."
                          value={this.state.message}
                          onChange={this.handleMessage}
                        ></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className={this.state.sent ? "msg msgAppear" : "msg"}>
                      Message has been sent
                    </div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
