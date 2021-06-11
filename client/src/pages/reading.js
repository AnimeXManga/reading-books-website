import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button, Select } from "antd";
import React, { Component } from "react";
import {
  getChapterDetail,
  getBookChapter,
  setBookState,
} from "../redux/books/books.actions";
import { getCommentList } from "../redux/comments/comments.actions";
import { connect } from "react-redux";
import Comment from "../components/comments";
import _ from "lodash";
import { withRouter } from "react-router";

const { Option } = Select;

const mapStateToProps = (state) => ({
  chapterDetail: state.books.chapterDetail,
  bookDetail: state.books.bookDetail,
  chapterList: state.books.chapterList,
  isLogin: state.users.isLogin,
});

const mapDispatchToProps = {
  getChapterDetail,
  getBookChapter,
  setBookState,
  getCommentList,
};

class Reading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledStatus: "",
    };
  }

  componentDidMount() {
    const { chapterList } = this.props;
    const currentChapter = localStorage.getItem("currentChapter");

    if (_.isEmpty(chapterList)) {
      this.props.getBookChapter(this.props.match.params.id);
    }

    this.props.getChapterDetail(currentChapter).then((data) => {
      if (data.sochuong.split(" ")[1] === "1") {
        this.setState({ disabledStatus: "prev" });
      } else if (data.sochuong.split(" ")[1] === `${chapterList.length}`) {
        this.setState({ disabledStatus: "next" });
      }
    });
  }

  selectChapter = (id) => {
    const { chapterList } = this.props;
    localStorage.setItem("currentChapter", id);
    this.props.getChapterDetail(id).then((data) => {
      this.props.getCommentList(id);
      if (data.sochuong.split(" ")[1] === "1") {
        this.setState({ disabledStatus: "prev" });
      } else if (data.sochuong.split(" ")[1] === `${chapterList.length}`) {
        this.setState({ disabledStatus: "next" });
      } else {
        this.setState({ disabledStatus: "" });
      }
    });
  };

  changeChapter = (status, id) => {
    const { chapterList } = this.props;
    if (status === "prev") {
      this.props.getChapterDetail(id - 1).then((data) => {
        this.props.getCommentList(id - 1);
        localStorage.setItem("currentChapter", data.id);
        if (data.sochuong.split(" ")[1] === "1") {
          this.setState({ disabledStatus: status });
        } else {
          this.setState({ disabledStatus: "" });
        }
      });
    } else {
      this.props.getChapterDetail(id + 1).then((data) => {
        this.props.getCommentList(id + 1);
        localStorage.setItem("currentChapter", data.id);
        if (data.sochuong.split(" ")[1] === `${chapterList.length}`) {
          this.setState({ disabledStatus: status });
        } else {
          this.setState({ disabledStatus: "" });
        }
      });
    }
  };

  handleClick = () => {
    this.props.history.push("/login");
  };

  render() {
    const { chapterDetail, bookDetail, chapterList } = this.props;
    const { disabledStatus } = this.state;
    const isLogin = localStorage.getItem("isLogin");

    console.log(isLogin);

    if (chapterDetail && bookDetail) {
      return (
        <>
          <Navbar />
          <div className="container">
            <h3>{bookDetail.tieude}</h3>
            <p>Chương hiện tại : {chapterDetail.sochuong}</p>

            <div className="col-md-12">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className="form-group mt-3 ">
                    <div className="d-flex" id="selected">
                      <p className="mr-2">
                        <Button
                          className="btn btn-primary"
                          onClick={() =>
                            this.changeChapter("prev", chapterDetail.id)
                          }
                          disabled={disabledStatus === "prev"}
                        >
                          Tập Trước
                        </Button>
                      </p>
                      <Select
                        style={{ width: 120 }}
                        value={chapterDetail.sochuong}
                        onChange={(e) => this.selectChapter(e)}
                      >
                        {chapterList.map((item, index) => {
                          return (
                            <Option value={item.id} key={item.id}>
                              {item.sochuong}
                            </Option>
                          );
                        })}
                      </Select>
                      <p className="ml-2">
                        <Button
                          className="btn btn-primary"
                          disabled={disabledStatus === "next"}
                          onClick={() =>
                            this.changeChapter("next", chapterDetail.id)
                          }
                        >
                          Tập Sau
                        </Button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="noidungchuong">
                <p>{chapterDetail.noidung}</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="form-group mt-3 ">
                  <div className="d-flex " id="selected">
                    <p className="mr-2">
                      <Button
                        className="btn btn-primary"
                        onClick={() =>
                          this.changeChapter("prev", chapterDetail.id)
                        }
                        disabled={disabledStatus === "prev"}
                      >
                        Tập Trước
                      </Button>
                    </p>
                    <Select
                      style={{ width: 120 }}
                      value={chapterDetail.sochuong}
                      onChange={(e) => this.selectChapter(e)}
                    >
                      {chapterList.map((item, index) => {
                        return (
                          <Option value={item.id} key={item.id}>
                            {item.sochuong}
                          </Option>
                        );
                      })}
                    </Select>
                    <p className="ml-2">
                      <Button
                        className="btn btn-primary"
                        disabled={disabledStatus === "next"}
                        onClick={() =>
                          this.changeChapter("next", chapterDetail.id)
                        }
                      >
                        Tập Sau
                      </Button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {isLogin === "true" ? (
              <Comment id={chapterDetail.id} />
            ) : (
              <div>
                Bạn phải{" "}
                <b
                  onClick={() => {
                    this.handleClick();
                  }}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  đăng nhập
                </b>{" "}
                mới bình luận được
              </div>
            )}
          </div>

          <Footer />
        </>
      );
    } else return <></>;
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Reading)
);
