import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
  userIsloading: Boolean | null;
}

const initialState: LoadingState = {
  userIsloading: true,
};

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setUserIsloading(state, action: PayloadAction<any>) {
      state.userIsloading = action.payload;
    },
  },
});

export const { setUserIsloading } = loadingSlice.actions;
export default loadingSlice.reducer;
