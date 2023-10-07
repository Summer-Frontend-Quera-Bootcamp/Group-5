import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: {
	mode: "light" | "dark";
	accent: TColorSchemes;
	highlight: TColorHighlights;
	text: "white" | "black";
};

const prevTheme = localStorage.getItem("theme");

if (prevTheme) {
	initialState = JSON.parse(prevTheme);
} else {
	initialState = {
		mode: "light",
		accent: "teal",
		highlight: "teal.500",
		text: "white",
	};
	localStorage.setItem("theme", JSON.stringify(initialState));
}

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		switchTheme(state) {
			state.mode = state.mode === "light" ? "dark" : "light";
		},
		setAccent(state, action: PayloadAction<TColorSchemes>) {
			state.accent = action.payload;
			let highlight: TColorHighlights;
			switch (state.accent) {
				case "blue":
					highlight = "blue.500";
					break;
				case "cyan":
					highlight = "cyan.400";
					break;
				case "gray":
					highlight = "gray.500";
					break;
				case "green":
					highlight = "green.500";
					break;
				case "orange":
					highlight = "orange.500";
					break;
				case "pink":
					highlight = "pink.500";
					break;
				case "purple":
					highlight = "purple.500";
					break;
				case "red":
					highlight = "red.500";
					break;
				case "teal":
					highlight = "teal.500";
					break;
				case "yellow":
					highlight = "yellow.400";
					break;
			}
			state.highlight = highlight;
			if (state.accent === "cyan" || state.accent === "yellow") {
				state.text = "black";
			} else {
				state.text = "white";
			}

			localStorage.setItem(
				"theme",
				JSON.stringify({
					mode: "light",
					accent: state.accent,
					highlight: state.highlight,
					text: state.text,
				})
			);
		},
	},
});

export const { switchTheme, setAccent } = themeSlice.actions;

export default themeSlice.reducer;
