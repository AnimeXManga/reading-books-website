import React, { Component } from "react";
import SearchArea from "./SearchArea";
import BookList from "./booklist";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { getBookList, setBookState } from "../redux/books/books.actions";

const mapStateToProps = (state) => ({
  books: state.books.bookList,
  storingBooks: state.books.storingBookList,
});

const mapDispatchToProps = {
  getBookList,
  setBookState,
};

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "",
    };
  }

  componentDidMount() {
    this.props.getBookList();
  }

  handleSearch = (e) => {
    const { storingBooks } = this.props;
    if (!e.target.value) {
      this.props.setBookState({ bookList: storingBooks });
    } else {
      const filterBooks = storingBooks.filter((item, index) => {
        return item.tieude.toLowerCase().includes(e.target.value.toLowerCase());
      });
      this.props.setBookState({ bookList: filterBooks });
    }
  };

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  };

  render() {
    const { books } = this.props;

    return (
      <div className="container type ">
        <Row justify="space-between" className="mt-2 mb-2">
          <Col span={3}>
            <p style={{ fontsize: "18px", margin: "0 0 0 0" }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Books);
