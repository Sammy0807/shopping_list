import createDataContext from './createDataContext';

const shoppingListReducer = (state, action) => {
  switch (action.type) {
    case 'add_item':
      return {
        ...state,
        pendingItems: [...state.pendingItems, action.payload],
      };
    case 'Search_item':
      return {
        ...state,
        filteredString: action.payload,
      };
    case 'sendTopending':
      return {
        ...state,
        crossedOffItems: state.crossedOffItems.filter(
          (item) => item.id !== action.payload.id
        ),
        pendingItems: [...state.pendingItems, action.payload],
      };
    case 'crossOff':
      return {
        ...state,
        pendingItems: state.pendingItems.filter(
          (item) => item.id !== action.payload.id
        ),
        crossedOffItems: [...state.crossedOffItems, action.payload],
      };
    case 'editItem':
      let index = state.pendingItems.findIndex(
        (e) => e.id === action.payload.id
      );
      state.pendingItems[index] = action.payload;
      return {
        ...state,
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

const editItem = (dispatch) => (data) => {
  dispatch({ type: 'editItem', payload: data });
};

const searchItem = (dispatch) => (data) => {
  dispatch({
    type: 'Search_item',
    payload: data,
  });
  return data;
};

export const { Context, Provider } = createDataContext(
  shoppingListReducer,
  { addItem, sendToPending, crossOff, searchItem, editItem },
  {
    pendingItems: [
      { id: 1, item: 'Bread', category: 'FOOD', quantity: 1, amount: 4 },
    ],
    crossedOffItems: [
      {
        id: 2,
        item: 'Bedsheets',
        category: 'AESTHETICS',
        quantity: 1,
        amount: 40,
      },
    ],
    filteredString: '',
  }
);
