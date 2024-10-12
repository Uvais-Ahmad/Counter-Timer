import counterReducer from "./reducers/counterReducer";
import timerReducer from "./reducers/timerReducer";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer : {
        counterReducer,
        timerReducer
    }
});