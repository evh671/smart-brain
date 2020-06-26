import React, { Component } from "react";
import Routes from "../../utilities/routes";

import "./SignIn.styles.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      isSignError: false,
      signErrorMessage: "",
    };
  }

  onChangeEmail = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitLogin = () => {
    const { onChangeRoute, setUserLogin, setImageUrl } = this.props;

    this.setState({ isSignError: false });

    fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((userLogin) => {
        if (userLogin.id) {
          console.log("userLogin Fetch:", userLogin);

          setUserLogin(userLogin);
          setImageUrl("");
          onChangeRoute(Routes.HOME);
        } else {
          this.setState({
            isSignError: true,
            signErrorMessage: userLogin,

            // signErrorMessage: "Email or Password are incorrect!",
          });
        }
      });
  };

  render() {
    const { onChangeRoute } = this.props;

    return (
      <div className="pa4 black-80">
        <div className="measure center shadow-5">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0 mt3">
            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f4" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f4" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={this.onChangePassword}
              />

              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib mt3"
                type="submit"
                defaultValue="Sign in"
                onClick={this.onSubmitLogin}
              />

              <div className="lh-copy mt3">
                <a
                  onClick={() => onChangeRoute(Routes.REGISTER)}
                  href="#0"
                  className="f4 link dim black db"
                >
                  Register
                </a>
              </div>
            </div>
          </fieldset>
        </div>
        {this.state.isSignError ? (
          <div className="fade-in-out">
            <h1 className="error-message">{this.state.signErrorMessage}</h1>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SignIn;
