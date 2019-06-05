import * as actionTypes from '../constants/ActionTypes';

export function addInvoice(payload) {
  return {type: actionTypes.ADD_INVOICE, payload};
}

export function fetchInvoices() {
  return dispatch => {
    fetch('http://localhost:8081/invoices').then(response => {
      dispatch({type: actionTypes.FETCH_INVOICES, payload: response.json()});
    }).catch(error =>
        dispatch({type: actionTypes.FETCH_FAILED, error}),
    );
  };
}
