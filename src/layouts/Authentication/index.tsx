import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components";
import {
	authenticationFormLayoutStyle,
	backgroundGradientStyle,
	headingStyle,
} from "./style";

const AuthenticationLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const getHeaderHelper = () => {
		const [text, path, buttonText] =
			location.pathname === "/auth/login"
				? ["ثبت‌نام نکرده ای؟", "/auth/register", "ثبت‌نام"]
				: ["قبلا ثبت‌نام کرده‌ای؟", "/auth/login", "ورود"];

		return (
			<>
				<Text>{text}</Text>
				<Button isActive={true} onClick={() => navigate(path)}>
					{buttonText}
				</Button>
			</>
		);
	};

	return (
		<Container maxW={"container.xl"}>
			<Flex align="center" justifyContent="space-between" mt="lg">
				<Heading sx={headingStyle}>کوئرا تسک منیجر</Heading>
				<Flex align="center" gap="sm">
					{getHeaderHelper()}
				</Flex>
			</Flex>
			<Box sx={authenticationFormLayoutStyle}>
				<Outlet />
			</Box>
			<Box sx={backgroundGradientStyle} />
		</Container>
	);
};

export default AuthenticationLayout;
