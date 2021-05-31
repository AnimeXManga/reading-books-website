import React, { Component } from "react";
import Navbar from "../components/navbar";
import FetchApi from ".././fetch-api";
import BookList from "../components/booklist";
import Footer from '../components/footer'
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      danhmuc: "",
      key: {
        id: "Light novel",
      },
      key2: {
        id: "Tiểu thuyết",
      },
      key3: {
        id: "Tài liệu",
      },
    };
  }
  componentDidMount() {
    const danhmuc = this.state.danhmuc;
    console.log(danhmuc);
    FetchApi(`sach/sach-danhmuc/${danhmuc}/`, "GET").then((data) => {
      this.setState({
        detail: this.state.detail.concat(data),
      });
      
    }); 
  }

  render() {
    const { id } = this.props.match.params; 
    console.log(id);
    const key = this.state.key.id;
    const key2 = this.state.key2.id;
    const key3 = this.state.key3.id;
    const {detail} = this.state;
    if (id === key) {
      this.state.danhmuc = 1;
      this.state.id = "ti"
    }
    if (id === key2) {
      this.state.danhmuc = 2;
    }
    if (id === key3) {
      this.state.danhmuc = 3;
    }
    console.log(this.state.detail);
    return (
      <>
        <Navbar />
        <div className="container mt-5">
        <BookList books={detail}></BookList>
        <Footer/>
        </div>
        
      </>
    );
  }
}
