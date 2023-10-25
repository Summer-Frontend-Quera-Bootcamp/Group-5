import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import { CloseIcon, FlagIcon } from "../../../../icons";

interface IPriorityListProps {
	priority: "پایین" | "متوسط" | "بالا" | "فوری" | "حذف اولویت";
	onChange: Dispatch<
		SetStateAction<"پایین" | "متوسط" | "بالا" | "فوری" | "حذف اولویت">
	>;
}

const priorityButtonStyle = {
	bg: "none",
	alignItems: "center",
	justifyContent: "center",
	border: "1px dashed",
	borderRadius: "full",
	p: "8px",
	w: "50px",
	h: "50px",
	color: "gray.400",
};

const PriorityList: React.FC<IPriorityListProps> = ({ priority, onChange }) => {
	const menuItems: {
		label: "پایین" | "متوسط" | "بالا" | "فوری" | "حذف اولویت";
		icon: JSX.Element;
	}[] = [
		{ label: "فوری", icon: <FlagIcon w="20px" h="20px" color="red.500" /> },
		{ label: "بالا", icon: <FlagIcon w="20px" h="20px" color="yellow.400" /> },
		{ label: "متوسط", icon: <FlagIcon w="20px" h="20px" color="cyan.500" /> },
		{ label: "پایین", icon: <FlagIcon w="20px" h="20px" color="gray.400" /> },
		{
			label: "حذف اولویت",
			icon: <CloseIcon w="20px" h="20px" color="red.500" />,
		},
	];

	const getPriority = useCallback(() => {
		switch (priority) {
			case "فوری":
				return "red.500";
			case "بالا":
				return "yellow.400";
			case "متوسط":
				return "cyan.500";
			case "پایین":
			case "حذف اولویت":
				return "gray.400";
		}
	}, [priority]);

	return (
		<Menu>
			<MenuButton as={Button} sx={priorityButtonStyle}>
				<FlagIcon color={getPriority()} />
			</MenuButton>
			<MenuList
				style={{
					maxHeight: "240px",
					overflowY: "auto",
					borderRadius: "8px",
					boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.16)",
				}}
			>
				{menuItems.map((item, index) => (
					<MenuItem
						key={index}
						style={{ marginTop: "3px" }}
						onClick={() => onChange(item.label)}
					>
						<span style={{ display: "flex", alignItems: "center" }}>
							{item.icon}
							<span style={{ marginLeft: "10px", marginRight: "10px" }}>
								{item.label}
							</span>
						</span>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PriorityList;
