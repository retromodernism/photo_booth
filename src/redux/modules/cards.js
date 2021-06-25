import photo from "./../../components/catalog/src/photo.png";

const moduleName = "cards";

const REFRESH_CARDS = `${moduleName}/REFRESH_CARDS`;

const defaultState = {
  cards: [],
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case REFRESH_CARDS:
      return { ...state, cards: payload };
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
