import "./index.scss";

const Event = ({
  className,
  mainPhoto,
  photoes,
  subtitle,
  title,
  description,
  fullText,
  publicationDate,
}) => {
  return (
    <div className={`${className} event`}>
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

export default Event;
