import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div style={{ paddingTop: "100px", maxWidth: "500px" }} className="m-auto ">
      <h2 className="section-header">About</h2>
      This application demonstrates a typical e-commerce shopping cart. I have
      used react, typescript, context api, bootstrap and react-bootstrap to
      develop this application.{" "}
      <a href="https://portfolio-asif-al-mahmud.onrender.com/">
        See more projects
      </a>
    </div>
  );
}
