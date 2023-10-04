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
import { FC, useMemo } from "react";
import FilterRow from "./FilterRow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addFilter } from "../../features/filterSlice";

const FilterModal: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const filters = useSelector((state: RootState) => state.filters);
	const dispatch = useDispatch();

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
										filterOptions={filterOptions}
									/>
								);
							})}
							<Button
								variant="link"
								color="teal"
								alignSelf="start"
								fontSize="12px"
								onClick={() => dispatch(addFilter())}
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
