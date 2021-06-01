import React, { Component } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import BreadcrumbComponent from "./breadcrumb";
import { Link } from "react-router-dom";
import FetchApi from ".././fetch-api";
import BookList from "../components/booklist";
import Footer from "../components/footer";

const categoryList = ["Tất cả sách", "Light novel", "Tiểu thuyết", "Tài liệu"];
const typeList = [
  "Tất cả sách",
  "Võ hiệp",
  "Văn học hiện đại",
  "Ngôn tình",
  "Kinh tế",
  "Lịch sử",
  "Sách tham khảo",
  "Kinh dị",
  "Tình cảm",
  "Phiêu lưu",
  "Xuyên không",
  "Học đường",
];
const typeMore = ["About", "Contact"];

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      id: 0, 
    };
  }
 
  categoryClick = (id) => {
    console.log(id);
    FetchApi(`sach/sach-danhmuc/${id}/`, "GET").then((data) => {
      this.setState({
        detail: [].concat(data),
      });
    });
  };

  render() {
    const { isLogin, category } = this.props;
    const { detail } = this.state;

    console.log(isLogin);

    const menu = (
      <Menu>
        {categoryList.map((item, index) => {
          return (
            <Menu.Item key={index} onClick={() => this.categoryClick(index)}>
              <Link to={{ pathname: `/category/${item}` }}>
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
          const temp = "#" + item;
          return (
            <Menu.Item key={index}>
              <Link to={{ pathname: `/type/${item}` }}>
                <Button className="dropdown-item" href={temp} key={index}>
                  {item}
                </Button>
              </Link>
            </Menu.Item>
          );
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
                    href="/login"
                    className="btn btn-primary login-btn"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Login
                  </Button>
                </div>
                <div className="nav-item">
                  <Button
                    type="primary"
                    href="/signup"
                    className="btn ml-1 btn-primary sign-up-btn"
                  >
                    Sign up
                  </Button>
                </div>
                <div className="nav-item">
                  <Button
                    type="primary"
                    href="/profile/6"
                    className="btn ml-1 btn-primary sign-up-btn"
                  >
                    Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <BreadcrumbComponent />
        </div>
        <div className="container mt-5">
          <BookList books={detail}></BookList>
        </div>
      </>
    );
  }
}
export default Navbar;
