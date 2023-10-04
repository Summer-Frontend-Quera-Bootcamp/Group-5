import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
	name: "theme",
	initialState: {
		mode: "light",
		accent: "teal",
	},
	reducers: {
		switchTheme(state) {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
		changeAccent(state, action) {
			state.accent = action.payload;
		},
	},
});

export const { switchTheme, changeAccent } = themeSlice.actions;

export default themeSlice.reducer;
