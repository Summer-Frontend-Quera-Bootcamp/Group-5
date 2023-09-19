import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	AuthenticationLayout,
	DashboardLayout,
	ProfileLayout,
} from "./layouts";

const router = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				path: "/auth",
				element: <AuthenticationLayout />,
			},
			{
				path: "/dashboard",
				element: <DashboardLayout />,
			},
			{
				path: "/profile",
				element: <ProfileLayout />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;

