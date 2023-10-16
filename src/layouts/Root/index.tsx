import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";

const RootLayout: React.FC = () => {
	const { loggedIn } = useAppSelector((state) => state.user);
	const loc = useLocation();
	const nav = loc.pathname === "/" && (
		<Navigate to={loggedIn ? "dashboard" : "auth/login"} />
	);

	return (
		<>
			{nav}
			<Outlet />
		</>
	);
};

export default RootLayout;
