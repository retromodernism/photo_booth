import Event from "./event";
import "./index.scss";
import photo from "./src/photo.png";
import photo1 from "./src/photo1.png";
import Button from "@material-ui/core/Button";

const Events = (props) => {
  return (
    <section className="events container">
      <h2 className="events__subtitle">Почему выбирают нас?</h2>
      <h1 className="events__title">Новости</h1>
      <Event
        className="events__event"
        mainPhoto={photo}
        photoes={[photo1, photo1, photo1, photo1, photo1]}
        subtitle="Услуги"
        title="Фотобудки, GIF стойка"
        description="У нас есть широчайший ассортимент фотобудок на все случаи жизни"
        fullText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        publicationDate="20 Марта 2021"
        key={1}
      />
      <Event
        className="events__event"
        mainPhoto={photo}
        photoes={[photo1, photo1, photo1, photo1, photo1]}
        subtitle="Услуги"
        title="Фотобудки, GIF стойка"
        description="У нас есть широчайший ассортимент фотобудок на все случаи жизни"
        fullText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        publicationDate="20 Марта 2021"
        key={2}
      />
      <Event
        className="events__event"
        mainPhoto={photo}
        photoes={[photo1, photo1, photo1, photo1, photo1]}
        subtitle="Услуги"
        title="Фотобудки, GIF стойка"
        description="У нас есть широчайший ассортимент фотобудок на все случаи жизни"
        fullText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        publicationDate="20 Марта 2021"
        key={3}
      />
      <Button
        className="events__showmore-button"
        style={{
          marginTop: "30px",
          width: "100%",
          textTransform: "unset",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "18px",
          lineHeight: "18px",
          color: "#EE3D48",
          border: "1px solid #EE3D48",
          borderRadius: "6px",
          padding: "11px 0",
        }}
      >
        Показать еще
      </Button>
    </section>
  );
};

export default Events;
