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
import { FC } from "react";
import FilterRow from "./FilterRow";
import { addFilter } from "../../features/filterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

const FilterModal: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const filters = useAppSelector((state) => state.filters);
	const { highlight } = useAppSelector((state) => state.theme);
	const dispatch = useAppDispatch();

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
								return <FilterRow idx={idx} filter={filter} />;
							})}
							<Button
								variant="link"
								color={highlight}
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
