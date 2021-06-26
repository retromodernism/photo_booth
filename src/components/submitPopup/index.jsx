import "./index.scss";

import Popup from "./../popup";
import Select from "react-select";
import InputMask from "react-input-mask";
import Button from "@material-ui/core/Button";
import { Fragment } from "react";

import { pickTime as pickTimeAction } from "./../../redux/modules/cards";
import { closePhotoBoothPopup as closePhotoBoothPopupAction } from "./../../redux/modules/popups";
import { connect } from "react-redux";

const SubmitPopup = ({
  cardId,
  isOpen,
  closePhotoBoothPopup,
  pickTime,
  cards,
}) => {
  const { options, price, rentTimes, size, title, timeValue } =
    cards.filter(({ id }) => id === cardId)[0] || {};

  const selectOptions = rentTimes?.map(({ value, title, picked, id }) => ({
    value,
    picked,
    rentTimeId: id,
    label: title,
  }));
  const defaultSelectValue = selectOptions?.filter(({ picked }) => picked)[0];

  let totalPrice = price;
  options?.forEach(({ picked, price }) => {
    if (picked) {
      totalPrice += price;
    }
  });
  totalPrice *= timeValue;

  return isOpen ? (
    <Popup isOpen={isOpen} close={closePhotoBoothPopup}>
      <div className="submitPopup">
        <div
          className="submitPopup__close"
          onClick={closePhotoBoothPopup}
        ></div>
        <h1 className="submitPopup__title">Ваша заявка</h1>
        <div className="submitPopup__info">
          <div className="submitPopup__booth-description">
            <h2 className="submitPopup__subtitle">{title}</h2>
            <p className="submitPopup__size">
              Размер: <span className="submitPopup__size-gray">{size}</span>
            </p>
          </div>
          <p className="submitPopup__price submitPopup__booth-description-price">
            {price} ₽
          </p>
          <Select
            className="submitPopup__select-time"
            isSearchable={false}
            classNamePrefix="submitPopup__select-time"
            defaultValue={defaultSelectValue}
            options={selectOptions}
            onChange={({ rentTimeId }) => {
              pickTime(cardId, rentTimeId);
            }}
          />

          {options
            .filter(({ picked }) => picked)
            .map(({ title, price }, index) => (
              <Fragment>
                <h2 className="submitPopup__subtitle submitPopup__option">
                  {title}
                </h2>
                <p className="submitPopup__price submitPopup__option">
                  {price} ₽
                </p>
              </Fragment>
            ))}
        </div>
        <div className="submitPopup__total">
          <span className="submitPopup__final">Итого: </span>
          <span className="submitPopup__final-price">{totalPrice} ₽</span>
        </div>
        <div className="submitPopup__footer">
          <form className="submitPopup__form">
            <div className="submitPopup__form-phone-wrapper">
              <InputMask
                type="phone"
                className="submitPopup__form-phone"
                mask="+7 (999) 999 99 99"
                placeholder="+7 (000) 000 00 00"
              />
              <Select
                className="submitPopup__form-select"
                menuPlacement="top"
                isSearchable={false}
                classNamePrefix="submitPopup__form-select"
                defaultValue={{
                  label: "Позвоните мне",
                  value: "Звонок",
                }}
                options={[
                  {
                    label: "Позвоните мне",
                    value: "Звонок",
                  },
                  {
                    label: "Напишите мне смс",
                    value: "Смс",
                  },
                  {
                    label: "Напишите мне в телеграм",
                    value: "Телеграм",
                  },
                ]}
              />
            </div>
            <Button
              className="submitPopup__form-submit"
              style={{
                marginTop: "12px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#ffffff",
                textTransform: "unset",
                background: "#ee3d48",
                padding: "9.5px 0",
                width: "100%",
                textAlign: "center",
              }}
            >
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </Popup>
  ) : null;
};

export default connect(
  (state) => ({
    isOpen: state.popups.photoBoothPopup.isOpen,
    ...state.popups.photoBoothPopup.data,
    cards: state.cards.cards,
  }),
  {
    closePhotoBoothPopup: closePhotoBoothPopupAction,
    pickTime: pickTimeAction,
  }
)(SubmitPopup);
