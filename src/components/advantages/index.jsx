import "./index.scss";
import React from "react";
import { ReactComponent as Icon1 } from "./src/icon1.svg";
import { ReactComponent as Icon2 } from "./src/icon2.svg";
import { ReactComponent as Icon3 } from "./src/icon3.svg";
import { ReactComponent as Icon4 } from "./src/icon4.svg";

const Advantages = (props) => {
  return (
    <section className="advantages">
      <div className="advantages__item" key={1}>
        <Icon1 className="advantages__item-icon" />
        <span className="advantages__item-description">
          Безлимитная
          <br />
          печать фото
        </span>
      </div>
      <div className="advantages__item" key={2}>
        <Icon2 className="advantages__item-icon" />
        <span className="advantages__item-description">
          Фотореквизит
          <br />в наличии
        </span>
      </div>
      <div className="advantages__item" key={3}>
        <Icon3 className="advantages__item-icon" />
        <span className="advantages__item-description">
          Фотоотчет в электронном виде
        </span>
      </div>
      <div className="advantages__item" key={4}>
        <Icon4 className="advantages__item-icon" />
        <span className="advantages__item-description">
          Цены
          <br />
          ниже рынка
        </span>
      </div>
    </section>
  );
};

export default Advantages;
