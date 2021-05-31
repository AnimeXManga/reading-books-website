import React from "react";
import { Button } from "antd";

const footer = () => {
  return (
    <>
      <footer className="footer" style={{ backgroundcolor: "#e3f2fd" }}>
        <div className="row">
          <div className="col-md-12 py-5 d-flex justify-content-center">
            <div className="mb-2 pl-5">
              <Button
                type="link"
                className="fb-ic"
                id="icon"
                href="https://www.facebook.com/"
              >
                <i className="bi bi-facebook fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </Button>
              <Button
                type="link"
                className="tw-ic"
                id="icon"
                href="https://twitter.com/"
              >
                <i className="bi bi-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </Button>
              <Button
                type="link"
                className="mi-ic"
                id="icon"
                href="mailto: abc@example.com"
              >
                <i className="bi bi-envelope fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </Button>
              <Button
                type="link"
                className="li-ic"
                id="icon"
                href="https://www.linkedin.com/"
              >
                <i className="bi bi-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </Button>
              <Button
                type="link"
                className="ins-ic"
                id="icon"
                href="https://www.instagram.com/"
              >
                <i className="bi bi-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </Button>

              <Button
                type="link"
                className="phn-ic"
                id="icon"
                href="tel:0941418110"
              >
                <i className="bi bi-telephone-forward fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </Button>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <Button type="link" href="http://localhost:3000/">
            {" "}
            ReadingBook.com
          </Button>
        </div>
      </footer>
    </>
  );
};

export default footer;
