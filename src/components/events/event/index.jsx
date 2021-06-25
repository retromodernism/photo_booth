import "./index.scss";

import { openEventPopup as openEventPopupAction } from "./../../../redux/modules/popups";
import { connect } from "react-redux";

const Event = ({
  className,
  mainPhoto,
  photoes,
  subtitle,
  title,
  description,
  fullText,
  publicationDate,
  openEventPopup,
}) => {
  return (
    <div
      className={`${className} event`}
      onClick={() =>
        openEventPopup(photoes, subtitle, title, fullText, publicationDate)
      }
    >
      <img src={mainPhoto} alt="Главное изображение" className="event__img" />
      <div className="event__content">
        <h2 className="event__subtitle">{subtitle}</h2>
        <h1 className="event__title">{title}</h1>
        <p className="event__description">{description}</p>
        <span className="event__publication-date">{publicationDate}</span>
      </div>
    </div>
  );
};

export default connect(null, {
  openEventPopup: openEventPopupAction,
})(Event);
