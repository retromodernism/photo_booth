import Event from "./event";
import "./index.scss";
import photo from "./src/photo.png";
import photo1 from "./src/photo1.png";
import Button from "@material-ui/core/Button";

import { useEffect } from "react";
import {
  getEvents as getEventsAction,
  getMoreEvents as getMoreEventsAction,
} from "./../../redux/modules/events";
import { connect } from "react-redux";

const Events = ({ events, showMore, getEvents, getMoreEvents }) => {
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section className="events container">
      <h2 className="events__subtitle">Почему выбирают нас?</h2>
      <h1 className="events__title">Новости</h1>
      {events.map(
        (
          {
            mainPhoto,
            photoes,
            subtitle,
            title,
            description,
            fullText,
            publicationDate,
          },
          index
        ) => (
          <Event
            className="events__event"
            mainPhoto={mainPhoto}
            photoes={photoes}
            subtitle={subtitle}
            title={title}
            description={description}
            fullText={fullText}
            publicationDate={publicationDate}
            key={index}
          />
        )
      )}
      {showMore && (
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
          onClick={getMoreEvents}
        >
          Показать еще
        </Button>
      )}
    </section>
  );
};

export default connect(
  ({ events }) => ({ events: events.events, showMore: events.showMore }),
  {
    getEvents: getEventsAction,
    getMoreEvents: getMoreEventsAction,
  }
)(Events);
