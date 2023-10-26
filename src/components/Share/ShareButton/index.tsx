import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { ShareIcon } from "../../../icons";
import { useAppSelector } from "../../../hooks";

const ShareButton: FC<{
	type: "project" | "task" | "space";
	onClick: () => void;
}> = ({ type, onClick }) => {
	const { accent } = useAppSelector((state) => state.theme);
	switch (type) {
		case "project":
		case "task":
			return (
				<Button
					variant="ghost"
					fontSize="body-md"
					fontWeight="normal"
					ms="auto"
					leftIcon={<ShareIcon w="24px" h="24px" />}
					onClick={onClick}
				>
					اشتراک گذاری
				</Button>
			);
		case "space":
			return (
				<Button
					colorScheme={accent}
					variant="solid"
					fontSize="body-md"
					fontWeight="normal"
					ms="auto"
					leftIcon={<ShareIcon w="24px" h="24px" />}
					onClick={onClick}
				>
					اشتراک گذاری
				</Button>
			);
	}
};

export default ShareButton;
