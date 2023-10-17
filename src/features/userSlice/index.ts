import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserstate {
	refresh: string;
	access: string;
	user_id: number;
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	phone_number: string;
	thumbnail: string;
	loggedIn: boolean;
}

let initialState: IUserstate = {
	refresh: "",
	access: "",
	user_id: 0,
	username: "",
	email: "",
	first_name: "",
	last_name: "",
	phone_number: "",
	thumbnail: "",
	loggedIn: false,
};

const access = localStorage.getItem("access");
const refresh = localStorage.getItem("refresh");
const localUser = localStorage.getItem("user");
if (access && refresh && localUser) {
	const userPayload = JSON.parse(localUser);
	initialState = {
		refresh,
		access,
		...userPayload,
		loggedIn: true,
	};
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		switchLoggedIn(state, action: PayloadAction<boolean>) {
			state.loggedIn = action.payload;
		},
		setUser(state, action: PayloadAction<any>) {
			state.refresh = action.payload.refresh;
			state.access = action.payload.access;
			state.user_id = action.payload.user_id;
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.first_name = action.payload.first_name;
			state.last_name = action.payload.last_name;
			state.phone_number = action.payload.phone_number;
			state.thumbnail = action.payload.thumbnail;
		},
	},
});

export const { switchLoggedIn, setUser } = userSlice.actions;

export default userSlice.reducer;
