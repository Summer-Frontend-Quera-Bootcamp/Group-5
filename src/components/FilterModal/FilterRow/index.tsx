import { Button, HStack, Input, Text } from "@chakra-ui/react";
import { FC } from "react";
import CategoryMenu from "../CategoryMenu";
import SubFilterMenu from "../SubFilterMenu";
import ConditionMenu from "../ConditionMenu";
import { TrashIcon } from "../../../icons";

const FilterRow: FC<IFilterRowProps> = ({
	idx,
	filter,
	dispatchFilters,
	filterOptions,
}) => {
	return (
		<HStack spacing="xs">
			<Text>تسک‌هایی که</Text>
			<CategoryMenu
				idx={idx}
				selectedItem={filter.category}
				setSelectedItem={dispatchFilters}
				categoryOptions={["تگ", "تاریخ", "اولویت", "اعضا"]}
			/>
			<Text>آن‌ها</Text>
			{filterOptions[idx]?.length === 1 &&
			filterOptions[idx]?.includes("تاریخ") ? (
				<Input variant="outline" w="fit-content" type="date" />
			) : (
				<SubFilterMenu
					idx={idx}
					selectedItem={filter.filterOption}
					setSelectedItem={dispatchFilters}
					filterOptions={filterOptions[idx]}
					category={filter.category}
				/>
			)}
			<ConditionMenu
				idx={idx}
				selectedItem={filter.condition}
				setSelectedItem={dispatchFilters}
			/>
			<Button
				variant="unstyled"
				color="red"
				ms="auto"
				onClick={() =>
					dispatchFilters({
						action: "DELETE_FILTER",
						payload: { option: "", idx },
					})
				}
			>
				<TrashIcon w="24px" h="24px" />
			</Button>
		</HStack>
	);
};

export default FilterRow;
