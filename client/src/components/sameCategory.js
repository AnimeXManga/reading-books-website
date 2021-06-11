/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { getCategoryBook } from "../redux/books/books.actions";
import BookList from "./booklist";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  books: state.books.bookList,
});
const mapDispatchToProps = {
  getCategoryBook,
};
class SameCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { id } = this.props;
    this.props.getCategoryBook(id);
  }
  render() {
    const { books } = this.props;
    
    if (books) {
      return (
        <>
        
          <BookList books={books.slice(0,3)} />
        </>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SameCategory);
