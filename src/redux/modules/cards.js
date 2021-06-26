import photo from "./../../components/catalog/src/photo.png";

const moduleName = "cards";

const REFRESH_CARDS = `${moduleName}/REFRESH_CARDS`;

const defaultState = {
  cards: [],
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case REFRESH_CARDS:
      return { ...state, cards: [...payload] };
    default:
      return state;
  }
};

export default reducer;

export const getCards = () => async (dispatch) => {
  const cards = [];
  for (let i = 0; i < 20; i++) {
    cards.push({
      photoes: [photo, photo, photo, photo, photo],
      title: `Фотобудка с ширмой #${i + 1}`,
      size: "2м x 1.5м x 2 м",
      price: 17000 + i * 100,
      id: i,
      options: [
        {
          photo: photo,
          title: "Разработка макета рамки",
          price: 17600,
          picked: false,
          id: 1,
        },
        {
          photo: photo,
          title: "Разработка макета рамки",
          price: 17700,
          picked: false,
          id: 2,
        },
        {
          photo: photo,
          title: "Разработка макета рамки",
          price: 17800,
          picked: false,
          id: 3,
        },
        {
          photo: photo,
          title: "Разработка макета рамки",
          price: 17900,
          picked: false,
          id: 4,
        },
      ],
      rentTimes: [
        {
          title: "1 час",
          value: 1,
          picked: true,
          id: 1,
        },
        {
          title: "2 часа",
          value: 2,
          picked: false,
          id: 2,
        },
        {
          title: "3 часа",
          value: 3,
          picked: false,
          id: 3,
        },
        {
          title: "5 часов",
          value: 5,
          picked: false,
          id: 4,
        },
        {
          title: "выставка 2 дня",
          value: 48,
          picked: false,
          id: 5,
        },
        {
          title: "выставка 3 дня",
          value: 72,
          picked: false,
          id: 6,
        },
      ],
      timeValue: 1,
    });
  }

  // Имитация задержки ответа с сервера
  await new Promise((res) => setTimeout(res, 1000));

  dispatch({
    type: REFRESH_CARDS,
    payload: cards,
  });
};

export const sortCards = (sortKey) => async (dispatch, getState) => {
  const sortTypes = {
    default: () => {},
    cheapFirst: (a, b) => a.price - b.price,
    expensiveFirst: (a, b) => b.price - a.price,
  };

  const cards = getState().cards.cards;

  cards.sort(sortTypes[sortKey]);

  dispatch({
    type: REFRESH_CARDS,
    payload: cards,
  });
};

export const pickOption =
  (cardId, optionIndex) => async (dispatch, getState) => {
    const cards = getState().cards.cards;
    const options = cards[cardId].options.map((option, index) => {
      if (index === optionIndex) {
        return {
          ...option,
          picked: true,
        };
      } else return option;
    });

    cards[cardId].options = [...options];

    dispatch({
      type: REFRESH_CARDS,
      payload: cards,
    });
  };

export const unpickOption =
  (cardId, optionIndex) => async (dispatch, getState) => {
    const cards = getState().cards.cards;
    const options = cards[cardId].options.map((option, index) => {
      if (index === optionIndex) {
        return {
          ...option,
          picked: false,
        };
      } else return option;
    });
    cards[cardId].options = [...options];
    dispatch({
      type: REFRESH_CARDS,
      payload: cards,
    });
  };

export const pickTime = (cardId, timeId) => async (dispatch, getState) => {
  let cards = getState().cards.cards;
  const rentTimes = cards[cardId].rentTimes.map((timeObject) => {
    if (timeObject.id === timeId) {
      return {
        ...timeObject,
        picked: true,
      };
    } else {
      return {
        ...timeObject,
        picked: false,
      };
    }
  });

  cards[cardId].rentTimes = [...rentTimes];
  cards = cards.map((card) =>
    card.id === cardId
      ? {
          ...card,
          timeValue: card.rentTimes.filter(({ picked }) => picked)[0].value,
        }
      : card
  );

  dispatch({
    type: REFRESH_CARDS,
    payload: cards,
  });
};
