import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  userRole: string | null;
  isAuthenticated: any;
  userId: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

const initialState: AuthState = {
  token: null,
  userRole: null,
  isAuthenticated: false,
  userId: null,
  firstName: null,
  lastName: null,
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.access_token;
      state.isAuthenticated = true;
      state.userRole = action.payload.user_role;
      localStorage.setItem("token", action.payload.access_token);
    },

    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },

    restoreSession: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.token = token;
        state.isAuthenticated = true;
      }
    },
  },
});

export const { login, logout, restoreSession } = authSlice.actions;
export default authSlice.reducer;
