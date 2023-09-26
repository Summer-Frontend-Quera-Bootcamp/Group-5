import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	AuthenticationLayout,
	DashboardLayout,
	ProfileLayout,
	RootLayout,
} from "./layouts";
import { ForgotPage, LoginPage, RegisterPage, ResetPage } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "auth",
				element: <AuthenticationLayout />,
				children: [
					{
						path: "login",
						element: <LoginPage />,
					},
					{
						path: "register",
						element: <RegisterPage />,
					},
					{
						path: "forgot",
						element: <ForgotPage />,
					},
					{
						path: "reset",
						element: <ResetPage />,
					},
				],
			},
			{
				path: "dashboard",
				element: <DashboardLayout />,
				children: [
					{
						path: "workspaces",
						// todo: create workspace page
					},
					{
						path: ":projectId",
						// todo: create project layout
					},
				]
			},
			{
				path: "profile",
				element: <ProfileLayout />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
