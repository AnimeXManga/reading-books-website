import React, { Component } from "react";
import Navbar from "../components/navbar";
import FetchApi from "../fetch-api"
import Footer from '../components/footer'
export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id);
    FetchApi(`account/api-account-detail/${id}/`, "GET").then((data) => {
      this.setState({
        detail: this.state.detail.concat(data),
      });
    });
  }
  render() {
    const { detail } = this.state;
    console.log(detail);
    if(detail) {
    return <div>
      <Navbar/>
      <div className="container">
      <div className="ten"></div>
      </div>
      <Footer/>
    </div>;
  }}
}
