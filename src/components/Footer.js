import React from "react";

const Footer = ({ data }) => {
  return (
    <ul className="footer">
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Footer;
