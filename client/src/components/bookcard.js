import React, { Component } from "react";
import { Link } from "react-router-dom";

/* import { Redirect } from "react-router-dom";
import FetchApi from "../fetch-api"; */

export default class bookcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*  detail: [], */
    };
  }

  /* detailClick = (id) => {
    console.log(id);
    FetchApi(`sach/api-sach-detail/${id}/`, "GET").then((data) => {
      this.setState({
        detail: this.state.detail.concat(data),
      });
      return <Redirect to="/read" />;
    });
  }; */

  render() {
    const BookCard = this.props;

    return (
      <>
        {/*    <Popover content={content}> */}
        <div className="card-container">
          <div className="card">
            <div className="image-card">
              <img src={BookCard.image} alt="" />
            </div>
            <div className="details">
              <div className="center">
                <h1>{BookCard.title}</h1>
                <p>{BookCard.mota}</p>
              </div>
            </div>
          </div>
          <div className="desc">
            <h2
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {BookCard.title}
            </h2>
            <h3>Author: {BookCard.author} </h3>

            <Link
              to={{
                pathname: `/read/${BookCard.id}`,
                state: { foo: BookCard.id },
              }}
              className="btn btn-primary"
              /*  onClick={() => this.detailClick(BookCard.id)} */
            >
              Read Now!
            </Link>
            {/* <Read detail={detail} /> */}
          </div>
        </div>
        {/* </Popover> */}
      </>
    );
  }
}
