import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components";

const AuthenticationLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const headerHelper =
		location.pathname === "/auth/login" ? (
			<>
				<Text fontWeight="semibold">ثبت‌نام نکرده ای؟</Text>
				<Button isActive={true} onClick={() => navigate("/auth/register")}>
					ثبت‌نام
				</Button>
			</>
		) : (
			<>
				<Text fontWeight="semibold">قبلا ثبت‌نام کرده‌ای؟</Text>
				<Button isActive={true} onClick={() => navigate("/auth/login")}>
					ورود
				</Button>
			</>
		);
	return (
		<Container
			maxW={[
				"container.sm",
				"container.sm",
				"container.md",
				"container.lg",
				"container.xl",
				"1536px",
			]}
		>
			<Flex align="center" justifyContent="space-between" mt="l">
				<Heading
					bgGradient="linear(to-r, #06846F, #54BEE8)"
					bgClip="text"
					fill="transparent"
					display="inline-block"
					py="2"
				>
					کوئرا تسک منیجر
				</Heading>
				<Flex align="center" gap="s">
					{headerHelper}
				</Flex>
			</Flex>
			<Box pos="fixed" inset="0" zIndex="-1" display="grid" placeItems="center">
				<Outlet />
			</Box>
			<Box
				w="200%"
				h="100%"
				zIndex="-2"
				bgGradient="linear(to-l, #06846F, #54BEE8)"
				pos="fixed"
				bottom="0"
				transform="translateX(50%)"
				clipPath="polygon(100% 100%, -20% 100%, 120% 10%)"
			/>
		</Container>
	);
};

export default AuthenticationLayout;
