import React from "react";

const Highlight = (props) => {
  return (
    <div class="single-work mt-2 text-center">
      <div>
        <img className="mt-4" src={props.image} alt="icon" />
      </div>
      <h5 className="mt-5">
        <a className="figur-title" href="#">
          {props.title}
        </a>
      </h5>
      <p className="figur-text">{props.desc}</p>
      <a class="angle-btn mt-3" href="/login">
        <i class="fa fa-arrow-circle-right fa-4x"></i>
      </a>
    </div>
  );
};

export default Highlight;
