import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  userRole: string | null;
  isAuthenticated: any;
  userId: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  userPermissions: string[];
}

const initialState: AuthState = {
  token: null,
  userRole: null,
  isAuthenticated: false,
  userId: null,
  firstName: null,
  lastName: null,
  email: null,
  userPermissions: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      //  your code here
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
