import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCategory = "" | "تگ" | "اعضا" | "اولویت" | "تاریخ";
interface IFilter {
	category: TCategory;
	filterOption: string;
	condition: "است" | "نیست";
}
interface IPayload {
	idx: number;
	option: string;
}
const initialState: IFilter[] = [
	{
		category: "",
		filterOption: "",
		condition: "است",
	},
];

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setCategory(
			state,
			action: PayloadAction<{ idx: number; option: TCategory }>
		) {
			const filter = state.find((_, idx) => idx === action.payload.idx);
			if (filter) {
				filter.category = action.payload.option;
			}
		},
		setFilterOption(state, action: PayloadAction<IPayload>) {
			const filter = state.find((_, idx) => idx === action.payload.idx);
			if (filter) {
				filter.filterOption = action.payload.option;
			}
		},
		setCondition(
			state,
			action: PayloadAction<{ idx: number; option: "است" | "نیست" }>
		) {
			const filter = state.find((_, idx) => idx === action.payload.idx);
			if (filter) {
				filter.condition = action.payload.option;
			}
		},
		deleteFilter(state, action: PayloadAction<{ idx: number }>) {
			return state.filter((_, idx) => idx !== action.payload.idx);
		},
		addFilter(state) {
			state.push({
				category: "",
				filterOption: "",
				condition: "است",
			});
		},
		clearFilters() {
			return [{ category: "", filterOption: "", condition: "است" }];
		},
	},
});

export const {
	addFilter,
	deleteFilter,
	setCategory,
	setCondition,
	setFilterOption,
	clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
