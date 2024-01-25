// import { combineReducers, createStore } from "redux";

// const accountIntialState = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// const customerIntialState = {
//   fullName: "",
//   nationalID: "",
//   createdAt: "",
// };

// function accountReducer(state = accountIntialState, action) {
//   switch (action.type) {
//     case "account/deposite":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: state.loan - action.payload,
//         loanPurpose: "payed $100",
//         balance: state.balance - action.payload,
//       };
//     default:
//       return state;
//   }
// }

// function customerReducer(state = customerIntialState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateCustomer":
//       return {
//         ...state,
//         fullName: action.payload,
//       };
//     default:
//       return state;
//   }
// }
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

// const store = createStore(rootReducer);
// // store.dispatch({ type: "account/deposit", payload: 500 });
// // store.dispatch({ type: "account/withdraw", payload: 200 });
// // store.dispatch({
// //   type: "account/requestLoan",
// //   payload: { amount: 1000, purpose: "Buy a Wallet" },
// // });
// // console.log(store.getState());
// // store.dispatch({ type: "account/payLoan", payload: 100 });
// // console.log(store.getState());
// // store.dispatch({ type: "account/1", payload: 10 });
// // console.log(store.getState());

// const deposite = (amount) => {
//   return { type: "account/deposite", payload: amount };
// };

// store.dispatch(deposite(6000));
// console.log(store.getState());

// const withdraw = (amount) => {
//   return { type: "account/withdraw", payload: amount };
// };

// const requestLoan = (amount, purpose) => {
//   return { type: "account/requestLoan", payload: { amount, purpose } };
// };

// const payLoan = (amount) => {
//   return { type: "account/payLoan", payLoan: amount };
// };
// // customer Action Creators

// const createCustomer = (fullName, nationalID) => {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       nationalID,
//       createdAt: new Date().toISOString(),
//     },
//   };
// };

// store.dispatch(createCustomer("Muhammed Badauie", "29511080103135"));
// console.log(store.getState());
// export const updateCustomer = (fullName) => {
//   return { type: "customer/updateCustomer", payload: fullName };
// };
