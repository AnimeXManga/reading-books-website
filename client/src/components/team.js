import React, { Component } from "react";
import Img1 from "../asset/img/thuy.png";
import Img2 from "../asset/img/duc.png";
import { Button } from "antd";

export default class team extends Component {
  render() {
    return (
      <>
        <section className="bg-light page-section" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  Our Amazing Team
                </h2>
                <h3 className="section-subheading text-muted">
                  A small group of only two members.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={Img1} alt="" />
                  <h4>Nguyễn Phương Thùy</h4>
                  <p className="text-muted">Lead Designer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <Button href="https://twitter.com/AnimeXManga__">
                        <i className="bi bi-twitter"></i>
                      </Button>
                    </li>
                    <li className="list-inline-item">
                      <Button href="https://www.facebook.com/gawashikumi9920/">
                        <i className="bi bi-facebook"></i>
                      </Button>
                    </li>
                    <li className="list-inline-item">
                      <Button href="https://www.instagram.com/thyfavailable/">
                        <i className="bi bi-instagram"></i>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={Img2} alt="" />

                  <h4>Huỳnh Phước Đức</h4>
                  <p className="text-muted">Lead Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <Button href="#something">
                        <i className="bi bi-twitter"></i>
                      </Button>
                    </li>
                    <li className="list-inline-item">
                      <Button href="https://www.facebook.com/duchuynh2801">
                        <i className="bi bi-facebook"></i>
                      </Button>
                    </li>
                    <li className="list-inline-item">
                      <Button href="#something">
                        <i className="bi bi-instagram"></i>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Studied at the university of information technology led by Mr.
                  Dung as a teacher.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
