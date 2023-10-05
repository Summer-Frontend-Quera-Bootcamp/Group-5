type TCategory = "" | "تگ" | "اعضا" | "اولویت" | "تاریخ";
interface ICategoryMenuProps {
	idx: number;
	categoryOptions: TCategory[];
	selectedItem: string;
}
interface ISubFilterMenuProps {
	idx: number;
	filterOptions: string[];
	selectedItem: string;
	category: string;
}
interface IConditionMenuProps {
	idx: number;
	selectedItem: string;
}
type TActions =
	| "SET_CATEGORY"
	| "SET_FILTER_OPTION"
	| "SET_CONDITION"
	| "DELETE_FILTER"
	| "ADD_FILTER";
interface IPayload {
	idx: number;
	option: string;
}
interface IReducer {
	action: TActions;
	payload: IPayload;
}
interface IFilter {
	category: TCategory;
	filterOption: string;
	condition: "است" | "نیست";
}
type TFilters = IFilter[];
interface IFilterRowProps {
	idx: number;
	filter: IFilter;
}
interface IFilterModalProps {
	initialFilters: TFilters;
}
