import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { AXIOS } from "../../utils/functions/AXIOS";
interface IUserstate {
	firstname: string | null;
	lastname: string | null;
	email: string | null;
	token: string | null;
	loggedIn: boolean;
}

let initialState: IUserstate = {
	firstname: "",
	lastname: "",
	email: "",
	token: "",
	loggedIn: false,
};

// useEffect(()=>{
//     const token=localStorage.getItem('token')
//     if(token){
//         const email=localStorage.getItem('email')
//         if(email){
//             initialState={
//                 username:localStorage.getItem('username'),
//                 email:email,
//                 token,
//                 loggedIn:true
//             }
//         }
//         AXIOS.defaults.headers.common.Authorization=`Bearer ${token}`
//     }
//     else{
//         // redirect to login page
//     }
// },[])

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUserstate>) {
			state = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
