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
// useEffect(() => {
// 	const token = localStorage.getItem("token");
// 	if (token) {
// 		const email = localStorage.getItem("email");
// 		if (email) {
// 			initialState = {
// 				username: localStorage.getItem("username"),
// 				email: email,
// 				token,
// 				loggedIn: true,
// 			};
// 		}
// 		AXIOS.defaults.headers.common.Authorization = `Bearer ${token}`;
// 		navigate("/dashboard");
// 	} else {
// 		navigate("/");
// 	}
// }, []);

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		switchLoggedIn(state) {
			state.loggedIn = state.loggedIn ? false : true;
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
			state.loggedIn = action.payload.loggedIn;
		},
	},
});

export const { switchLoggedIn, setUser } = userSlice.actions;

export default userSlice.reducer;
