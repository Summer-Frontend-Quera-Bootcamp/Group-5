import { Navigate, Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
	const loc = useLocation();
	const nav = loc.pathname === "/" && <Navigate to="auth/login" />;
	return (
		<>
			{nav}
			<Outlet />
		</>
	);
};

export default RootLayout;
