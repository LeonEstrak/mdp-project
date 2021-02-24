import "./leftPerson.css";
import all3 from "../../assets/all3.png";
import reactjs from "../../assets/reactjs.png";
import angular from "../../assets/angular.png";
import React from "react";

export default function LeftPerson(props) {
  return (
    <div className="details-left">
      <h1 className="left-name">Aniket Chakraborty</h1>
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

      <div style={{ margin: "3rem" }}>
        <h2> Technologies Familiar with</h2>
        <br />
        <div style={{ marginLeft: "6rem" }}>
          <img src={all3} style={{ height: "130px" }} />
          <br />
          <img src={reactjs} style={{ height: "160px" }} />
          <img src={angular} style={{ height: "130px" }} />
        </div>
      </div>
    </div>
  );
}
