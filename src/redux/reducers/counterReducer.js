// // remove the counter action creators imports
// import {
//   DECREMENT_COUNTER,
//   INCREMENT_COUNTER,
//   RESET_COUNTER
// } from "../actions/counterActions";

const { createSlice } = require("@reduxjs/toolkit");

// const INITIAL_STATE = { count: 0 };

// // refactor to use the createSlice method
// export const counterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { count: ++state.count };
//     case DECREMENT_COUNTER:
//       return { count: --state.count };

//     case RESET_COUNTER:
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// export the counter reducer function and action creators here

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    incrementCounter: (state) => {
      state.count++;
    },
    decrementCounter: (state) => {
      state.count--;
    },
    resetCounter: (state) => {
      state.count = 0;
    }
  }
});

export const {incrementCounter, decrementCounter, resetCounter} = counterSlice.actions;
export default counterSlice.reducer;
