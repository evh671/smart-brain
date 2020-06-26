import React from "react";
import Routes from "../../utilities/routes";

import "./Navigation.styles.css";

const Navigation = ({ route, onChangeRoute }) => {
  if (route === Routes.HOME)
    return (
      <div className="navigation-bar">
        <p
          onClick={() => onChangeRoute(Routes.SIGN_IN)}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </div>
    );

  return (
    <div className="navigation-bar">
      <p
        onClick={() => onChangeRoute(Routes.SIGN_IN)}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign In
      </p>
      <p
        onClick={() => onChangeRoute(Routes.REGISTER)}
        className="f3 link dim black underline pa3 pointer"
      >
        Register
      </p>
    </div>
  );
};

export default Navigation;
