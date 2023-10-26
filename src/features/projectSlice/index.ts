import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllWorkSpaces, getAllprojects } from "../../services/api";

const initialState: { workspaceId: number; projectsList: IProject[] }[] = [];

const projectsGenerator = function (wsIds: number[]) {
	const projects = wsIds.map(async (id) => {
		const res = await getAllprojects(id);
		const data = { workspaceId: id, projectsList: res.data };
		return data;
	});
	return projects;
};

export const setProjectItems = createAsyncThunk<any>(
	"projects/setProjectItems",
	async () => {
		try {
			const res = await getAllWorkSpaces();
			const ids = res.data.map(({ id }: { id: number }) => id);
			const projects = await Promise.all(projectsGenerator(ids));
			return projects;
		} catch (err) {
			console.error(err);
		}
	}
);

const projectSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(setProjectItems.fulfilled, (_, action) => {
			console.log(action.payload);
			return action.payload;
		});
	},
});

export default projectSlice.reducer;
