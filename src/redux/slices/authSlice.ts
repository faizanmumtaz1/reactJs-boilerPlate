import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  userRole: string | null;
  isAuthenticated: boolean;
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
      state.userRole = action.payload.roleDescription;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.userId = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.roleDescription);
      localStorage.setItem("userId", String(action.payload.id));
      localStorage.setItem("firstName", action.payload.firstName);
      localStorage.setItem("lastName", action.payload.lastName);
      localStorage.setItem("email", action.payload.email);
    },

    logout: (state) => {
      state.userRole = null;
      state.token = null;
      state.isAuthenticated = false;
      state.userId = null;
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userId");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("email");
    },
    restoreSession: (state) => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");
      const userId = localStorage.getItem("userId");
      const firstName = localStorage.getItem("firstName");
      const lastName = localStorage.getItem("lastName");
      const email = localStorage.getItem("email");
      if (token && role && userId) {
        state.token = token;
        state.userRole = role;
        state.isAuthenticated = true;
        state.userId = Number(userId);
        state.firstName = firstName;
        state.lastName = lastName;
        state.email = email;
      }
    },
  },
});

export const { login, logout, restoreSession } = authSlice.actions;
export default authSlice.reducer;
