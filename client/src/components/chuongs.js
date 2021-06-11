import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setBookState } from "../redux/books/books.actions";

const mapStateToProps = (state) => ({
  chapterList: state.books.chapterList,
});

const mapDispatchToProps = {
  setBookState,
};

class Chuongs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  currentChapter(id) {
    this.props.setBookState({ currentChapter: id });
    localStorage.setItem("currentChapter", id);
  }

  render() {
    const { chapterList } = this.props;

    if (chapterList) {
      return (
        <>
          {chapterList.map((chapter, index) => {
            return (
              <Button type="link" className="d-flex" key={index}>
                <Link
                  to={{
                    pathname: `/read/${chapter.tieude}/reading`,
                    state: { currentChapter: chapter.id },
                  }}
                  onClick={() => this.currentChapter(chapter.id)}
                >
                  {chapter.sochuong}
                </Link>
              </Button>
            );
          })}
        </>
      );
    } else return <></>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chuongs);
