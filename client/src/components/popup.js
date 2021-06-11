import React, { Component } from "react";

export default class Popup extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalScrollable"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalScrollableTitle">
                Terms &amp; Conditions
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              Article 1 (Purpose) The purpose of the following Terms and
              Conditions of Use(‘T&amp;C’) is to establish guidelines on rights,
              duties and responsibilities of cybermall Users utilizing the
              internet-related services (hereinafter referred to as the
              ‘Services’) provided by the playcompany cybermall (hereinafter
              referred to as the ‘Mall’) operated by PLAYCOMPANY (e-commerce and
              the name of personal information manager on the main page of the
              ‘Mall’. Only the content of this T&amp;C can be displayed though a
              link page. ② Prior to User’s final agreement to this T&amp;C, the
              ‘Mall’ shall provide a separate link or pop-up screen to obtain
              User’s verification on the terms of cancellation rights, delivery
              responsibilities, refund conditions and other important details. ③
              The ‘Mall’ may make amendments within the permissible range
              without violating applicable laws such as the 「Act on Consumer
              Protection in Electronic Com and all e-commerce-related lawsuits
              between the ‘Mall’ and a User shall be governed by the law of the
              Republic of Viet Nam.
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.props.closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
