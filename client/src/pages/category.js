import React, { Component } from "react";
import Navbar from "../components/navbar";
import FetchApi from ".././fetch-api";
import BookList from "../components/booklist";
import Footer from "../components/footer";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      danhmuc: 1,
    };
  }

  componentDidMount() {

    // const danhmuc = this.state.danhmuc;
    // FetchApi(`sach/sach-danhmuc/${danhmuc}/`, "GET").then((data) => {
    //   this.setState({
    //     detail: this.state.detail.concat(data),
    //   });
    // });
  }

  render() {
    const { detail, danhmuc } = this.state;

    return (
      <>
        <Navbar />
        <Footer />
      </>
    );
  }
}
