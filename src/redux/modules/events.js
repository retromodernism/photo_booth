import photo from "./../../components/events/src/photo.png";
import photo1 from "./../../components/events/src/photo1.png";

const moduleName = "events";

const defaultState = {
  events: [],
  unshowedEvents: [],
  showMore: false,
};

const REFRESH_EVENTS = `${moduleName}/REFRESH_EVENTS`;

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case REFRESH_EVENTS:
      return {
        ...state,
        events: [...payload.events],
        unshowedEvents: [...payload.unshowedEvents],
        showMore: payload.showMore,
      };
    default:
      return state;
  }
};

export default reducer;

export const getEvents = () => (dispatch) => {
  const events = [];
  const unshowedEvents = [];
  const showMore = true;

  for (let i = 0; i < 20; i++) {
    if (i < 3) {
      events.push({
        mainPhoto: photo,
        photoes: [photo, photo, photo, photo, photo],
        subtitle: "Услуги",
        title: `Фотобудки, GIF стойка #${i + 1}`,
        description:
          "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
        fullText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        publicationDate: "20 Марта 2021",
      });
    } else {
      unshowedEvents.push({
        mainPhoto: photo,
        photoes: [photo, photo, photo, photo, photo],
        subtitle: "Услуги",
        title: `Фотобудки, GIF стойка #${i + 1}`,
        description:
          "У нас есть широчайший ассортимент фотобудок на все случаи жизни",
        fullText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        publicationDate: "20 Марта 2021",
      });
    }
  }

  dispatch({
    type: REFRESH_EVENTS,
    payload: {
      events,
      unshowedEvents,
      showMore,
    },
  });
};

export const getMoreEvents = () => (dispatch, getState) => {
  const { events, unshowedEvents } = getState().events;
  let showMore = true;

  for (let i = 0; i < 3; i++) {
    if (unshowedEvents.length > 0) {
      events.push(unshowedEvents[0]);
      unshowedEvents.shift();
    } else {
      showMore = false;
      break;
    }
  }

  dispatch({
    type: REFRESH_EVENTS,
    payload: {
      events,
      unshowedEvents,
      showMore,
    },
  });
};
