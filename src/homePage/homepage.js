import "./homepage-style.css";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/ChaosCorp.png";
import imgleft from "../assets/left-image.jpeg";
import imgright from "../assets/right-image.jpeg";

import Details from "./details/details";
import LeftPerson from "./leftPerson/leftPerson";
import RightPerson from "./rightPerson/rightperson";
function Home() {
  const [expansion, setExpansion] = useState(0);

  var output;
  if (expansion == -1) {
    output = (
      <div className="home">
        <div
          className="left-person-expanded"
          onDoubleClick={() => setExpansion(0)}
        >
          <LeftPerson />
          <img src={imgleft} className="photo-left" />
        </div>
      </div>
    );
  } else if (expansion == 1) {
    output = (
      <div className="home">
        <div
          className="right-person-expanded"
          onDoubleClick={() => setExpansion(0)}
        >
          <img src={imgright} className="photo-right" />
          <RightPerson />
        </div>
      </div>
    );
  } else
    output = (
      <div className="home">
        <div className="left-person" onClick={() => setExpansion(-1)}></div>
        <div className="right-person" onClick={() => setExpansion(1)}></div>
      </div>
    );
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand>
          <img
            src={logo}
            className="object-contain"
            alt=""
            style={{ height: "60px", marginRight: "1rem" }}
          ></img>
          Chaos Corp.
        </Navbar.Brand>
        <Nav>
          <Nav.Link> Home </Nav.Link>
          <Nav.Link> About </Nav.Link>
          <Nav.Link> Contact </Nav.Link>
        </Nav>
      </Navbar>
      {output}
      <Details></Details>
    </div>
  );
}

export default Home;
