import React, { Component } from "react";
import BookList from "../components/booklist";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { connect } from "react-redux";
import {
  getTypeBook,
  setBookState,
  getBookList,
} from "../redux/books/books.actions";
import removeVietnameseTones from "../utils/utils";

const mapStateToProps = (state) => ({
  books: state.books.bookList,
  typeList: state.books.typeList,
});

const mapDispatchToProps = {
  getTypeBook,
  setBookState,
  getBookList,
};

class Type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "",
    };
  }

  componentDidMount() {
    const query = window.location.pathname.split("/")[2].replaceAll("%20", " ");
    // eslint-disable-next-line array-callback-return
    this.props.typeList.map((item, index) => {
      if (removeVietnameseTones(item) === query) {
        this.props.setBookState({ currentPath: item });
        this.props.setBookState({ currentPath: item });
        if (index === 0) {
          this.props.getBookList();
        } else {
          this.props.getTypeBook(index);
        }
      }
    });
    return true;
  }

  render() {
    const { books } = this.props;

    return (
      <div className="container type ">
        <Navbar />
        <BookList books={books} />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Type);
