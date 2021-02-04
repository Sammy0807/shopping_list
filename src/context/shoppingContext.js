import createDataContext from './createDataContext';

const shoppingListReducer = (state, action) => {
  switch (action.type) {
    case 'add_item':
      return { ...state, pendingItems: action.payload };
    case 'sendTopending':
      return {
        crossedOffItems: state.crossedOffItems.filter(
          (item) => item.id !== action.payload.id
        ),
        pendingItems: [...state.pendingItems, action.payload],
      };
    case 'crossOff':
      return {
        pendingItems: state.pendingItems.filter(
          (item) => item.id !== action.payload.id
        ),
        crossedOffItems: [...state.crossedOffItems, action.payload],
      };
    default:
      return state;
  }
};
const addItem = (dispatch) => (data) => {
  dispatch({ type: 'add_item', payload: data });
};
const sendToPending = (dispatch) => (data) => {
  dispatch({
    type: 'sendTopending',
    payload: data,
  });
};

const crossOff = (dispatch) => (data) => {
  dispatch({
    type: 'crossOff',
    payload: data,
  });
};

export const { Context, Provider } = createDataContext(
  shoppingListReducer,
  { addItem, sendToPending, crossOff },
  { pendingItems: [], crossedOffItems: [] }
);
