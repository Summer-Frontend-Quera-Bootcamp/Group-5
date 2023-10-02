import { Box, Flex } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import AccountInfo from "./AccountInfo";
import PersonalInfo from "./PersonalInfo";
import ProfileSidebar from "./ProfileSidebar";
import Settings from "./Settings";
import { pageStyle, sidebarStyle } from "./style";

const ProfileLayout = () => {
	const [activePage, setActivePage] = useState<
		"personal" | "account" | "settings"
	>("personal");

	const page = useMemo(() => {
		switch (activePage) {
			case "personal":
				return <PersonalInfo />;
			case "account":
				return <AccountInfo />;
			case "settings":
				return <Settings />;
		}
	}, [activePage]);

	return (
		<Flex wrap="nowrap">
			<Box sx={sidebarStyle}>
				<ProfileSidebar selectedPage={activePage} handleClick={setActivePage} />
			</Box>
			<Box sx={pageStyle}>{page}</Box>
		</Flex>
	);
};

export default ProfileLayout;
