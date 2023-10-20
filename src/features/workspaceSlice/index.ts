import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllWorkSpaces } from "../../services/api";

const initialState: IWorkspace[] = [];

export const setWorkspaceItems = createAsyncThunk(
	"workspaces/setWorkspaceItems",
	async () => {
		try {
			const res = await getAllWorkSpaces();
			return res.data;
		} catch (err) {
			console.error(err);
		}
	}
);

const workspaceSlice = createSlice({
	name: "workspaces",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			setWorkspaceItems.fulfilled,
			(_, action: PayloadAction<IWorkspace[]>) => {
				return action.payload;
			}
		);
	},
});

export default workspaceSlice.reducer;
