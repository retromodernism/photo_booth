import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import Option from "./option";
import RentTimeBtn from "./rentTimeBtn";
import Button from "@material-ui/core/Button";

import { useState } from "react";

import { pickTime as pickTimeAction } from "./../../../redux/modules/cards";
import { openPhotoBoothPopup as openPhotoBoothPopupAction } from "./../../../redux/modules/popups";
import { connect } from "react-redux";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.scss";
import "./index.scss";

SwiperCore.use([Navigation, Pagination]);

const swiperParams = {
  navigation: true,
  pagination: {
    clickable: true,
  },
  spaceBetween: 16,
  slidesPerView: "auto",
};

const Card = ({
  photoes,
  title,
  size,
  price,
  options,
  id,
  rentTimes,
  timeValue,
  openPhotoBoothPopup,
  pickTime,
}) => {
  let totalPrice = price;
  options.forEach(({ picked, price }) => {
    if (picked) {
      totalPrice += price;
    }
  });
  totalPrice *= timeValue;

  const cardId = id;

  return (
    <div className="card">
      <Swiper className="card__swiper" {...swiperParams}>
        {photoes.length > 0 &&
          photoes.map((photo, index) => (
            <SwiperSlide className="card__swiper-slide" key={index}>
              <img className="card__swiper-slide-img" src={photo} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
      <h1 className="card__title">{title}</h1>
      <span className="card__size">
        Размер: <span className="card__size_gray">{size}</span>
      </span>
      <div className="card__options">
        <h2 className="card__options-title">Доп. опции</h2>
        <div className="card__options-list">
          {options.map((option, index) => (
            <Option
              className="card__options-option"
              key={index}
              cardId={id}
              optionIndex={index}
              {...option}
            />
          ))}
        </div>
      </div>
      <div className="card__rent-time">
        <h3 className="card__rent-time-title">Укажите время аренды</h3>
        <div className="card__rent-time-buttons">
          {rentTimes.map(({ title, picked, id }, index) => (
            <RentTimeBtn
              className="card__rent-time-button"
              title={title}
              active={picked}
              key={index}
              onClick={() => {
                pickTime(cardId, id);
              }}
            />
          ))}
        </div>
      </div>
      <div className="card__footer">
        <div className="card__price">
          {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽"}
        </div>
        <Button
          className="card__submit"
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 18,
            lineHeight: "21px",
            textAlign: "center",
            padding: "10px 10px",
            background: "#EE3D48",
            color: "#ffffff",
            letterSpacing: "unset",
          }}
          onClick={() => openPhotoBoothPopup({ cardId })}
        >
          Оставить заявку
        </Button>
      </div>
    </div>
  );
};

export default connect(null, {
  openPhotoBoothPopup: openPhotoBoothPopupAction,
  pickTime: pickTimeAction,
})(Card);
