import React, { Component } from "react";
import BookCard from "./bookcard";
import { Row, Col } from "antd";
import _ from "lodash";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
    };
  }

  render() {
    const { books } = this.props;

    if (!_.isEmpty(books)) {
      return (
        <Row
          gutter={[16, 8]}
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {books.map((book, index) => {
            return (
              <Col key={index}>
                <BookCard
                  image={
                    book.hinh === undefined
                      ? ""
                      : `http://127.0.0.1:8000${book.hinh}`
                  }
                  title={book.tieude}
                  author={book.tacgia}
                  id={book.id}
                />
              </Col>
            );
          })}
        </Row>
      );
    } else {
      return <></>;
    }
  }
}
