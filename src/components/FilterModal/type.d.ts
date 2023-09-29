type TCategory = "" | "تگ" | "اعضا" | "اولویت" | "تاریخ";

interface ICategoryMenuProps {
	idx: number;
	categoryOptions: TCategory[];
	selectedItem: string;
	setSelectedItem: Dispatch<IReducer>;
}

interface ISubFilterMenuProps {
	idx: number;
	filterOptions: string[];
	selectedItem: string;
	setSelectedItem: Dispatch<IReducer>;
	category: string;
}

interface IConditionMenuProps {
	idx: number;
	selectedItem: string;
	setSelectedItem: Dispatch<IReducer>;
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
	dispatchFilters: Dispatch<IReducer>;
	filterOptions: string[][];
}

interface IFilterModalProps {
	initialFilters: TFilters;
}
