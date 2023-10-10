import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { AXIOS } from "../../utils/functions/AXIOS";
import { useNavigate } from "react-router-dom";
interface IUserstate {
	username: string | null;
	email: string | null;
	token: string | null;
	loggedIn: boolean;
}

let initialState: IUserstate = {
	username: "",
	email: "",
	token: "",
	loggedIn: false,
};
// const navigate = useNavigate();

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
		setUser(state, action: PayloadAction<IUserstate>) {
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.loggedIn = action.payload.loggedIn;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
