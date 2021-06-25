const moduleName = "popups";

const OPEN_EVENT_POPUP = `${moduleName}/OPEN_EVENT_POPUP`;
const CLOSE_EVENT_POPUP = `${moduleName}/CLOSE_EVENT_POPUP`;
const OPEN_PHOTO_BOOTH_POPUP = `${moduleName}/OPEN_PHOTO_BOOTH_POPUP`;
const CLOSE_PHOTO_BOOTH_POPUP = `${moduleName}/CLOSE_PHOTO_BOOTH_POPUP`;

const defaultState = {
  eventPopup: {
    isOpen: false,
    data: {},
  },
  photoBoothPopup: {
    isOpen: false,
    data: {},
  },
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case OPEN_EVENT_POPUP:
      return {
        ...state,
        eventPopup: {
          isOpen: true,
          data: {
            ...payload,
          },
        },
      };
    case CLOSE_EVENT_POPUP:
      return {
        ...state,
        eventPopup: {
          isOpen: false,
          data: {},
        },
      };
    case OPEN_PHOTO_BOOTH_POPUP:
      return {
        ...state,
        photoBoothPopup: {
          isOpen: true,
          data: {
            ...payload,
          },
        },
      };
    case CLOSE_PHOTO_BOOTH_POPUP:
      return {
        ...state,
        photoBoothPopup: {
          isOpen: false,
          data: {},
        },
      };
    default:
      return state;
  }
};

export default reducer;

export const openEventPopup =
  (photoes, subtitle, title, fullText, publicationDate) => (dispatch) => {
    dispatch({
      type: OPEN_EVENT_POPUP,
      payload: { photoes, subtitle, title, fullText, publicationDate },
    });
  };

export const closeEventPopup = () => (dispatch) => {
  dispatch({
    type: CLOSE_EVENT_POPUP,
    payload: {},
  });
};
