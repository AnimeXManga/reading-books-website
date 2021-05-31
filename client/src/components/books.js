import React, { Component } from "react";
import SearchArea from "./SearchArea";
import BookList from "./booklist";
import FetchApi from "../fetch-api";
import {Row, Col } from "antd";



class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      totalBooks: [],
      searchField: "",
      sort: "",
    };
  }

  componentDidMount() {
    FetchApi("sach/api-sach-list/", "GET").then((data) => {
      this.setState({
        books: this.state.books.concat(data),
        totalBooks: this.state.totalBooks.concat(data),
      });
      /* console.log(data); */
    });
  }

  searchBook = (e) => {
    e.preventDefault();

    const { books, searchField } = this.state;

    const filterBooks = books.filter((item, index) => {
      return item.tieude.toLowerCase().includes(searchField.toLowerCase());
    });

    this.setState({ books: filterBooks });
    // .then(() => {
    //   this.setState({ books: JSON.stringify(filterBooks) });
    // });
  };

  handleSearch = (e) => {
    const { totalBooks } = this.state;
    this.setState({ books: totalBooks, searchField: e.target.value });
  };

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  };

  render() {
    const { books } = this.state;
   
    /*    console.log(books); */

    return (
      <div className="container type ">
        <Row justify="space-between" className="mt-2 mb-2">
          <Col span={3}>
          <p style={{ fontsize: "18px" ,margin:"0 0 0 0"}}>
            HOT <i className="bi bi-heart"></i>
          </p>
          </Col>
          <Col span={14}>
          <div className="ml-auto">
            <SearchArea
              searchBook={this.searchBook}
              handleSearch={this.handleSearch}
              handleSort={this.handleSort}
              searchField={this.state.searchField}
            />
          </div>
          </Col>
        
          
          </Row>
        <BookList books={books} />
      </div>
    );
  }
}

export default Books;
