import React, { Component } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import BreadcrumbComponent from "./breadcrumb";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  getCategoryBook,
  setBookState,
  getTypeBook,
  getBookList,
} from "../redux/books/books.actions";
import { setUserState } from "../redux/users/users.actions";
import removeVietnameseTones from "../utils/utils";

const mapStateToProps = (state) => ({
  books: state.books.bookList,
  storingBooks: state.books.storingBookList,
  categoryList: state.books.categoryList,
  typeList: state.books.typeList,
  typeMore: state.books.typeMore,
  isLogin: state.users.isLogin,
  id: state.users.id,
});

const mapDispatchToProps = {
  getCategoryBook,
  getTypeBook,
  setBookState,
  getBookList,
  setUserState,
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };
  }

  categoryClick = (id, item) => {
    this.props.setBookState({ currentPath: item });
    if (id === 0) {
      this.props.getBookList();
    } else {
      this.props.getCategoryBook(id);
    }
  };

  typeClick = (id, item) => {
    this.props.setBookState({ currentPath: item });
    if (id === 0) {
      this.props.getBookList();
    } else {
      this.props.getTypeBook(id);
    }
  };

  redirectToProfile = () => {
    console.log(this.props);
    this.props.history.push("/profile");
  };

  handleClick = (key) => {

    if (key==="false"){

      this.props.history.push("/login");
    } else {
      this.props.history.push("/");
      localStorage.setItem("isLogin", false);
      this.props.setUserState({ isLogin: false });
    }
  };

  render() {
    const { categoryList, typeList, typeMore } = this.props;
    const location = window.location.pathname.split("/")[1];
    const isLogin = localStorage.getItem("isLogin");
console.log(isLogin)
    const menu = (
      <Menu>
        {categoryList.map((item, index) => {
          return (
            <Menu.Item
              key={index}
              onClick={() => this.categoryClick(index, item)}
            >
              <Link
                to={{ pathname: `/category/${removeVietnameseTones(item)}` }}
              >
                <Button className="dropdown-item" href="#" key={index}>
                  {item}
                </Button>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    );

    const menu2 = (
      <Menu>
        {typeList.map((item, index) => {
          if (!(item === "null")) {
            const temp = "#" + item;
            return (
              <Menu.Item
                key={index}
                onClick={() => this.typeClick(index, item)}
              >
                <Link to={{ pathname: `/type/${removeVietnameseTones(item)}` }}>
                  <Button className="dropdown-item" href={temp} key={index}>
                    {item}
                  </Button>
                </Link>
              </Menu.Item>
            );
          }
          // return true;
        })}
      </Menu>
    );

    const menu3 = () => (
      <Menu>
        {typeMore.map((item, index) => {
          return (
            <Menu.Item key={index}>
              <Button className="dropdown-item" key={index}>
                {item}
              </Button>
            </Menu.Item>
          );
        })}
      </Menu>
    );

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Button type="link" className="navbar-brand" href="/">
              <i className="bi bi-book p-1"></i>Book {this.props.datafromLogin}
            </Button>
            <Button
              className="navbar-toggler"
              type="link"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <Button
                    type="link"
                    className="nav-link"
                    href="/"
                    role="button"
                  >
                    Trang chủ <span className="sr-only">(current)</span>
                  </Button>
                </li>

                <li className="nav-item dropdown">
                  <Dropdown overlay={menu}>
                    <Button type="link" className="ant-dropdown-link nav-link">
                      Danh mục <DownOutlined />
                    </Button>
                  </Dropdown>
                </li>
                <li className="nav-item dropdown ">
                  <Dropdown overlay={menu2}>
                    <Button type="link" className="ant-dropdown-link nav-link">
                      Thể loại <DownOutlined />
                    </Button>
                  </Dropdown>
                </li>
                <li className="nav-item dropdown ">
                  <Link to="/more">
                    <Dropdown overlay={menu3}>
                      <Button
                        type="link"
                        className="ant-dropdown-link nav-link"
                      >
                        Thêm <DownOutlined />
                      </Button>
                    </Dropdown>
                  </Link>
                </li>
              </ul>

              <div className="navbar-nav ml-2 action-buttons">
                <div className="nav-item ">
                  <Button
                    type="primary"
                    onClick={() =>
                      this.handleClick(isLogin)
                    }
                    className="btn btn-primary login-btn"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {isLogin === 'true' ? "Logout" : "Login"}
                  </Button>
                </div>

                {isLogin === 'true' ? (
                  <div className="nav-item">
                    <Button
                      type="primary"
                      onClick={() => {
                        this.redirectToProfile();
                      }}
                      className="btn ml-1 btn-primary sign-up-btn"
                    >
                      Profile
                    </Button>
                  </div>
                ) : (
                  <div className="nav-item">
                    <Button
                      type="primary"
                      href="/signup"
                      className="btn ml-1 btn-primary sign-up-btn"
                    >
                      Sign up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="container">
          {location === "reading" || location === "read" ? (
            <></>
          ) : (
            <BreadcrumbComponent />
          )}
        </div>
      </>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
