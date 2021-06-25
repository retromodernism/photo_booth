import "./index.scss";
import { ReactComponent as PhoneIcon } from "./src/phone.svg";
import { ReactComponent as MarkerIcon } from "./src/marker.svg";

const Contacts = (props) => {
  return (
    <section className="contacts container">
      <h2 className="contacts__subtitle">Мы всегда доступны для вас</h2>
      <h1 className="contacts__title">Контакты</h1>
      <div className="contacts__item" key={1}>
        <PhoneIcon className="contactItem__icon" />
        <h1 className="contactItem__title">Телефон</h1>
        <a href="tel:+74951234567" className="contactItem__text">
          +7 495 123 45 67
        </a>
      </div>
      <div className="contacts__item" key={2}>
        <MarkerIcon className="contactItem__icon" />
        <h1 className="contactItem__title">Адрес</h1>
        <p className="contactItem__text">
          109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине только с
          улицы Люблинская
        </p>
      </div>
      <div className="contacts__item" key={3}>
        <div className="contactItem__icon"></div>
        <h1 className="contactItem__title">Почта</h1>
        <a
          href="mailto:Info@test.ru"
          className="contactItem__text"
          style={{
            textDecorationLine: "underline",
          }}
        >
          Info@test.ru
        </a>
      </div>
    </section>
  );
};

export default Contacts;
