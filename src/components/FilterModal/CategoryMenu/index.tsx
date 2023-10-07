import {
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { ChevronIcon, SearchIcon } from "../../../icons";
import { setCategory } from "../../../features/filterSlice";
import { useAppDispatch } from "../../../hooks";

const CategoryMenu: FC<ICategoryMenuProps> = ({
	idx,
	categoryOptions,
	selectedItem,
}) => {
	const dispatch = useAppDispatch();
	const [searchValue, setSearchValue] = useState("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<Menu>
			<MenuButton
				as={Button}
				variant="outline"
				rightIcon={<ChevronIcon w="18px" h="18px" transform="rotate(90deg)" />}
				w="180px"
				fontSize="14px"
				fontWeight="normal"
				color="gray.500"
			>
				{selectedItem || isMenuOpen ? selectedItem : "انتخاب کنید"}
			</MenuButton>
			<MenuList pt="0">
				<InputGroup>
					<InputLeftElement pointerEvents="none">
						<SearchIcon w="24px" h="24px" />
					</InputLeftElement>
					<Input
						variant="flushed"
						type="search"
						placeholder="جستجو بین فیلترها"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</InputGroup>
				{categoryOptions &&
					categoryOptions
						.filter((item) => (searchValue ? item.includes(searchValue) : item))
						.map((fo) => (
							<MenuItem
								onClick={() => {
									setIsMenuOpen(true);
									dispatch(setCategory({ idx, option: fo }));
								}}
							>
								{fo}
							</MenuItem>
						))}
			</MenuList>
		</Menu>
	);
};

export default CategoryMenu;
