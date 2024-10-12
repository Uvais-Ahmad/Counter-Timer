import counterReducer from "./reducers/counterReducer";
import timerReducer from "./reducers/timerReducer";
import notificationReducer from "./reducers/notificationReducer";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer : {
        counterReducer,
        timerReducer,
        notificationReducer,
    }
});