import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllprojects } from "../../services/api";
import { AXIOS } from "../../utils/functions/AXIOS";

const initialState: IProject[] = [];

export const setProjectItems = createAsyncThunk(
	"projects/setProjectItems",
	async (workspaceId, thunkAPI) => {
		const res = await AXIOS.get(`/workspaces/${workspaceId}/projects/`);
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
