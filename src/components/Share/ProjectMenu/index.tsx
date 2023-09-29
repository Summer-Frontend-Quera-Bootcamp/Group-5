import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC, useState } from "react";

const ProjectMenu: FC = () => {
	const [selectedItem, setSelectedItem] = useState("همه پروژه‌ها");

	const projectItemsData = [
		"همه پروژه‌ها",
		"پروژه اول",
		"پروژه دوم",
		"پروژه سوم",
	];

	const projectItems = projectItemsData.map((project) => (
		<>
			<MenuItem
				onClick={() => setSelectedItem(project)}
				flexDir="column"
				alignItems="start"
				fontSize="12px"
				p="8px"
			>
				{project}
			</MenuItem>
		</>
	));

	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<ChevronDownIcon />}
				variant="outline"
				fontSize="12px"
				fontWeight="400"
			>
				{selectedItem}
			</MenuButton>
			<MenuList w="100px" display="flex" flexDir="column">
				{projectItems}
			</MenuList>
		</Menu>
	);
};

export default ProjectMenu;
