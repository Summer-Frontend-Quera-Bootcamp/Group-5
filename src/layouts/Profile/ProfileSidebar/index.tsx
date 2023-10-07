import { FC } from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import {
	ArrowIcon,
	SettingsIcon,
	UserProfileCheckmarkIcon,
	UserProfileEditIcon,
} from "../../../icons";
import { buttonStyle, headingStyle } from "./style";
import { useAppSelector } from "../../../hooks";

const ProfileSidebar: FC<IProfileSidebarProps> = ({
	selectedPage,
	handleClick,
}) => {
	const { accent, text, highlight } = useAppSelector((state) => state.theme);
	return (
		<>
			<Heading sx={headingStyle}>کوئرا تسک منیجر</Heading>
			<Box>
				<VStack align="start" gap="lg">
					<Button
						colorScheme={accent}
						gap="xs"
						p="4px 8px"
						onClick={() => history.back()}
					>
						<ArrowIcon transform="rotate(180deg)" w="24px" h="24px" />
						بازگشت
					</Button>
					<Button
						variant="ghost"
						sx={buttonStyle}
						bg={selectedPage === "personal" ? highlight : "unset"}
						color={selectedPage === "personal" ? text : "unset"}
						fontWeight={selectedPage === "personal" ? "800" : "normal"}
						onClick={() => handleClick("personal")}
						_hover={{
							bg: highlight,
						}}
					>
						<UserProfileEditIcon w="24px" h="24px" />
						اطلاعات فردی
					</Button>
					<Button
						variant="ghost"
						sx={buttonStyle}
						bg={selectedPage === "account" ? highlight : "unset"}
						color={selectedPage === "account" ? text : "unset"}
						fontWeight={selectedPage === "account" ? "800" : "normal"}
						onClick={() => handleClick("account")}
						_hover={{
							bg: highlight,
						}}
					>
						<UserProfileCheckmarkIcon w="24px" h="24px" />
						اطلاعات اکانت
					</Button>
					<Button
						variant="ghost"
						sx={buttonStyle}
						bg={selectedPage === "settings" ? highlight : "unset"}
						color={selectedPage === "settings" ? text : "unset"}
						fontWeight={selectedPage === "settings" ? "800" : "normal"}
						onClick={() => handleClick("settings")}
						_hover={{
							bg: highlight,
						}}
					>
						<SettingsIcon w="24px" h="24px" />
						تنظیمات
					</Button>
				</VStack>
			</Box>
		</>
	);
};

export default ProfileSidebar;
