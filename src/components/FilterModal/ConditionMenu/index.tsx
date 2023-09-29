import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { ChevronIcon } from "../../../icons";

const ConditionMenu: FC<IConditionMenuProps> = ({
	idx,
	selectedItem,
	setSelectedItem,
}) => {
	return (
		<Menu>
			<MenuButton
				as={Button}
				variant="outline"
				rightIcon={<ChevronIcon w="18px" h="18px" transform="rotate(90deg)" />}
				w="100px"
				fontSize="14px"
				fontWeight="normal"
				color="gray.500"
			>
				{selectedItem}
			</MenuButton>
			<MenuList pt="0">
				<MenuItem
					onClick={() => {
						setSelectedItem({
							action: "SET_CONDITION",
							payload: { idx, option: "است" },
						});
					}}
				>
					است
				</MenuItem>
				<MenuItem
					onClick={() => {
						setSelectedItem({
							action: "SET_CONDITION",
							payload: { idx, option: "نیست" },
						});
					}}
				>
					نیست
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default ConditionMenu;
