import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Keycloak from "keycloak-js";


interface memberState {
  name: string;
  authenticated: boolean;
}

const initialState: memberState = {
  name: 'guest',
  authenticated: false,
}

// export const initializeKeycloak = createAsyncThunk(
//   'member/initializeKeycloak',
//   async (_, thunkAPI) => {
//     let initialized: boolean = false;
//     let authenticated: boolean = false;
//     const keycloak: Keycloak = new Keycloak({
//       url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
//       realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
//       clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
//     });
//     keycloak.init({ onLoad: 'check-sso' }).then((auth) => {
//       authenticated = auth;
//       initialized = true;
//     }).catch(() => {
//       authenticated = false;
//       initialized = false;
//     });
//     return { initialized, authenticated };
//   }
// );

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setAuthenticated(state, action: PayloadAction<boolean>) {
      state.authenticated = action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(initializeKeycloak.pending, (state) => {
  //       state.initialized = false;
  //     })
  //     .addCase(initializeKeycloak.fulfilled, (state, action) => {
  //       const { initialized, authenticated } = action.payload;
  //       state.initialized = initialized;
  //       state.authenticated = authenticated;
  //     })
  //     .addCase(initializeKeycloak.rejected, (state, action) => {
  //       state.initialized = false;
  //       state.authenticated = false;
  //       console.error("Keycloak initialization failed:", action.error.message);
  //     });
  // },
});

export const { setName, setAuthenticated } = memberSlice.actions;
export default memberSlice.reducer;