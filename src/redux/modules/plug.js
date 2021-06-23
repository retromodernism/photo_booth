const moduleName = "plug";

const PLUG_ACTION = `${moduleName}/PLUG_ACTION`;

const defaultState = {
  plug: null,
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case PLUG_ACTION:
      return { ...state, plug: payload };
    default:
      return state;
  }
};

export default reducer;

export const plugAction = (payload) => async (dispatch) => {
  dispatch({
    type: PLUG_ACTION,
    payload: payload,
  });
};
