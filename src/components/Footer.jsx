import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="fixed-bottom">
      <p className="text-center m-0 py-2">
        <a
          className="text-dark"
          href="http://"
          style={{ textDecoration: "none" }}
        >
          Copyright &copy; {fullYear} AmbatoTech - All rights reserved.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
