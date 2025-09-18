import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUserFromToken: (state) => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          state.token = token;
          state.user = {
            id: decoded?.id || decoded?._id,
            name: decoded?.name || "User",
            role: decoded?.role || "user",
          };
        } catch (error) {
          state.token = null;
          state.user = null;
        }
      }
    },

    setUser: (state, action) => {
      if (!action.payload) {
        state.user = null;
        state.token = null;
        return;
      }

      const { id, name, role } = action.payload;
      state.user = {
        id,
        name: name || "User",
        role,
      };
      state.token = Cookies.get("token") || null;
    },

    logout: (state) => {
      Cookies.remove("token");
      state.token = null;
      state.user = null;
    },
  },
});

export const { loadUserFromToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
