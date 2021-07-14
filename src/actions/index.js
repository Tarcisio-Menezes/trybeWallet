export const LOGIN = 'LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVED_CURRENCIES = 'RECEIVED_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const logInWallet = (value) => ({
  type: LOGIN,
  payload: value,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receivedCurrencies = (payload) => ({
  type: RECEIVED_CURRENCIES,
  payload,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  payload: id,
});
// export const addExpense = (expenses, currencies) => ({
//   type: ADD_EXPENSE,
//   payload: [expenses, currencies],
// });

export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((result) => dispatch(receivedCurrencies(result)));
  };
}

export function addExpense(expenses) {
  const expense = {
    type: ADD_EXPENSE,
    payload: expenses,
  };
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((result) => dispatch(receivedCurrencies(result)))
      .then(() => dispatch(expense));
  };
  // pq assim não funciona?
  // return (dispatch) => {
  //   dispatch(fetchCurrency()).then(dispatch(expense));
  // };
}
