import React, { Component } from "react";
import Navbar from "../components/navbar";
import { getUserDetail } from "../redux/users/users.actions";
import Footer from "../components/footer";
import { connect } from "react-redux";
import { Card, Button } from "antd";
import Img from "../asset/img/loading.gif";
import { Link } from "react-router-dom";
import _ from "lodash";

const mapStateToProps = (state) => ({
  userDetail: state.users.userDetail,
});

const mapDispatchToProps = {
  getUserDetail,
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
    };
  }
  componentDidMount() {
    const { userDetail } = this.props;

    const id = localStorage.getItem("userId");
    if (_.isEmpty(userDetail)) {
      this.props.getUserDetail(id);
    }
  }

  render() {
    const { userDetail } = this.props;

    if (userDetail) {
      return (
        <div>
          <Navbar />
          <div className="container" id="profile">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={Img} />}
            >
              <div>Username: {userDetail.username}</div>
              <div>Email: {userDetail.email}</div>
              <Link to="/">
                <Button id="button-profile">Back</Button>
              </Link>
            </Card>
          </div>

          <Footer />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
