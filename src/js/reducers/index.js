import * as actionTypes from '../constants/ActionTypes';

const initialState = {
  invoices: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === actionTypes.ADD_INVOICE) {
    return Object.assign({}, state, {
      invoices: state.invoices.concat(action.payload),
    });
  } else if (action.type === actionTypes.FETCH_INVOICES) {
    return Object.assign({}, state, {
      invoices: action.payload,
    });
  }
  return state;
}

export default rootReducer;
