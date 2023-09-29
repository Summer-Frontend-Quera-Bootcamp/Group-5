import {
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Tag,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { ChevronIcon, SearchIcon } from "../../../icons";

const SubFilterMenu: FC<ISubFilterMenuProps> = ({
	idx,
	filterOptions,
	selectedItem,
	setSelectedItem,
	category,
}) => {
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
				{isMenuOpen ? selectedItem : "انتخاب کنید"}
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
				{filterOptions &&
					filterOptions
						.filter((item) => (searchValue ? item.includes(searchValue) : item))
						.map((fo) => {
							return (
								<MenuItem
									bg="unset"
									onClick={() => {
										setIsMenuOpen(true);
										setSelectedItem({
											action: "SET_FILTER_OPTION",
											payload: { option: fo, idx },
										});
									}}
								>
									{category === "تگ" ? <Tag borderRadius="full">{fo}</Tag> : fo}
								</MenuItem>
							);
						})}
			</MenuList>
		</Menu>
	);
};

export default SubFilterMenu;
