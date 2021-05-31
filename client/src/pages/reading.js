import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FetchApi from "../fetch-api";
import { Button, Image } from "antd";
import React, { Component } from "react";

export default class Reading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      books: [],
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    FetchApi(`sach/api-chuong-detail/${id}/`, "GET").then((data) => {
      this.setState({
        detail: this.state.detail.concat(data),
      });
   
    });
    const key = this.props.location.aboutProps;
    FetchApi(`sach/api-sach-detail/${key}/`, "GET").then((data) => {
      this.setState({
        books: this.state.books.concat(data),
      });
      console.log(this.state.books);
    });
  }
  render() {
    const { detail } = this.state;
    const { id } = this.props.match.params;
    const {books} = this.state;
    
    if (detail[0] && books[0]) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h3>{books[0].tieude}</h3>
          <p>Chương hiện tại : {detail[0].sochuong}</p>

          <div className="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="form-group mt-3 ">
                  <div className="d-flex">
                    {/* <p className="mr-2">
                      <Button className="btn btn-primary isDisabled" href="/">
                        Tập Trước
                      </Button>
                    </p>
                    <select
                      name="select-chapter"
                      className="custom-select select-chapter"
                    >
                      <option value="#" selected="selected">
                        Chương 1 Bên trong căn cứ
                      </option>
                      <option value="#">Chương 2 Nemo</option>
                      <option value="#">Chương 3 Anna la lên một tiếng</option>
                    </select> 
                    <p className="ml-2">
                    
                      <Button className="btn btn-primary" href="/">
                        Tập Sau
                      </Button>
                    
                    </p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="noidungchuong">
              <p>
                {detail[0].noidung}
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="form-group mt-3 ">
                  <div className="d-flex">
                   {/*  <p className="mr-2">
                      <Button className="btn btn-primary isDisabled" href="/">
                        Tập Trước
                      </Button>
                    </p>
                    <select
                      name="select-chapter"
                      className="custom-select select-chapter"
                    >
                      <option value="#" selected="selected">
                        Chương 1 Bên trong căn cứ
                      </option>
                      <option value="#">Chương 2 Nemo</option>
                      <option value="#">Chương 3 Anna la lên một tiếng</option>
                      <option value="#">Chương 4 : Má nó</option>
                    </select>
                    <p className="ml-2">
                      <Button className="btn btn-primary" href="/">
                        Tập Sau
                      </Button>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
    } else return <></>
  }
}
