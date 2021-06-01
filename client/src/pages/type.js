import React, { Component } from "react";
import Navbar from "../components/navbar";
import FetchApi from ".././fetch-api";
import BookList from "../components/booklist";
import Footer from '../components/footer'
export default class type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      theloai: "",
      key14: {
        id: "Võ hiệp",
      },
      key13: {
        id: "Văn học hiện đại",
      },
      key12: {
        id: "Ngôn tình",
      },
      key10: {
        id: "Kinh tế",
      },
      key9: {
        id: "Lịch sử",
      },
      key8: {
        id: "Sách tham khảo",
      },
      key7: {
        id: "Kinh dị",
      },
      key6: {
        id: "Tình cảm",
      },
      key5: {
        id: "Phiêu lưu",
      },
      key3: {
        id: "Xuyên không",
      },
      key1: {
        id: "Học đường",
      },
    };
  }
  componentDidMount() {
    const theloai = this.state.theloai;
    console.log(theloai);
    FetchApi(`sach/sach-theloai/${theloai}/`, "GET").then((data) => {
      this.setState({
        detail: this.state.detail.concat(data),
      });
    });
  }
  render() {
    //gi day :))
    const { id } = this.props.match.params;
    console.log(id);
    const key1 = this.state.key1.id;
    const key14 = this.state.key14.id;
    const key3 = this.state.key3.id;
    const key13 = this.state.key13.id;
    const key5 = this.state.key5.id;
    const key6 = this.state.key6.id;
    const key7 = this.state.key7.id;
    const key8 = this.state.key8.id;
    const key9 = this.state.key9.id;
    const key10 = this.state.key10.id;
    const key12 = this.state.key12.id;

    const { detail } = this.state;
    if (id === key1) {
      this.state.theloai = 1;
    }
    if (id === key14) {
      this.state.theloai = 14;
    }
    if (id === key3) {
      this.state.theloai = 3;
    }
    if (id === key13) {
      this.state.theloai = 13;

    }
    if (id === key5) {
      this.state.theloai = 5;
    }
    if (id === key6) {
      this.state.theloai = 6;
    }
    if (id === key7) {
      this.state.theloai = 7;

    }
    if (id === key8) {
      this.state.theloai = 8;
    }
    if (id === key9) {
      this.state.theloai = 9;
    }
    if (id === key10) {
      this.state.theloai = 10;

    }
    if (id === key12) {
      this.state.theloai = 12;
    }

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
