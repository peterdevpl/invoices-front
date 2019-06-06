import * as actionTypes from '../constants/ActionTypes';

export function addInvoice(payload) {
  return {type: actionTypes.ADD_INVOICE, payload};
}

export function fetchInvoices() {
  return dispatch => {
    return fetch('http://localhost:8081/invoices')
      .then(response => response.json())
      .then(data => dispatch({type: actionTypes.FETCH_INVOICES, payload: data}))
      .catch(error => dispatch({type: actionTypes.FETCH_FAILED, error}));
  };
}
