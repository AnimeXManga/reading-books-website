import React, { Component } from "react";
import { Button } from "antd";
import FetchApi from "../fetch-api";
import {Link} from "react-router-dom"
export default class Chuongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: [],
      id: "",
    };
  }
  componentDidMount() {
    const { id } = this.props;
    FetchApi(`sach/chuong/${id}/`, "GET").then((data) => {
      this.setState({
        detail: this.state.detail.concat(data),
      });
    });
  }
  render() {
    const { detail } = this.state;
console.log(detail)

    if (detail) {
      return (
        <>
          {detail.map((chaper, index) => {
            return (
              <Button type="link" className="d-flex" key={index}>
                <Link to={{pathname: `/reading/${chaper.id}`,aboutProps:  `${chaper.tieude}` }}>
                {chaper.sochuong}
                </Link>
              </Button>
            );
          })}
        </>
      );
    } else return <></>;
  }
}
