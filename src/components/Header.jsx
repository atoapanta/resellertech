import React from "react";

const Header = () => {
  return (
    <nav
      className="fixed-top navbar opacity-50"
      style={{ fontFamily: "Titan One" }}
    >
      <div className="container">
        <div className="navbar-brand" href="#">
          <h1>AT</h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
