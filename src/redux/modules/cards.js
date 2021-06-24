import photo from "./../../components/catalog/src/photo.png";

const moduleName = "cards";

const GET_CARDS = `${moduleName}/GET_CARDS`;

const defaultState = {
  cards: [],
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_CARDS:
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
    type: GET_CARDS,
    payload: cards,
  });
};
