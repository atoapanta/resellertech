import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="fixed-bottom footer ">
      <p className="text-center text-white m-0 py-3">
        Copyright &copy; {fullYear}
        <a
          className="text-white mx-1"
          href="http://"
          style={{ textDecoration: "none" }}
        >
          AmbatoTech
        </a>
        - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
