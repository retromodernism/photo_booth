import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import Option from "./option";
import RentTimeBtn from "./rentTimeBtn";
import Button from "@material-ui/core/Button";

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

const Card = ({ photoes, title, size, price }) => {
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
          <Option
            className="card__options-option"
            photo={photoes[0]}
            title="Разработка макета рамки"
            price="17 500"
            key={1}
          />
          <Option
            className="card__options-option"
            photo={photoes[0]}
            title="Разработка макета рамки"
            price="17 500"
            key={2}
          />
          <Option
            className="card__options-option"
            photo={photoes[0]}
            title="Разработка макета рамки"
            price="17 500"
            key={3}
          />
        </div>
      </div>
      <div className="card__rent-time">
        <h3 className="card__rent-time-title">Укажите время аренды</h3>
        <div className="card__rent-time-buttons">
          <RentTimeBtn
            className="card__rent-time-button"
            title="1 час"
            value={1}
            active={true}
          />
          <RentTimeBtn
            className="card__rent-time-button"
            title="2 часа"
            value={2}
          />
          <RentTimeBtn
            className="card__rent-time-button"
            title="3 часа"
            value={3}
          />
          <RentTimeBtn
            className="card__rent-time-button"
            title="5 часов"
            value={5}
          />
          <RentTimeBtn
            className="card__rent-time-button"
            title="выставка 2 дня"
            value={48}
          />
          <RentTimeBtn
            className="card__rent-time-button"
            title="выставка 3 дня"
            value={72}
          />
        </div>
      </div>
      <div className="card__footer">
        <div className="card__price">
          {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽"}
        </div>
        <Button
          className="card__submit"
          style={{
            fontFamily: "Roboto",
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: "21px",
            textAlign: "center",
            padding: "10px 10px",
            background: "#EE3D48",
            color: "#ffffff",
            letterSpacing: "unset",
          }}
        >
          Оставить заявку
        </Button>
      </div>
    </div>
  );
};

export default Card;
