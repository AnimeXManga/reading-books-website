import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button, Image } from "antd";
import React, { Component } from "react";
import Chuongs from "../components/chuongs";

import {
  getBookDetail,
  setBookState,
  getBookChapter,
} from "../redux/books/books.actions";
import { connect } from "react-redux";

import SameCategory from "../components/sameCategory";

const mapStateToProps = (state) => ({
  detail: state.books.bookDetail,
  categoryList: state.books.categoryList,
  typeList: state.books.typeList,
});

const mapDispatchToProps = {
  getBookDetail,
  setBookState,
  getBookChapter,
};

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getBookDetail(id);
    this.props.getBookChapter(id);
  }

  render() {
    const { detail, categoryList, typeList } = this.props;

    if (detail) {
      const temp = "http://127.0.0.1:8000" + detail.hinh;

      return (
        <>
          <Navbar />
          <div className="container">
            <div className="col-md-9">
              <h4 className="doctruyen" id="doctruyen">
                Đọc truyện{" "}
              </h4>
              <div className="row">
                <div className="col-md-5" style={{ padding: "0 0 0 30px" }}>
                  <Image width={200} src={temp} />
                </div>

                <div className="col-md-7">
                  <ul className="infotruyen" style={{ padding: "0" }}>
                    <div
                      className="fb-share-button fb_iframe_widget"
                      data-href=""
                      data-layout="button_count"
                      data-size="large"
                      fb-xfbml-state="rendered"
                      fb-iframe-plugin-query=""
                    ></div>
                    <li>Tên truyện : {detail.tieude} </li>
                    <br />
                    <li>Tác giả :{detail.tacgia}</li>
                    <li>
                      Danh mục truyện : {categoryList[detail.danhmuc]}
                      <Button href="/"></Button>
                    </li>
                    <li>
                      Thể loại truyện : {typeList[detail.theloai]}
                      <Button href="/"></Button>
                    </li>
                    <li>
                      <Button
                        href="#mucluctruyen"
                        className="btn btn-primary btn-sm btn-outline-info"
                        id="xemmucluc"
                      >
                        Xem mục lục
                      </Button>
                    </li>
                    <li>
                      {/* <Link to={{ pathname: `/reading/${detail[0].id}` }}>
                        <Button href="/reading" className="btn btn-primary">
                          Đọc Online
                        </Button>
                      </Link> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 tomtat-truyen">
                <p>{detail.mota}</p>
              </div>
              <h4 className="mucluctruyen" id="mucluctruyen">
                Danh sách chương{" "}
              </h4>
              <Chuongs id={detail.id} />
              <h4>Sách cùng danh mục</h4>
              <SameCategory id={detail.danhmuc} />
            </div>
          </div>

          <Footer />
        </>
      );
    } else return <></>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Read);
