import "./rightPerson.css";
import nodejs from "../../assets/nodejs-logo.png";
import spring from "../../assets/spring-boot.png";
import go from "../../assets/Go-Logo.png";
import php from "../../assets/php.png";
import flask from "../../assets/flask.png";
import React from "react";

export default function RightPerson(props) {
  return (
    <div className="details-right">
      <h1 className="right-name">Swattik Chakrabarty</h1>
      <br />

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <br />
      <br />
      <br />

      <div style={{ margin: "1rem" }}>
        <h2> Technologies Familiar with</h2>
        <br />
        <div style={{ marginLeft: "4.5rem" }}>
          <img src={nodejs} style={{ height: "130px" }} />
          <img style={{ marginRight: "1rem", height: "130px" }} src={go} />
          <img src={spring} style={{ height: "130px" }} />
          <br />
          <img src={php} style={{ marginLeft: "4rem", height: "130px" }} />
          <img src={flask} style={{ marginLeft: "3.5rem", height: "130px" }} />
        </div>
      </div>
    </div>
  );
}
