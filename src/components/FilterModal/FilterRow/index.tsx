import { Button, HStack, Input, Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import CategoryMenu from "../CategoryMenu";
import SubFilterMenu from "../SubFilterMenu";
import ConditionMenu from "../ConditionMenu";
import { TrashIcon } from "../../../icons";
import { deleteFilter } from "../../../features/filterSlice";
import { useAppDispatch } from "../../../hooks";

const FilterRow: FC<IFilterRowProps> = ({ idx, filter }) => {
	const dispatch = useAppDispatch();

	const filterOptions = useMemo(() => {
		switch (filter.category) {
			case "تگ":
				return ["درس", "کار", "پروژه"];
			case "اعضا":
				return ["امیر", "امین", "الهه"];
			case "اولویت":
				return ["فوری", "بالا", "متوسط", "پایین"];
			case "تاریخ":
				return ["تاریخ"];
			default:
				return [""];
		}
	}, [filter]);

	return (
		<HStack spacing="xs">
			<Text>تسک‌هایی که</Text>
			<CategoryMenu
				idx={idx}
				selectedItem={filter.category}
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
					filterOptions={filterOptions}
					category={filter.category}
				/>
			)}
			<ConditionMenu idx={idx} selectedItem={filter.condition} />
			<Button
				variant="unstyled"
				color="red"
				ms="auto"
				onClick={() => dispatch(deleteFilter({ idx }))}
			>
				<TrashIcon w="24px" h="24px" />
			</Button>
		</HStack>
	);
};

export default FilterRow;
