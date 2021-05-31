import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Button, Image } from "antd";
import FetchApi from "../fetch-api";

import React, { Component } from "react";
import Chuongs from "../components/chuongs";
import Comments from "../components/comments";
import { Link } from "react-router-dom";
import { toNumber } from "lodash";

export default class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      books: [],
      danhmuc: "",
      theloai: "",
      name: "",
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(typeof(id))
    FetchApi(`sach/api-sach-detail/${id}/`, "GET").then((data) => {
      this.setState({
        detail: this.state.detail.concat(data),
      });
    });
    FetchApi(`sach/sach-danhmuc/${this.state.danhmuc}/`, "GET").then((data) => {
      this.setState({
        books: this.state.books.concat(data),
      });
    });
  }

  render() {
    const { detail } = this.state;
    const { id } = this.props.match.params;
    {
      detail.map((item) => {
        this.state.danhmuc = item.danhmuc.toString();
      });
    }

    console.log(this.state.books);
    if (detail[0]) {
      const temp = "http://127.0.0.1:8000" + detail[0].hinh;

      return (
        <>
          <Navbar />
          <div className="container">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-5">
                  <Image width={200} src={temp} />
                </div>

                <div className="col-md-7">
                  <ul className="infotruyen">
                    <div
                      className="fb-share-button fb_iframe_widget"
                      data-href=""
                      data-layout="button_count"
                      data-size="large"
                      fb-xfbml-state="rendered"
                      fb-iframe-plugin-query=""
                    >
                      <span
                        style={{
                          verticalalign: "bottom",
                          width: "98px",
                          height: "28px",
                        }}
                      >
                        <iframe
                          name="fb93d9a1b147f4"
                          width="1000px"
                          height="1000px"
                          data-testid="fb:share_button Facebook Social Plugin"
                          title="fb:share_button Facebook Social Plugin"
                          frameBorder="0"
                          allowtransparency="true"
                          allowFullScreen={true}
                          scrolling="no"
                          allow="encrypted-media"
                          src="https://web.facebook.com/v10.0/plugins/share_button.php?app_id=6125793717446054&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1f10d129117f3%26domain%3Dsachtruyen247.com%26origin%3Dhttps%253A%252F%252Fsachtruyen247.com%252Ff45ba6d0268128%26relation%3Dparent.parent&amp;container_width=469&amp;href=https%3A%2F%2Fsachtruyen247.com%2Fxem-truyen%2Ftho-san-va-sieu-trom&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;size=large"
                          style={{
                            border: "none",
                            visibility: "visible",
                            width: "98px",
                            height: "28px",
                          }}
                          className=""
                        ></iframe>
                      </span>
                    </div>
                    <li>Tên truyện : {detail[0].tieude} </li>
                    <li>Tác giả :{detail[0].tacgia}</li>
                    <li>
                      Danh mục truyện : {detail[0].danhmuc}
                      <Button href="/"></Button>
                    </li>
                    <li>
                      Thể loại truyện : {detail[0].theloai}
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
                <p>{detail[0].mota}</p>
              </div>
              <h4 className="mucluctruyen" id="mucluctruyen">
                Danh sách chương{" "}
              </h4>
              <Chuongs id={detail[0].id} />
              <h4>Sách cùng danh mục</h4>
             </div>
             </div>
             
          <Comments />
          <Footer />
        </>
      );
    } else return <></>;
  }
}
