import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <div>
        <img src={require("../assets/branch3.svg")} alt="" />
      </div>
      <h1>{title}</h1>
      <div>
        <img src={require("../assets/branch2.svg")} alt="" />
      </div>
    </header>
  );
};

export default Header;
