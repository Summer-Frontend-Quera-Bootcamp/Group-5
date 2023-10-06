import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
	name: "theme",
	initialState: {
		mode: "light",
		accent: "green",
	},
	reducers: {
		switchTheme(state) {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
		setAccent(state, action: PayloadAction<string>) {
			state.accent = action.payload;
		},
	},
});

export const { switchTheme, setAccent } = themeSlice.actions;

export default themeSlice.reducer;
