import React, { Component } from "react";

import "./ToastMessage.styles.css";

class ToastMessage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { showMessage: false };
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ showMessage: false });
  //     // var toastMessage = document.getElementById("toast-message");
  //     // toastMessage.style.display = "none";
  //   }, 10000);
  // }

  // componentDidMount() {
  //   var toastMessage = document.getElementById("toast-message");
  //   toastMessage.style.display = "none";

  //   if (!this.props.isImageUrl) {
  //     toastMessage.style.display = "block";
  //   }

  //   console.log("this.props:", this.props);
  // }

  componentDidUpdate(prevProps) {
    console.log("ToastMessage PrevProps:", prevProps);
    console.log("ToastMessage Props:", this.props);

    if (this.props.imageUrl !== prevProps.imageurl) {
      var toastMessage = document.getElementById("toast-message");
      toastMessage.style.display = "none";
      setTimeout(() => {
        toastMessage.style.display = "block";
      }, 500);
    }
  }

  render() {
    console.log("this.props.imageUrl", this.props.imageUrl);

    return (
      <div
        id="toast-message"
        className="fade-in-out"
        style={{ display: this.props.imageUrl ? "block" : "none" }}
      >
        <h1 className="error-message">{this.props.children}</h1>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div
  //       id="toast-message"
  //       className="fade-in-out"
  //       style={{ display: this.state.showMessage ? "block" : "none" }}
  //     >
  //       <h1 className="error-message">{this.props.children}</h1>
  //     </div>
  //   );
  // }
}

// const ToastMessage = ({ children }) => {
//   return (
//     <div className="fade-in-out">
//       <h1 className="error-message">{children}</h1>
//     </div>
//   );
// };

export default ToastMessage;
