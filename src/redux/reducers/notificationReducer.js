import { createSlice } from "@reduxjs/toolkit"
import { resetCounter } from "./counterReducer";

const initialState = {
    message: "",
    type: "success"
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
    },
    // extraReducers: {
    //     // The is the actionType of another slice action.
    //     "counter/resetCounter": (state) => {
    //         state.message = "Counter reset";
    //         state.type = "info";
    //     }
    // }

    // When ExtraReducers defined as an object it receives a builder object.
    // Using Builder Callbacks
    extraReducers: (builder) => {
        builder.addCase(resetCounter, (state, action ) => {
            state.message = "Counter reset";
            state.type = "info";
        })
    }
});

export default notificationSlice.reducer;