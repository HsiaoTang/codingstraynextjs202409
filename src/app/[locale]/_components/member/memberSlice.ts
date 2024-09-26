import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface memberState {
  name: string;
}

const initialState: memberState = {
  name: 'guest',
};

const memberSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setName } = memberSlice.actions;
export default memberSlice.reducer;