import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	AuthenticationLayout,
	DashboardLayout,
	ProfileLayout,
	RootLayout,
} from "./layouts";
import {
	ForgotPage,
	LoginPage,
	ProjectPage,
	RegisterPage,
	ResetPage,
	WorkSpacePage,
} from "./pages";

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
				path: "Reset-password",
				element: <AuthenticationLayout />,
				children: [
					{
						index: true,
						element: <ResetPage />,
					},
				],
			},
			{
				path: "dashboard",
				element: <DashboardLayout />,
				children: [
					{
						index: true,
						element: <WorkSpacePage />,
					},
					{
						path: "workspaces/:workspaceId/projects/:projectId",
						element: <ProjectPage />,
					},
				],
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
