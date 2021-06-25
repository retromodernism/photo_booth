import Popup from "./../popup";
import { connect } from "react-redux";
import { closeEventPopup as closeEventPopupAction } from "./../../redux/modules/popups";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "./index.scss";

SwiperCore.use([EffectFlip, Navigation, Pagination]);

const swiperParams = {
  effect: "flip",
  navigation: true,
  pagination: {
    clickable: true,
  },
  spaceBetween: 11,
  slidesPerView: "auto",
};

const EventPopup = ({ isOpen, closeEventPopup, data }) => {
  const { photoes, subtitle, title, fullText, publicationDate } = data;
  return isOpen ? (
    <Popup isOpen={isOpen} close={closeEventPopup}>
      <div className="eventPopup">
        <div className="eventPopup__close" onClick={closeEventPopup}></div>
        <div className="eventPopup__content">
          <Swiper className="eventPopup__swiper" {...swiperParams}>
            {photoes.map((photo, index) => (
              <SwiperSlide className="eventPopup__swiper-slide" key={index}>
                <img src={photo} alt="" className="eventPopup__img" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="eventPopup__info">
            <div className="eventPopup__info-header">
              <h2 className="eventPopup__info-subtitle">{subtitle}</h2>
              <span className="eventPopup__info-publication-date">
                {publicationDate}
              </span>
            </div>
            <h1 className="eventPopup__info-title">{title}</h1>
            <div className="eventPopup__info-text-wrapper">
              <p
                className="eventPopup__info-text"
                dangerouslySetInnerHTML={{ __html: fullText }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  ) : null;
};

export default connect(
  (state) => ({
    isOpen: state.popups.eventPopup.isOpen,
    data: state.popups.eventPopup.data,
  }),
  {
    closeEventPopup: closeEventPopupAction,
  }
)(EventPopup);
