import React from "react";
import icon1 from "../images/icon/arrow-down.png";
import icon2 from "../images/icon/arrow-right.png";
import icon3 from "../images/icon/arrow-down.png";
import icon4 from "../images/icon/exchange.png";
import Highlight from "./Highlight";
import "./CardFigur.css";

const data = [
  {
    image: icon1,
    title: "Withdraw",
    desc: "Online-Banking and have full control over your bank account.",
  },
  {
    image: icon2,
    title: "Send Money",
    desc: "Online-Banking and have full control over your bank account.",
  },
  {
    image: icon3,
    title: "Cards",
    desc: "Online-Banking and have full control over your bank account.",
  },
  {
    image: icon4,
    title: "Exchange",
    desc: "Online-Banking and have full control over your bank account.",
  },
];

const CardFigur = () => {
  return (
    <div class="money-option-area">
      <div class="container">
        <div class="row justify-content-center">
          {data.map((item) => {
            const { image, title, desc } = item;
            return (
              <div class="col-lg-3 col-md-6">
                <Highlight image={image} title={title} desc={desc} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardFigur;
