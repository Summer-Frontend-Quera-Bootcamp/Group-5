import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { AXIOS } from "../../utils/functions/AXIOS";
import { useNavigate } from "react-router-dom";
interface IUserstate {
	loggedIn: boolean;
}

let initialState: IUserstate = {
	loggedIn: false,
};
const token = localStorage.getItem("token");
if (token) {
	initialState = {
		loggedIn: true,
	};
}

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
	},
});

export const { switchLoggedIn } = userSlice.actions;

export default userSlice.reducer;
