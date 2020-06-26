import React, { Component } from "react";
import "./FaceRecognition.styles.css";

class FaceRecognition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
    };
  }

  updatedUserEntries = () => {
    const { userId, setUserLogin } = this.props;

    fetch("http://localhost:5000/image", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        console.log("updatedUser", updatedUser);
        setUserLogin(updatedUser);
      });
  };

  componentDidMount() {
    const { imageUrl } = this.props;
    this.setState({ imageUrl });

    if (imageUrl) {
      this.updatedUserEntries();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.imageUrl !== prevProps.imageUrl) {
      this.updatedUserEntries();
    }
  }

  render() {
    const { imageUrl, box } = this.props;

    return (
      <div className="center ma">
        <div className="face-recognition absolute mt2">
          <img id="face-image" src={imageUrl} alt="face" />
          <div
            className="bounding-box"
            style={{
              left: box.left,
              top: box.top,
              right: box.right,
              bottom: box.bottom,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default FaceRecognition;
