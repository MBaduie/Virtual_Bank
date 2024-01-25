import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    deposite(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, loanPurpose) {
        return {
          payload: { amount, loanPurpose },
        };
      },
      reducer(state, action) {
        if (state.loan === "") return;
        state.loan = action.payload.amount;
        state.balance += state.loan;
        state.loanPurpose = action.payload.loanPurpose;
      },
    },
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export const deposite = (amount, currency) => {
  if (currency === "USD") {
    return { type: "account/deposite", payload: amount };
  }
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({ type: "account/deposite", payload: converted });
  };
};

export default accountSlice.reducer;

// export default function accountReducer(state = accountIntialState, action) {
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
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// }

// export const deposite = (amount) => {
//   return { type: "account/deposite", payload: amount };
// };

// export const withdraw = (amount) => {
//   return { type: "account/withdraw", payload: amount };
// };

// export const requestLoan = (amount, purpose) => {
//   return { type: "account/requestLoan", payload: { amount, purpose } };
// };

// export const payLoan = (amount) => {
//   return { type: "account/payLoan", payLoan: amount };
// };
