interface IUser {
	id: number;
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	phone_number: string;
	thumbnail: string;
}

interface IUsersResponse {
	id: number;
	user: IUser;
}

interface IShareProps {
	type: "project" | "space" | "task";
	workspaceId: number;
	projectId: number;
}
