import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllprojects } from "../../services/api";

const initialState: IProject[] = [];

export const setProjectItems = createAsyncThunk(
	"projects/setProjectItems",
	(workspaceId) => {
		const res = getAllprojects(workspaceId);
		return res.data;
	}
);

const projectSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			setProjectItems.fulfilled,
			(_, action: PayloadAction<IWorkspace[]>) => {
				return action.payload;
			}
		);
	},
});

export default projectSlice.reducer;
