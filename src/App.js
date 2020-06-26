import React, { Component } from "react";
import Particles from "react-particles-js";

import Navigation from "./components/Navigation/Navigation.component";
import Logo from "./components/Logo/Logo.component";
import Rank from "./components/Rank/Rank.component";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.component";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.component";

import SignIn from "./components/SignIn/SignIn.component";
import Register from "./components/Register/Register.component";
import ToastMessage from "./components/ToastMessage/ToastMessage.component";

import Routes from "./utilities/routes";

import "./App.css";

const isImageUrl = (url) => url.match(/\.(jpeg|jpg|gif|png)$/) != null;

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      imageUrl: "",
      box: {},
      userLogin: {},
      route: Routes.SIGN_IN,
    };
  }

  onChangeRoute = (route) => {
    this.setState({ route });
  };

  setUserLogin = (userLogin) => {
    this.setState({ userLogin });
    console.log("userLogin: ", this.state.userLogin);
  };

  setImageBox = (box) => {
    this.setState({ box });
  };

  setImageUrl = (imageUrl) => {
    this.setState({ imageUrl });
  };

  render() {
    const { imageUrl, box, userLogin, route } = this.state;
    console.log("App.js imageUrl: ", imageUrl);

    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation route={route} onChangeRoute={this.onChangeRoute} />

        {route === Routes.SIGN_IN ? (
          <SignIn
            onChangeRoute={this.onChangeRoute}
            setUserLogin={this.setUserLogin}
            setImageUrl={this.setImageUrl}
          />
        ) : route === Routes.REGISTER ? (
          <Register onChangeRoute={this.onChangeRoute} />
        ) : (
          <div>
            <Logo />
            <Rank userLogin={userLogin} />
            <ImageLinkForm
              setImageBox={this.setImageBox}
              setImageUrl={this.setImageUrl}
            />

            {isImageUrl(imageUrl) ? (
              <FaceRecognition
                imageUrl={imageUrl}
                box={box}
                userId={this.state.userLogin.id}
                setUserLogin={this.setUserLogin}
              />
            ) : (
              <ToastMessage imageUrl={imageUrl}>
                Illegal Url Image!
              </ToastMessage>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
