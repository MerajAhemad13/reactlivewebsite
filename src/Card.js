import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div id="card" className="col-md-4  col-10 mx-auto">
          <div className=" card g-col-4">
            <img src={props.imgsrc} className="all-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title ">{props.title}</h5>
              <p className="card-text my-3">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <NavLink to="" className="btn btn-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
        </div>
    </>
  );
}

export default Card;
