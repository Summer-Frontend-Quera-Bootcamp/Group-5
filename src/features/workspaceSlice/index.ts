import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllWorkSpaces } from "../../services/api";

const initialState: IWorkspace[] = [];

export const setWorkspaceItems = createAsyncThunk(
	"workspaces/setWorkspaceItems",
	async () => {
		return getAllWorkSpaces()
			.then((res) => res.data)
			.catch((err) => console.error(err));
	}
);

const workspaceSlice = createSlice({
	name: "workspaces",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			setWorkspaceItems.fulfilled,
			(state, action: PayloadAction<IWorkspace[]>) => {
				state = action.payload;
			}
		);
	},
});

export const {} = workspaceSlice.reducer;

export default workspaceSlice.reducer;

