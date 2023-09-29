import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	ModalHeader,
	Flex,
} from "@chakra-ui/react";
import { FilterIcon } from "../../icons";
import { FC, useMemo, useReducer } from "react";
import FilterRow from "./FilterRow";

const filterReducer = (
	state: TFilters,
	{ action, payload }: IReducer
): TFilters => {
	switch (action) {
		case "SET_CATEGORY":
			return state.map((filter, i) =>
				i === payload.idx
					? { ...filter, category: payload.option as TCategory }
					: filter
			);
		case "SET_FILTER_OPTION":
			return state.map((filter, i) =>
				i === payload.idx ? { ...filter, filterOption: payload.option } : filter
			);
		case "SET_CONDITION":
			return state.map((filter, i) =>
				i === payload.idx
					? { ...filter, condition: payload.option as "است" | "نیست" }
					: filter
			);
		case "DELETE_FILTER":
			return state.filter((_, i) => i !== payload.idx);
		case "ADD_FILTER":
			return [
				...state,
				{
					category: "",
					filterOption: "",
					condition: "است",
				},
			];
		default:
			return state;
	}
};

const FilterModal: FC<IFilterModalProps> = ({ initialFilters }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [filters, dispatchFilters] = useReducer<
		React.Reducer<TFilters, IReducer>
	>(filterReducer, initialFilters);

	const filterOptions: string[][] = useMemo(() => {
		const options: string[][] = [];
		filters.forEach((filter) => {
			switch (filter.category) {
				case "تگ":
					options.push(["درس", "کار", "پروژه"]);
					break;
				case "اعضا":
					options.push(["امیر", "امین", "الهه"]);
					break;
				case "اولویت":
					options.push(["فوری", "بالا", "متوسط", "پایین"]);
					break;
				case "تاریخ":
					options.push(["تاریخ"]);
					break;
				default:
					options.push([""]);
					break;
			}
		});
		return options;
	}, [filters]);

	return (
		<>
			<Button
				variant="ghost"
				fontSize="sm"
				fontWeight="normal"
				leftIcon={<FilterIcon w="24px" h="24px" />}
				onClick={onOpen}
			>
				فیلترها
			</Button>
			<Modal
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				blockScrollOnMount={true}
				size="3xl"
			>
				<ModalOverlay />
				<ModalContent borderRadius="8px" p="24px">
					<ModalHeader p="0" fontWeight="800" pos="absolute" top="sm">
						فیلترها
					</ModalHeader>
					<ModalCloseButton left="sm" top="sm" />
					<ModalBody px="0" py="32px" fontSize="14px">
						<Flex flexDir="column" gap="md">
							{filters.map((filter, idx) => {
								return (
									<FilterRow
										idx={idx}
										filter={filter}
										dispatchFilters={dispatchFilters}
										filterOptions={filterOptions}
									/>
								);
							})}
							<Button
								variant="link"
								color="teal"
								alignSelf="start"
								fontSize="12px"
								onClick={() =>
									dispatchFilters({
										action: "ADD_FILTER",
										payload: { idx: filters.length + 1, option: "" },
									})
								}
							>
								افزودن فیلتر جدید
							</Button>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default FilterModal;
