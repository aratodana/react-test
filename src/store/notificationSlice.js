import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      const notification = action.payload;
      state.push(notification);
    },
    takeNotification(state) {
      if (!state.length) {
        return null;
      }
      state.shift();
    },
  },
});

export const { addNotification, takeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
