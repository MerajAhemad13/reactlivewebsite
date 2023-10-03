import React from "react";
import web from "../src/Images/img1.svg";
import "./index.css";
// import { NavLink } from "react-router-dom";
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        visit="/service"
        btname="Get Started"
        imgsrc={web}
      />
    </>
  );
}

export default Home;
