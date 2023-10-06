import { FC } from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import {
	ArrowIcon,
	SettingsIcon,
	UserProfileCheckmarkIcon,
	UserProfileEditIcon,
} from "../../../icons";
import { buttonStyle, headingStyle } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const ProfileSidebar: FC<IProfileSidebarProps> = ({
	selectedPage,
	handleClick,
}) => {
	const { accent } = useSelector((state: RootState) => state.theme);
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
						bg={selectedPage === "personal" ? "brand-secondary" : "unset"}
						fontWeight={selectedPage === "personal" ? "800" : "normal"}
						onClick={() => handleClick("personal")}
					>
						<UserProfileEditIcon w="24px" h="24px" />
						اطلاعات فردی
					</Button>
					<Button
						variant="ghost"
						sx={buttonStyle}
						bg={selectedPage === "account" ? "brand-secondary" : "unset"}
						fontWeight={selectedPage === "account" ? "800" : "normal"}
						onClick={() => handleClick("account")}
					>
						<UserProfileCheckmarkIcon w="24px" h="24px" />
						اطلاعات اکانت
					</Button>
					<Button
						variant="ghost"
						sx={buttonStyle}
						bg={selectedPage === "settings" ? "brand-secondary" : "unset"}
						fontWeight={selectedPage === "settings" ? "800" : "normal"}
						onClick={() => handleClick("settings")}
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
