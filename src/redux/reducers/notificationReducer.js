import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message: "",
    type: "success"
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
    },
    extraReducers: {
        // The is the actionType of another slice action.
        "counter/resetCounter": (state) => {
            state.message = "Counter reset";
            state.type = "info";
        }
    }
});

export default notificationSlice.reducer;