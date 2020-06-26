import React from "react";
import "./Rank.styles.css";

const Rank = ({ userLogin }) => (
  <div>
    <div className="white f3">{"Your current rank is..."}</div>
    <div className="white f1">{`#${userLogin.entries}`}</div>
  </div>
);

export default Rank;
