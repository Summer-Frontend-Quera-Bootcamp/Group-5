import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { setUser, switchLoggedIn } from "../../../features/userSlice";
import { AXIOS } from "../AXIOS";

export const RefreshUserToken = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const refreshToken = localStorage.getItem("refresh");
	const localUser = localStorage.getItem("user");
	if (refreshToken && localUser) {
		const userPayload = JSON.parse(localUser);
		AXIOS.post("/accounts/refresh/", {
			refresh: refreshToken,
		}).then((res) => {
			dispatch(
				setUser({
					access: res.data.access,
					refresh: refreshToken,
					...userPayload,
				})
			);
			AXIOS.defaults.headers.common.Authorization = `Bearer ${res.data.access}`;
		});
		dispatch(switchLoggedIn(true));
	} else {
		localStorage.removeItem("token");
		localStorage.removeItem("refresh");
		localStorage.removeItem("user");
		dispatch(switchLoggedIn(false));
		AXIOS.defaults.headers.common.Authorization = "";
		navigate("/");
	}
};
